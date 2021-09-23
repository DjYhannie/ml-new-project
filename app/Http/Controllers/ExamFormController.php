<?php

namespace App\Http\Controllers;

use App\Models\ExamForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;

class ExamFormController extends Controller
{

    public function examLink()
    {
        return URL::temporarySignedRoute('examcode', now()->addMinutes(30));

    }

    public function examForm(Request $request)
    {
        $user = Auth::user();

        $validation = $request->validate([
            'name' => 'required|exists:users,name',

        ]);

        $answers= ExamForm::create([
            'name' => $validation['name'],

        ]);
        $answers -> save();
        return response()->json([
            'message' => 'answer successfully submitted',
            'answers' => $answers
        ]);
    }

    public function sendExamLink()
    {
        $user = Auth::user();

        try{

            $email = Auth::user()->email;
             

        }
        catch(\Exception $e){
            return response()->json([
                'message' => 'Error',
                'error' => $e,
                'status_code' => 400
            ]);
        }

    }
}
