<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostContactRequest;
use App\Services\ContactService;

use Illuminate\Http\RedirectResponse;

use Inertia\Inertia;

use App\Models\Contato;

class ContatoController extends Controller
{
    protected $contactService;

    public function __construct(ContactService $contactService)
    {
        parent::__construct();
        $this->contactService = $contactService;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function enviar(PostContactRequest $request): RedirectResponse {
        $data = $request->validated();
        $data['email'] = $data['email'] ?? null;

        $result = $this->contactService->create($data);

        $token = $result['contato']->token;

        $parameters = array_filter([
            'token' => $token,
            'origin' => $data['origem'] ?? null,
            'campaign' => $data['campanha'] ?? null,
            'group' => $data['grupo'] ?? null,
            'ad' => $data['anuncio'] ?? null,
        ], fn ($value) => $value !== null && $value !== '');

        return to_route('Contato.concluido', $parameters);
    }

    public function concluido(string $token)
    {
        $contato = Contato::query()
            ->where([
                'token' => $token,
                'excluido' => null,
            ])
            ->first();

        if (!$contato) {
            return redirect()->route('Home.index');
        }

        $contato->token = null;
        $contato->save();

        return Inertia::render('CadastroConcluido');
    }
}
