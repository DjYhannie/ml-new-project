<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\User;
use App\Models\Courses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\Questions;
use Error;
use Illuminate\Support\Facades\DB;
use Symfony\Component\Console\Input\Input;
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
        return response()->json(['status_code'=>400, 'message'=>$validator -> errors()]);

    }else
    {
        $user= Admin::where('username', $request->username)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response([
                'message' => ['These credentials do not match our records.']
            ], 200);
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

    //Query to add courses
    public function addCourses(Request $request)
    {
        $user = Auth::user();
        try{

            $validate = $request->validate([
                'name' => 'required'
            ]);

            $courses = Courses::create([
                'name' => $validate['name']
            ]);

            $courses->save();

            return response()->json([
                'message' => "Course created sucessfully!",
                'course' => $courses
            ]);
        }
        catch(\Exception $e){
            return response()->json([
                'message' => "Error",
                'code' => 400,
                "error" => $e
            ]);
        }
    }

    public function getCourses()
    {
        $user = Auth::user();
        try{

            $courses = DB::table('courses')->get();

            return response()->json([
                'courses' => $courses
            ]);
        }
        catch (\Exception $e)
        {
            return response()->json([
                'error' => $e,
                'status_code' => 400
            ]);
        }
    }


    //Query to get all users
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

    //Query to get user by name
    public function getUserByName(Request $request)
    {
        try{

            $user = DB::table('users')->where('name', 'like', '%'.$request->name.'%')->get();

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
