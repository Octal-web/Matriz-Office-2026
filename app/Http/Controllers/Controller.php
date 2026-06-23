<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\App;

use Inertia\Inertia;

abstract class Controller
{
    public function __construct() {
        $routeArray = app('request')->route()->getAction();
        $controllerAction = class_basename($routeArray['controller']);
        list($controller, $action) = explode('Controller@', $controllerAction);

        // $dados_gerais = DadosGerais::first();

        $notifyCookie = array_key_exists('notify-cookies', $_COOKIE) ? true : false;
        $rejectCookie = array_key_exists('reject-cookies', $_COOKIE) ? true : false;

        Inertia::share([
            'controller' => $controller,
            'action' => $action,
            'notifyCookie' => $notifyCookie,
            'rejectCookie' => $rejectCookie,
        ]);
        
    }
}