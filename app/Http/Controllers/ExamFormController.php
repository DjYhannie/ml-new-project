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

use function PHPSTORM_META\type;

class ExamFormController extends Controller
{

    public function examLink()
    {
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

        $answer = json_decode(str_replace('}', ']',str_replace('{','[',str_replace(':', ',',str_replace("'", '"', $request->answers)))));

        try{
            $randomizedQuestions = DB::table('url_tokens')
                ->select('randomizedQuestions')
                ->where('id', $id)->get()->toArray();

            return $this->chechAnswer($answer, $randomizedQuestions, $id);

        }
        catch(\Exception $e){
            return response()->json([
                'error' => $e->getMessage(),
                'status_code' => 400
            ]);
        }
    }

    public function chechAnswer($answer, $randomizedQuestions, $id)
    {
        $user = Auth::user();
        $answer = collect($answer);
        $randomizedQuestions = json_decode($randomizedQuestions[0]->randomizedQuestions);


        $passing = DB::table('url_tokens')->join('questionnaires', 'questionnaires.id','=', 'url_tokens.questionnaire_id')
                    ->first('questionnaires.passing_score');

        try{
            $points = 0;
            $result = [];
            $res = [];
            $ctr = 0;

            foreach($answer as $ans){
                $question = $randomizedQuestions[$ctr];
                $res['question_id'] = $question->id;
                $res['is_correct'] = ($ans[1] == $question->answer);
                $res['user_answer'] = $ans[1];
                $res['correct_answer'] = $question->answer;
                if($ans[1] == $question->answer){
                    $points = $points += 1;
                }
                $ctr++;
               array_push($result, $res);
            }

            $pass = $passing->passing_score;

            $result = json_encode($result);

            DB::update('update url_tokens set result = ?', array($result));

            if($points >= $pass){
                return response()->json([
                    'points' => $points,
                    'remaks' => "PASS"
                ]);
            }
            else{
                return response()->json([
                    'points' => $points,
                    'remaks' => "FAIL"
                ]);
            }


            return $points;
            if($points >= $passing){
                return "pass";
            }else{
                return "failed";
            }

        }
        catch(\Exception $e){
            return response()->json([
                'error' => $e->getMessage(),
                'status_code' => 400
            ]);
        }
    }

    public function getResult(Request $request)
    {
        $user = Auth::user()->username;
        $userId = Auth::user()->id;

        $title = DB::table('url_tokens')
                    ->join('questionnaires', 'questionnaires.id','=', 'url_tokens.questionnaire_id')
                    ->first('questionnaires.title');
       $title->title;

       $result = DB::table('url_tokens')
                    ->where('user_id', $userId)
                    ->where('questionnaire_id', $request->id)
                    ->get();


        return response()->json([
            'user' => $user,
            'title' => $title,
            'result' => $result
        ]);
    }

    public function getAllResult()
    {
        try{

            $user = Auth::user();
            $username = DB::table('url_tokens')->join('users', 'users.id', '=', 'url_tokens.user_id')->first('users.username');
            $results = DB::table('url_tokens')
                        ->where('user_id', $user->id)
                        ->get();

            return response()->json([
                'username' => $username,
                'results' => $results,
                'status_code' => 200
            ]);
        }
        catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage(),
                'status_code' => 400
            ]);
        }
    }

    public function updateURL(Request $request)
    {
        try{
            $user = Auth::user();
            $data = DB::table('url_token')->find('id', $request->id);
            $data->update(['time_duration' => $request->timeDuration]);

            return response()->json([
                'data' => $data,
                'message' => "Successfully Updated!",
                'status_code' => 200
            ]);
        }
        catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage(),
                'status_code' => 400
            ]);
        }
    }



}
