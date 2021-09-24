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
use Illuminate\Support\Facades\Notification;

class ExamFormController extends Controller
{

    public function examLink()
    {
        $link = URL::temporarySignedRoute('examcode', now()->addMinutes(30));
        dd(gettype($link));
        return response()->json($this->sendExamLink($link));

    }


    public function sendExamLink()
    {



        // $user = Auth::user();

        // $rule = $request->validate(['email' => 'required|email']);
        // $checked = User::where('email', '=', $rule)->first();

        // $link = URL::temporarySignedRoute('examcode', now()->addMinutes(30));
        $user = Auth::user()->email;
        dd($user);
        // return response()->json($user);
        // Notification::send($user, new ExamLink());
        $user->notify(new ExamLink($user));

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
