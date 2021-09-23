<?php

namespace App\Http\Controllers;

use App\Models\ExamForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;
use App\Http\Controllers\QuestionnaireController;

class ExamFormController extends Controller
{

    public function examLink()
    {
        return URL::temporarySignedRoute('examcode', now()->addMinutes(30));
    }





    public function checkAnswer(Request $request, Questions $userAnswer){
        $response = '';
        $userAnswer = $request->answer;

        if(DB::table('questions')->where('answer', '=', $userAnswer)){
            $response = "correct answer";
        }else{
            $response = "incorrect answer";
        }
        return $response;
    }



}
