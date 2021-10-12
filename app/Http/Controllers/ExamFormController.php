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


    public function getAnswer(Request $request){

        $user = Auth::user();
        $id = $request->id;
        $answer = json_decode(str_replace("'", '"', $request->answers));


        try{

            $randomizedQuestions = DB::table('url_tokens')
                ->select('randomizedQuestions')
                ->where('id', $id)->get()->toArray();

            return $this->checkAnswer($answer, $randomizedQuestions);

        }
        catch(\Exception $e){
            return response()->json([
                'error' => $e->getMessage(),
                'status_code' => 400
            ]);
        }
    }

    public function checkAnswer($answer, $randomizedQuestions)
    {
        $randomizedQuestions = json_decode(($randomizedQuestions[0]->randomizedQuestions));
        $passing_score = DB::table('url_tokens')->join('questionnaires', 'questionnaires.id', '=', 'url_tokens.questionnaire_id')
                            ->first('questionnaires.passing_score');
        // return $passing_score;

        try{


            foreach($answer as $id => $ans){
                $points = 0;
                $question = $randomizedQuestions[array_search($id, array_keys($randomizedQuestions))];

                if($ans == $question->answer){
                    $points += 1;
                }
                else{
                    $points = $points;
                }


            }
            return $points;

            if($points >= $passing_score){
                return response('Pass')->with($points);
            }
            else{
                return response('Failed')->with($points);
            }


        }
        catch(\Exception $e){
            return response($e);
        }
    }

}
