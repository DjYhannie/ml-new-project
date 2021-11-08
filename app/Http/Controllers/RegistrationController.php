<?php

namespace App\Http\Controllers;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegistrationController extends Controller
{

    public function register(Request $request)
    {
        $validator = $request->validate([
            'username' => 'required|string|between:2,100',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $user = User::create([
            'username' => $validator['username'],
            'email' => $validator['email'],
            'password' => Hash::make($validator['password']),
            'role' => 'user'
        ]);

        $user->save();

        return response()->json([
            'user' => $user,
            'message' => 'Successfully Registered',
        ]);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'password' => 'required',
            'email' => 'required'
        ]);

        if ($validator ->fails()) {
            return response()->json(['status_code'=>400, 'message'=>$validator -> errors()]);

        }else{
            $user= User::where('email', $request->email)->first();

            if (!$user || !Hash::check($request->password, $user->password)) {
                return response([
                    'message' => ['These credentials do not match our records.'],
                ], 200);
            }
            $token = $user->createToken('my-app-token')->plainTextToken;
            $response = [
                'user' => $user,
                'message' => 'Login Succesfully!',
                'token' => $token
            ];
            return response($response, 200);
        }
    }

    public function logout(){
        $user = Auth::user();
        $user->currentAccessToken()->delete();


        return response()->json([
            'status_code' => 200,
            'message' => 'Successfully Logout!'
        ]);
    }






}
