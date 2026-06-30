<?php

namespace App\Services;

use App\Models\Contato;
use App\Models\Lead;

use Carbon\Carbon;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;

class ContactService
{
    public function create(array $data): array
    {
        return DB::transaction(function () use ($data) {
            $cepData = $this->fetchCepData($data['cep']);

            if (!$cepData) {
                throw new \Exception('Por favor, informe um CEP válido.');
            }

            $contactData = $this->prepareContactData($data, $cepData);

            $contato = Contato::create($contactData);

            $conversoes = $this->countConversions($contato->email);

            $lead = $this->createLead(
                contato: $contato,
                data: $data,
                conversoes: $conversoes,
                horaEntrada: $data['entrada'] ?? null,
                posicaoFormulario: $data['posicao_formulario'] ?? null,
            );
            
            $email = $this->sendEmail($data);

            return [
                'contato' => $contato,
                'lead' => $lead,
                'email' => $email,
            ];
        });
    }

    protected function fetchCepData(string $cep): ?array
    {
        $cep = preg_replace('/[^0-9]/', '', $cep);

        try {
            $response = Http::timeout(30)
                ->get("https://viacep.com.br/ws/{$cep}/json/");

            if (!$response->successful()) {
                return null;
            }

            $data = $response->json();

            if (($data['erro'] ?? false) === true) {
                return null;
            }

            return $data;
        } catch (\Throwable $exception) {
            report($exception);

            return null;
        }
    }

    protected function prepareContactData(array $data, array $cepData): array
    {
        return [
            'nome' => $data['nome'],
            'telefone' => $data['telefone'],
            'email' => $data['email'],
            'cep' => preg_replace('/[^0-9]/', '', $data['cep']),
            'uf' => $cepData['uf'] ?? null,
            'endereco' => $cepData['logradouro'] ?? null,
            'bairro' => $cepData['bairro'] ?? null,
            'cidade' => $cepData['localidade'] ?? null,
            'token' => md5(uniqid(rand(), true)),
        ];
    }

    protected function countConversions(string $email): int
    {
        return Lead::query()
            ->where([
                'email' => $email,
                'cliente' => 'matrizoffice',
                'projeto' => 'lpmatrizoffice',
            ])
            ->count();
    }

    protected function createLead(Contato $contato, array $data, int $conversoes, ?string $horaEntrada, ?string $posicaoFormulario): Lead {
        return Lead::create([
            'nome' => $contato->nome,
            'email' => $contato->email,
            'telefone' => $contato->telefone,
            'cep' => $contato->cep,
            'uf' => $contato->uf,
            'cidade' => $contato->cidade,
            'conversoes' => $conversoes,
            'cliente' => 'matrizoffice',
            'projeto' => 'lpmatrizoffice',
            'token' => $contato->token,
            'entrada' => $horaEntrada
                ? Carbon::parse($horaEntrada)
                : null,
            'dispositivo' => $this->detectDevice(),
            'posicao_formulario' => $posicaoFormulario,
            'newsletter' => $data['newsletter'] ?? false,

            'origem' => $data['origem'] ?? null,
            'campanha' => $data['campanha'] ?? null,
            'grupo' => $data['grupo'] ?? null,
            'anuncio' => $data['anuncio'] ?? null,
        ]);
    }

    protected function sendEmail(array $data): void
    {
        Mail::send('emails.contact', $data, function($message)use($data) {
            $message->from('noreply@matrizoffice.com.br', 'Matriz Office')
                    ->to($data['email'])
                    ->bcc('rafael@8poroito.com.br')
                    ->subject('[Matriz Office] Entraremos em contato com você logo em seguida');
        });

        Mail::send('emails.lead', $data, function($message)use($data) {
            $message->from('noreply@matrizoffice.com.br', 'Matriz Office')
                    ->to(['marketing1@matrizoffice.com.br', 'contato@matrizoffice.com.br', 'vendasgo@matrizoffice.com.br'])
                    ->bcc('rafael@8poroito.com.br')
                    ->subject('Um novo prospect de contato se cadastrou através da Landing Page');
        });
    }

    protected function detectDevice(): string
    {
        $mobileAgents = [
            'iPhone',
            'iPad',
            'Android',
            'BlackBerry',
            'Windows Phone',
        ];

        $userAgent = request()->userAgent() ?? '';

        foreach ($mobileAgents as $agent) {
            if (stripos($userAgent, $agent) !== false) {
                return 'Mobile';
            }
        }

        return 'Computador';
    }
}