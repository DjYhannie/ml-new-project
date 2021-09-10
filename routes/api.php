<?php

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\NewPassword;
use App\Http\Controllers\AdminController;
use App\Models\Admin;

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

Route::post('/adminlogin',[AdminController::class, 'adminLogin']);
Route::post('/register',[RegistrationController::class,'register']);
Route::post('/login',[RegistrationController::class,'login']);





Route::middleware('auth:sanctum')->group(function(){
    Route::post('/reset-password',[NewPassword::class, 'updatePassword']);
    Route::post('/send-email',[NewPassword::class, 'emailResetLink']);
    Route::post('/add-question',[AdminController::class, 'addQuestion']);
    Route::get('/get-all-questions',[AdminController::class, 'getAllQuestions']);
    Route::get('/get-questions-bycategory',[AdminController::class, 'allQuestionsByCategory']);
    Route::get('/get-easy-questions',[AdminController::class, 'easyQuestions']);
    Route::get('/get-average-questions',[AdminController::class, 'averageQuestions']);
    Route::get('/get-hard-questions',[AdminController::class, 'hardQuestions']);
    Route::get('/get-all-users',[AdminController::class, 'getUsers']);



    Route::post('/logout', [RegistrationController::class, 'logout']);
});

Route::get('/test',function(){
    return "test";
});

Route::get('/test',[NewPassword::class, 'getQuestions']);


