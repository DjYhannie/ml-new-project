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

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function updatePassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:6|confirmed',
            'password_confirmation' => 'required'
        ]);

        $updatedPassword = DB::table('password_resets')
        ->where(['email' => $request->email, 'token' => $request -> token])
        ->first();


        if (!$updatedPassword)
            return back()->withInput()->with('error', 'Invalid token!');

            $user = User::where('email', $request->email)
                ->update(['password' => Hash::make($request->password)]);

            DB::table('password_resets')
            ->where(['email' => $request->email])
            ->delete();

        return response()->json([
            'message' => 'Password change successfully',
            'updates' => $updatedPassword
        ]);
    }


    public function emailResetLink(Request $request)
    {
        $rule = $request->validate(['email' => 'required|email']);
        $checked = User::where('email', '=', $rule)->first();
        // dd($checked);

        $token = Str::random(64);



        DB::table('password_resets')
            ->insert(['email' => $request->email, 'token' =>$token, 'created_at' => Carbon::now()]);



        $checked->notify(new EmailNotif($checked));
        return back()->with('message', 'Email Send');

        // return response()->json([
        //     'message' => 'Succesfull Notif',
        //     'token' => $token
        // ]);
    }
}

