<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\Questions;
use Error;
use Illuminate\Support\Facades\DB;
use Symfony\Component\Console\Question\Question;

use function PHPSTORM_META\type;

class AdminController extends Controller
{

    //Admin Login

   public function adminLogin(Request $request)
   {
    $validator = Validator::make($request->all(),[
        'password' => 'required',
        'username' => 'required'
    ]);

    if ($validator ->fails()) {
        return response()->json(['status_code'=>400, 'message'=>'Bad Request']);

    }else
    {
        $user= Admin::where('username', $request->username)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response([
                'message' => ['These credentials do not match our records.']
            ], 404);
        }

        $token = $user->createToken('my-app-token')->plainTextToken;
        $response = [
            'user' => $user,
            'message' => 'Login Succesfully!',
            'token' => $token,
        ];
        return response($response, 201);

    }

   }

   //Add a Qquestion

   public function addQuestion(Request $request)
   {

    $user = Auth::user();

    $validate = $request->validate([
        'question' => 'required',
        'category' => 'required',
        'answer' => 'required',
        'choices' => 'required|array'
    ]);


        $question = Questions::create([
            'question' => $validate['question'],
            'category' => $validate['category'],
            'answer' => $validate['answer'],
            'choices' => json_encode($validate['choices'])

        ]);

        $question->save();
        $question->choices = json_decode($question->choices);


        return response()->json([
            'message' => 'Question Successfully Added',
            'questions' => $question
        ]);
    }

    //Query to get all Questions
    public function getAllQuestions()
    {
        $user = User::all();

        $questions = DB::table('questions')->get();

        return response()->json([
            'data' => $questions
        ]);



    }
    //query to get all questions by category

    public function allQuestionsByCategory()
    {
        $user = Auth::user();

        $data = DB::table('questions')
                    ->select('question', 'category')
                    ->get()
                    ->groupBy('category');

        return response()->json([
            'data' => $data
        ]);
    }

    //get all easy type questions
    public function easyQuestions()
    {
        $user = Auth::user();
        try{

            $data = DB::table('questions')
                    ->select('id', 'question', 'type')
                    ->where('category', '=', 'easy')
                    ->get();

            return response()->json([
                'data' => $data
            ]);
        }
        catch(\Exception $e)
        {
            return response()->json([
                'message' => 'Record not Found!'
            ]);
        }


    }

    // get all average questions

    public function averageQuestions()
    {
        $user = Auth::user();

        try
        {
            $data = DB::table('questions')
                    ->select('id', 'question', 'type')
                    ->where('category', '=', 'average')
                    ->get();

            return response()->json([
                'data' => $data
            ]);

        }
        catch(\Exception $e)
        {
            return response()->json([
                'message' => 'Empty!'
            ]);

        }
    }

    //get all hard questions

    public function hardQuestions()
    {
        $user = Auth::user();

        try
        {
            $data = DB::table('questions')
                    ->select('id', 'question', 'type')
                    ->where('category', '=', 'hard')
                    ->get();

            return response()->json([
                'data' => $data
            ]);

        }
        catch(\Exception $e)
        {
            return response()->json([
                'message' => 'Empty!'
            ]);

        }
    }

    public function getAllUsers()
    {
        try{
            $get = DB::table('users')->get();
            return response()->json([
                'users' => $get
            ]);
        }
        catch(\Exception $e){
            return response()->json([
                'message' => "Users not found"
            ]);
        }
    }

    public function getUserByName(Request $request)
    {
        try{

            $user = DB::table('users')->where('name', 'like', '%'.$request->name.'%');

            return response()->json([
                'user' => $user
            ]);

        }
        catch(\Exception $e){
            return response()->json([
                'message' => 'Error!'
            ]);
        }
    }

}
