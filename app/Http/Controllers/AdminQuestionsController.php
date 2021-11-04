<?php

namespace App\Http\Controllers;

use App\Models\Courses;
use App\Models\Questionnaire;
use App\Models\Questions;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Imports\ImportQuestions;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Validator;



class AdminQuestionsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    //Add a Qquestion
   public function addQuestion(Request $request)
   {

    try{

        $validate = $request->validate([
            'question' => 'required',
            'category' => 'required',
            'course' => 'required',
            'answer' => 'required',
            'choices' => 'required|array'
        ]);

            $question = Questions::create([
                'question' => $validate['question'],
                'category' => $validate['category'],
                'course' => $validate['course'],
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
        catch(\Exception $e){
            return response()->json([
                'message' => "Error",
                'status_code' => 400,
                'error' => $e
            ]);
        }
    }


    //query to update question
    public function updateQuestion(Request $request,$id)
    {
        try
        {

            $request->validate([
                'question' => 'required',
                'category' => 'required',
                'course' => 'required',
                'answer' => 'required',
                'choices' => 'array|required'
            ]);

            $question = Questions::find($id);
            $question->question = request('question');
            $question->category = request('category');
            $question->course = request('course');
            $question->answer = request('answer');
            $question->choices = request(['choices']);

            $question->save();


            return response()->json([
                'message' => 'Question updated',
                'data' => $question
            ]);
        }
        catch(\Exception $e)
        {
            return response()->json([
                'error' => 'Error',
                'code' => 400,
            ]);
        }
    }

     //Query to delete questions
    public function deleteQuestion($id)
    {
         $user = Auth::user();
         try{
             Questions::find($id)->delete();

             return response()->json([
                 'message' => "Successfully Deleted"
             ]);
         }
        catch(\Exception $e)
        {
            return response()->json([
                'message' => "Error",
                'code' => 400
            ]);
        }
     }

      //Query to get all Questions
    public function getAllQuestions(Questions $question)
    {
        try{

            $user = Auth::user();

            $questions = DB::table('questions')->orderBy('updated_at', "desc")->get();

            return response()->json([
                'data' => $questions
            ]);

        }
        catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage(),
                'status_code' => 400
            ]);
        }

    }


    //query to get all questions by category
    public function allQuestionsByCategory()
    {
        $user = Auth::user();
        try{

            $data = DB::table('questions')
                        ->select('question', 'category')
                        ->get()
                        ->groupBy('category');

            return response()->json([
                'data' => $data
            ]);

        }
        catch(\Exception $e)
        {
            return response()->json([
                'message' => "Error",
                'status_code' => 400
            ]);
        }
    }


    //Query to get all questions by course
    public function allQuestionsByCourse()
    {
        $user = Auth::user();
        try{

            $courses = DB::table('questions')
                        ->select('question', 'course')
                        ->get()
                        ->groupBy('course');

            return response()->json(['data' => $courses]);
        }
        catch(\Exception $e)
        {
            return response()->json([
                'message' => "Error",
                'status_code' => 400
            ]);
        }
    }

    //get all easy type questions
    public function easyQuestions()
    {
        $user = Auth::user();
        try{

            $data = DB::table('questions')
                    ->select('id', 'question')
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


     //get all easy type questions with answer
    public function easyQuestionsWithAnswer()
    {
        $user = Auth::user();
        try{

             $data = DB::table('questions')
                     ->select('id', 'question','category','course', 'answer', 'choices')
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
                     ->select('id', 'question')
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


      // get all average questions
    public function averageQuestionsWithAnswers()
    {
        $user = Auth::user();

        try
        {
            $data = DB::table('questions')
                    ->select('id', 'question','category','course','answer', 'choices')
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
        $user = Auth::admin();

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


    //Query to get all hard questions with answers
    public function hardQuestionswithAnswers()
    {
        $user = Auth::admin();

        try
        {
            $data = DB::table('questions')
                    ->select('id', 'question', 'category','course','answer', 'choices')
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

     //Query to get courses under easy category
     public function getQuestionsByCourseEasyCategory(Request $request)
     {
         $user= Auth::user();
         try{

             $data = DB::table('questions')
                     ->select('question', 'answer','choices')
                     ->where('course', '=', $request->course)
                     ->where('category', '=', 'easy')
                     ->get();
             return response()->json([
                 'data' => $data
             ]);
         }
         catch(\Exception $e)
         {
             return response()->json([
                 'message' => "Error",
                 "status_code" => 400
             ]);
         }
     }

      //Query to get courses under average category
      public function getQuestionsByCourseAverageCategory(Request $request)
      {
          $user= Auth::user();
          try{

              $data = DB::table('questions')
                      ->select('question', 'answer','choices')
                      ->where('course', '=', $request->course)
                      ->where('category', '=', 'average')
                      ->get();
              return response()->json([
                  'data' => $data
              ]);
          }
          catch(\Exception $e)
          {
              return response()->json([
                  'message' => "Error",
                  "status_code" => 400
              ]);
          }
      }


      //Query to get courses under hard category
      public function getQuestionsByCourseHardCategory(Request $request)
      {
          $user= Auth::user();
          try{

              $data = DB::table('questions')
                      ->select('question', 'answer','choices')
                      ->where('course', '=', $request->course)
                      ->where('category', '=', 'hard')
                      ->get();
              return response()->json([
                  'data' => $data
              ]);
          }
          catch(\Exception $e)
          {
              return response()->json([
                  'message' => "Error",
                  "status_code" => 400
              ]);
          }
     }


     public function getQuestionById($id)
     {
        try{
            $user = Auth::user();

            $question = Questionnaire::find($id);

            return response()->json([
                'data' => $question
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

     public function getCoursesById($id)
     {
        try{
            $user = Auth::user();

            $course = Courses::find($id);

            return response()->json([
                'data' => $course
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

     public function import()
    {
        Excel::import(new ImportQuestions,request()->file('file'));

        return back();
    }

}
