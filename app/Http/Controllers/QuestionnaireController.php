<?php

namespace App\Http\Controllers;
use App\Models\Questionnaire;
use App\Models\Questions;
use App\Models\Invitation;
use Illuminate\Http\Request;
use Symfony\Component\Console\Question\Question;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;
use App\Models\User;
use App\Notifications\InviteNotification;
use App\Jobs\EmailHandler;

use Carbon\Carbon;

use function Complex\add;

class QuestionnaireController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    public function createQuestionnaire(Request $request)
    {
            $user = Auth::user();

            $validate = Validator::make($request->all(),[
                'title' => 'required',
                'course' => 'required',
                'time_duration' => 'required',
                'passing_score' => 'required',
                'easy_questions' => 'required',
                'average_questions' => 'required',
                'hard_questions' => 'required',
                'total_questions' => 'required'
            ]);

            if ($validate->fails()) {
                return response()->json([
                    'message' => 'Error',
                    'error'   => $validate->errors()
                ]);
            }

            $questionnaire = Questionnaire::create($validate->validated());

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


            return response()->json([
                'message' => "Updated Successfully",
                'data' => $questionnaire
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

            $questionnaire = DB::table('questionnaires')->orderBy('updated_at', "desc")->get();

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


            $url_token = DB::table('url_tokens')->select('*')
                        ->orderBy('id', 'desc')
                        ->where('questionnaire_id', $questionnaire->id)
                        ->where('user_id', $user->id)
                        ->whereNull('result')
                        ->first();

            if (!$url_token) {
                $token = sha1(uniqid(time(),true));
                $token_data = [
                    'token' => $token,
                    'questionnaire_id' => $questionnaire->id,
                    'randomizedQuestions' =>$shuffled,
                    'user_id' => $user->id,
                    'time_started' => Carbon::now(),
                    'expired_time' => Carbon::now()->addMinutes($questionnaire->time_duration),
                    'is_accessed' => true,
                ];

                $result = DB::table('url_tokens')->insert($token_data);
                $latestdata = DB::table('url_tokens')->orderBy('id', 'desc')->first();
                $latestdata->questionnaire = $questionnaire;
                return response()->json([
                    'data'  => $latestdata,
                    'url_token' => $token
                ]);
            }

            $url_token->questionnaire = $questionnaire;

            return response()->json([
                'data'      => $url_token,
                'url_token' => $url_token->token
            ]);

        }
        catch(\Exception $e){
            return response()->json([
                'message' => "Error",
                'error' => $e->getMessage(),
                'status_code' => 400
            ]);
        }
    }
    public function getExpiratiionTime($id)
    {
        $user = Auth::user();

        try{
            $questionnairetime = Questionnaire::find($id);
            $time = $questionnairetime->time_duration;

            return response()->json([
                'time' => $time,
                'status_code' => 200
            ]);

        }
        catch(\Exception $e){
            return response()->json([
                'error' => $e,
                'status_code' => 400
            ]);
        }
    }

    public function invites(Request $request )
    {
        try{

            $validator = Validator::make($request->all(), [
                'emails' => 'required|array'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Error',
                    'error'   => $validator->errors()
                ]);
            }

            $test = array();

            $questionnaire = Questionnaire::where('id', $request['id'])->first ();

            foreach ($request['emails'] as $data) {
                $checked = User::where('email',$data)->first();
                $token = explode(".", (string)uniqid(time(),true))[1];
                $token_url = Str::random(18);
                // $path = "https://ml-oex-portal.herokuapp.com/".$request['id'];
                $path = "https://ml-oex-portal.herokuapp.com/";


                if(!$checked){
                    array_push($test, $data);
                }else{
                    $email = Invitation::create([
                        'token'=> $token,
                        'email' => $data
                    ]);
                    $this->dispatch(new EmailHandler($email, $path));
                }

            }

            if(!empty($test)){
                return "Emails not found :".print_r($test);
            }

            return "Success";
        }
        catch(\Exception $e){
            return response()->json([
                'status_code' => 400,
                'error' => $e->getMessage()
            ]);
        }

    }

}
