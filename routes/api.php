<?php

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\NewPassword;
use App\Http\Controllers\AdminController;
use App\Models\Admin;
use App\Http\Controllers\ExamFormController;
use App\Http\Controllers\AdminQuestionsController;
use App\Http\Controllers\QuestionnaireController;

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

    Route::post('/reset-password',[NewPassword::class, 'updatePassword']); //link for reseet password+
    Route::post('/send-email',[NewPassword::class, 'emailResetLink']); //For sending email to reset password

    //Questions Related
    Route::post('/questions/add',[AdminQuestionsController::class, 'addQuestion']);
    Route::post('questions/update/{id}', [AdminQuestionsController::class, 'updateQuestion']);
    Route::delete('questions/delete/{id}',[AdminQuestionsController::class, 'deleteQuestion']);
    Route::get('/questions',[AdminQuestionsController::class, 'getAllQuestions']);
    Route::get('/questions/{id}',[AdminQuestionsController::class, 'getQuestionById']);
    Route::get('/questions/category',[AdminQuestionsController::class, 'allQuestionsByCategory']);
    Route::get('/questions/course',[AdminQuestionsController::class, 'allQuestionsByCourse']);
    Route::get('/questions/category/easy',[AdminQuestionsController::class, 'easyQuestions']);
    Route::get('/questions/category/easy-answers',[AdminQuestionsController::class, 'easyQuestionsWithAnswer']);
    Route::get('/questions/category/average',[AdminQuestionsController::class, 'averageQuestions']);
    Route::get('/questions/category/average-answers',[AdminQuestionsController::class, 'averageQuestionsWithAnswers']);
    Route::get('/questions/category/hard',[AdminQuestionsController::class, 'hardQuestions']);
    Route::get('/questions/category/hard-answers',[AdminQuestionsController::class, 'hardQuestionswithAnswers']);
    Route::post('/questions/course/easycategory',[AdminQuestionsController::class, 'getQuestionsByCourseEasyCategory']);
    Route::post('/questions/course/averagecategory',[AdminQuestionsController::class, 'getQuestionsByCourseAverageCategory']);
    Route::post('/questions/course/hardcategory',[AdminQuestionsController::class, 'getQuestionsByCourseHardCategory']);

    Route::post('/course',[AdminController::class, 'getCourses']);
    Route::post('/course{id}',[AdminController::class, 'getCoursesById']);
    Route::post('/course/add',[AdminController::class, 'addCourses']);

    Route::post('/questionnaire/create',[QuestionnaireController::class, 'createQuestionnaire']);
    Route::post('/questionnaire/update/{id}',[QuestionnaireController::class, 'updateQuestionnaire']);
    Route::delete('/questionnaire/delete/{id}',[QuestionnaireController::class, 'deleteQuestionnaire']);
    Route::get('/questionnaire',[QuestionnaireController::class, 'getAllQuestionnaire']);
    Route::get('/questionnaire/{id}',[QuestionnaireController::class, 'getQuestionnaireById']);


    //Get Users
    Route::get('/users',[AdminController::class, 'getAllUsers']);
    Route::post('/users/name',[AdminController::class, 'getUserByName']);

    Route::post('/answers',[ExamFormController::class, 'examForm']);



    Route::post('/logout', [RegistrationController::class, 'logout']);
});


Route::get('/test',function(){
    return "test";
});

Route::get('/generate-link', [ExamFormController::class, 'examLink'])->name('examecode');
Route::post('/import', [AdminQuestionsController::class, 'import'])->name('import');

