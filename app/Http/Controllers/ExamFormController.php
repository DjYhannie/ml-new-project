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
use Carbon\Carbon;
use Illuminate\Support\Facades\Notification;

class ExamFormController extends Controller
{

    public function examLink()
    {
         // $link = URL::temporarySignedRoute('examcode', now()->addMinutes(30));
        try{

            $token = sha1(uniqid(time(),true));

            DB::table('links')
                ->insert(['token' =>$token, 'created_at' => Carbon::now()]);


            return response()->json([
                'message' => "Link created Successfully",
                'link' => $token
            ]);
        }
        catch(\Exception $e){
            return response()->json([
                'message' => $e,
                'status_code' => 400
            ]);
        }
    }



    public function checkAnswer(Request $request){
        // $response = '';
        // $userAnswer = $request->answer;

        // if(DB::table('questions')->where('answer', '=', $userAnswer)){
        //     $response = "correct answer";
        // }else{
        //     $response = "incorrect answer";
        // }
        // return $response;

        $user = Auth::user();
        $id = $request->id;
        $answer = json_decode(str_replace("'", '"', $request->answers));

        try{

            $randomizedQuestions = DB::table('url_tokens')
                ->select('randomizedQuestions')
                ->where('id', $id)->get();


            return response()->json([
                'questions' => json_decode($randomizedQuestions[0]->randomizedQuestions),
            ]);

        }
        catch(\Exception $e){
            return response()->json([
                'error' => $e->getMessage(),
                'status_code' => 400
            ]);
        }

    }

}
