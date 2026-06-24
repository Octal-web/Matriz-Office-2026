<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ContatoController;
use App\Http\Controllers\PoliticasController;
use App\Http\Controllers\SitemapController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('Home.index');

Route::post('/contato/enviar', [ContatoController::class, 'enviar'])->name('Contato.enviar');
Route::get('/contato/cadastro-concluido/{token}', [ContatoController::class, 'concluido'])->name('Contato.concluido');

Route::get('/politica-de-privacidade', [PoliticasController::class, 'privacidade'])->name('Politicas.privacidade');

Route::get('/sitemap.xml', [SitemapController::class, '__invoke'])->name('Sitemap.index');