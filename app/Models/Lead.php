<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    protected $connection = '8poroito';
    
    protected $table = 'leads';

    protected $fillable = [
        'nome',
        'email',
        'telefone',
        'cep',
        'uf',
        'cidade',
        'conversoes',
        'cliente',
        'projeto',
        'token',
        'entrada',
        'dispositivo',
        'newsletter',
        'posicao_formulario',
        'origem',
        'campanha',
        'grupo',
        'anuncio',
    ];

    protected $casts = [
        'conversoes' => 'integer',
        'entrada' => 'datetime',
    ];

    const CREATED_AT = 'criado';
    const UPDATED_AT = 'modificado';
}