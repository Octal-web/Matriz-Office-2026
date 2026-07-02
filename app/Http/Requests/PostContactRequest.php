<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules()
    {
        return [
            'nome'  => 'required',
            'telefone'  => 'required|celular_com_ddd',
            'email'  => 'nullable|email',
            'cep' => 'required|formato_cep',
            'politica' => 'required|accepted',
            'entrada' => 'nullable',
            'posicao_formulario' => 'nullable|string',
            'newsletter' => 'nullable|boolean',

            'origem' => 'nullable|string',
            'campanha' => 'nullable|string',
            'grupo' => 'nullable|string',
            'anuncio' => 'nullable|string',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages()
    {
        return [
            'nome.required'  => 'Por favor, informe seu nome.',
            'telefone.required'  => 'Por favor, informe seu telefone.',
            'telefone.celular_com_ddd' => 'Por favor, informe um telefone válido.',
            'email.email' => 'Por favor, informe um e-mail válido.',
            'cep.required'  => 'Por favor, informe seu CEP.',
            'cep.formato_cep'  => 'Por favor, informe um CEP válido.',
            'politica.required' => 'Para continuar, você deve concordar com os termos.',
            'politica.accepted' => 'Para continuar, você deve concordar com os termos.',
        ];
    }

    protected function prepareForValidation(): void
    {
        $this->merge([
            'email' => $this->filled('email') ? $this->input('email') : null,
            'origem' => $this->input('origem', $this->input('utm_source')),
            'campanha' => $this->input('campanha', $this->input('utm_campaign')),
            'grupo' => $this->input('grupo', $this->input('utm_term')),
            'anuncio' => $this->input('anuncio', $this->input('utm_content')),
        ]);
    }
}
