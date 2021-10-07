<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Notifications\EmailNotif;
use Carbon\Carbon;
use Dotenv\Exception\ValidationException;
use GuzzleHttp\Psr7\Message;
use Illuminate\Http\Request;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use PharIo\Manifest\Email;
use Illuminate\Support\Facades\Notification;
use Symfony\Component\Console\Input\Input;

class NewPassword extends Controller
{
    use Notifiable;

    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    public function updatePassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:6|confirmed',
            'token' => 'required'
        ]);

        $updatedPassword = DB::table('password_resets')
        ->where(['email' => $request->email, 'token' => $request -> token])
        ->first();


        if (!$updatedPassword)
            return response('Invalid token!');

            $user = User::where('email', $request->email)
                ->update(['password' => Hash::make($request->password)]);

            DB::table('password_resets')
            ->where(['email' => $request->email])
            ->delete();

        return response()->json([
            'message' => 'Password change successfully',
        ]);
    }


    public function emailResetLink(Request $request)
    {

        $rule = $request->validate(['email' => 'required|email']);
        $checked = User::where('email', '=', $rule)->first();

        $token = Str::random(64);

        

        DB::table('password_resets')
            ->insert(['email' => $request->email, 'token' =>$token, 'created_at' => Carbon::now()]);

        try{
            $checked->notify(new EmailNotif($checked));
            return response()->json([
                'message' => 'Email Sent',
                'token' => $token
            ]);
        }
        catch(\Exception $e){
            return response($e->getMessage());
        }
    }
}

