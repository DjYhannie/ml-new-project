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
            'name' => 'required|string|between:2,100',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'password_confirmation' => 'required',
            'department' => 'required|string',
        ]);

        $user = User::create([
            'name' => $validator['name'],
            'email' => $validator['email'],
            'password' => Hash::make($validator['password']),
            'department' => $validator['department']
        ]);

        $user->save();

        return response()->json([
            'user' => $user,
            'message' => 'Successfully Registered',
        ]);
    }

    public function login(Request $request)
    {
       $request->validate([
           'email' => 'required',
           'password' => 'required'
       ]);

       if (Auth::attempt([
           'email' => $request->email,
           'password' => $request->password
       ])){
           $user = Auth::user();
           $name = $user->name;
           $token = Auth::user()->createToken('my-app-token')->plainTextToken;

           return response()->json([
            'name' => $name,
            'token' => $token,
            'message' => 'Successfully Login'
        ]);
       }
       else{
        return response()->json([
            'message' => 'Unauthorised.'
        ]);
       }
    }

    public function logout(User $id){
        $user = Auth::user();
        $user->currentAccessToken()->delete();

        return response()->json([
            'status_code' => 200,
            'message' => 'Successfully Logout!'
        ]);
    }


   



}
