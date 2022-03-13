<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('login', [ 'as' => 'login', 'uses' => 'App\Http\Controllers\AuthController@login']);
Route::get('wilayah', 'App\Http\Controllers\WilayahController@index');
Route::get('keramaian', 'App\Http\Controllers\KeramaianController@index');

Route::group([
    'middleware' => 'auth:api',
], function () {
        Route::get('/logout', 'App\Http\Controllers\AuthController@logout');
        Route::post('/event', 'App\Http\Controllers\EventController@create');
        Route::put('event/{id}', 'App\Http\Controllers\EventController@update')
            ->where('id', '[0-9]+');
        Route::get('event', 'App\Http\Controllers\EventController@index');
        Route::get('/event/{id}', 'App\Http\Controllers\EventController@show')
        ->where('id', '[0-9]+');
        Route::delete('/event/{id}', 'App\Http\Controllers\EventController@delete');

});