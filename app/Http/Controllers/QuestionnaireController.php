<?php

namespace App\Http\Controllers;
use App\Models\Questionnaire;
use App\Models\Questions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\Console\Question\Question;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

use function Complex\add;

class QuestionnaireController extends Controller
{
    public function createQuestionnaire(Request $request)
    {
            $user = Auth::user();

            $validate = $request->validate([
                'title' => 'required',
                'course' => 'required',
                'time_duration' => 'required',
                'passing_score' => 'required',
                'easy_questions' => 'required',
                'average_questions' => 'required',
                'hard_questions' => 'required',
                'total_questions' => 'required'
            ]);

            $questionnaire = Questionnaire::create([
                'title' => $validate['title'],
                'course' => $validate['course'],
                'time_duration' => $validate['time_duration'],
                'passing_score' => $validate['passing_score'],
                'easy_questions' =>$validate['easy_questions'],
                'average_questions' => $validate['average_questions'],
                'hard_questions' => $validate['hard_questions'],
                'total_questions' => $validate['total_questions']
            ]);

            $questionnaire->save();

            return response()->json([
                'message' => "Created Successfully",
                'data' => $questionnaire
            ]);
    }


    public function updateQuestionnaire(Request $request, $id)
    {
        $user = Auth::user();
        try{

            $questionnaire = Questionnaire::find($id);
            $questionnaire->title =request('title');
            $questionnaire->course =request('course');
            $questionnaire->time_duration =request('time_duration');
            $questionnaire->passing_score =request('passing_score');
            $questionnaire->easy_questions =request('easy_questions');
            $questionnaire->average_questions =request('average_questions');
            $questionnaire->hard_questions =request('hard_questions');
            $questionnaire->total_questions =request('total_questions');

            $questionnaire->save();


            $request->validate([
                'title' => 'required',
                'course' => 'required',
                'time_duration' => 'required',
                'passing_score' => 'required',
                'easy_questions' => 'required',
                'average_questions' => 'required',
                'hard_questions' => 'required',
                'total_questions' => 'required'
            ]);

            $questionnaire->update($request->all());


            return response()->json([
                'message' => "Updated Successfully"
            ]);
        }
        catch (\Exception $e){
            return response()->json([
                'message' => "Error",
                'status_code' => 400
            ]);
        }
    }


    public function deleteQuestionnaire($id)
    {
        $user = Auth::user();
        try{
            Questionnaire::find($id)->delete();

            return response()->json([
                'message' => "Successfully Deleted"
            ]);
        }
        catch(\Exception $e){
            return response()->json([
                'message' => "Error",
                'error' => $e,
                'status_code' => 400
            ]);
        }
    }

    public function getAllQuestionnaire()
    {
        try{
            $user = Auth::user();

            $questionnaire = DB::table('questionnaires')->get();

            return response()->json([
                'data' => $questionnaire
            ]);
        }
        catch(\Exception $e){
            return response()->json([
                'message' => "Error",
                'error' => $e,
                'status_code' => 400
            ]);
        }
    }

    public function getQuestionnaireById($id)
    {
        try{
            $user = Auth::user();

            $questionnaire = Questionnaire::find($id);

            $easyQuestions = DB::table('questions')
                            ->select('id','question', 'choices', 'answer')
                            ->where('category', "easy")
                            ->where('course', $questionnaire->course)
                            ->get()
                            ->random($questionnaire->easy_questions);

            $averageQuestions = DB::table('questions')
                            ->select('id','question', 'choices','answer')
                            ->where('category', "average")
                            ->where('course', $questionnaire->course)
                            ->get()
                            ->random($questionnaire->average_questions);

            $hardQuestions = DB::table('questions')
                            ->select('id','question', 'choices', 'answer')
                            ->where('category', "hard")
                            ->where('course', $questionnaire->course)
                            ->get()
                            ->random($questionnaire->hard_questions);


            $merge1 = $easyQuestions->merge($averageQuestions);
            $allQuestions = $merge1->merge($hardQuestions);
            $shuffled = $allQuestions->shuffle();
            $shuffled->all();


            $url_token = DB::select('select * from url_tokens where questionnaire_id = ? and user_id = ?', [$questionnaire->id, $user->id]);

            $token = $url_token? $url_token[0]->token: '';

            if($token){}

            if (!$url_token) {

                $token = sha1(uniqid(time(),true));
                $token_data = [
                    'token' => $token,
                    'questionnaire_id' => $questionnaire->id,
                    'randomizedQuestions' =>$shuffled,
                    'user_id' => $user->id,
                    'accessed_time' => Carbon::now(),
                    'expired_time' => Carbon::now()->addMinutes($questionnaire->time_duration),
                    'is_accessed' => true,
                ];

                DB::table('url_tokens')->insert($token_data, $shuffled);

            }

            return response()->json([
                'data' => $shuffled,
                'url_token' => $token
            ]);

        }
        catch(\Exception $e){
            return response()->json([
                'message' => "Error",
                'error' => $e,
                'status_code' => 400
            ]);
        }
    }
}
