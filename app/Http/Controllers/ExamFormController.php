<?php

namespace App\Http\Controllers;

use App\Models\ExamForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;
use App\Http\Controllers\QuestionnaireController;
use Illuminate\Support\Facades\DB;
use App\Models\Questions;
use App\Notifications\ExamLink;
use Illuminate\Notifications\Notifiable;
use App\Models\User;

class ExamFormController extends Controller
{

    // public function examLink()
    // {
    //     $link = URL::temporarySignedRoute('examcode', now()->addMinutes(30));
    //     dd($link);
    //     return $this->sendExamLink($link);

    // }


    public function sendExamLink(Request $request)
    {
        $user = Auth::user();

        $rule = $request->validate(['email' => 'required|email']);
        $checked = User::where('email', '=', $rule)->first();

        // $link = URL::temporarySignedRoute('examcode', now()->addMinutes(30));


        $checked->notify(new ExamLink($checked));

        return response()->json([
            'message' => 'Email Sent'
        ]);

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
