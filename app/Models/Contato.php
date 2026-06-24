<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contato extends Model
{
    protected $table = 'contatos';

    protected $fillable = [
        'nome',
        'telefone',
        'email',
        'cep',
        'uf',
        'endereco',
        'bairro',
        'cidade',
        'cod_marca',
        'token',
        'entrada',
    ];

    const CREATED_AT = 'criado';
    const UPDATED_AT = 'modificado';
}