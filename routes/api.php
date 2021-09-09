<?php

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\NewPassword;


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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register',[RegistrationController::class,'register']);
Route::post('/login',[RegistrationController::class,'login']);



Route::middleware('auth:sanctum')->group(function(){

    Route::post('/reset-password',[NewPassword::class, 'updatePassword']);
    Route::any('/send-email',[NewPassword::class, 'emailResetLink']);

    Route::post('/logout', [RegistrationController::class, 'logout']);
});

Route::get('/test',function(){
    return "test";
});


