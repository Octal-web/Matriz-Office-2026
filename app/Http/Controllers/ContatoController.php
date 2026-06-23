<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Http\Requests\PostClientRequest;
use App\Services\ClientService;

class ContatoController extends Controller
{
    protected $clientService;

    public function __construct(ClientService $clientService)
    {
        parent::__construct();
        $this->clientService = $clientService;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function enviar(PostClientRequest $request) {
        if($request->post()){
            $data = $request->validated();
        
            $this->clientService->create($data);
            return back()->with('message', [
                'type' => 'success',
                'msg' => 'Contato enviado com sucesso!',
            ]);
        }

        return Inertia::location(route('Home.index'));
    }
};