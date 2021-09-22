<?php

namespace App\Http\Controllers;

use App\Models\ExamForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ExamFormController extends Controller
{

    public function FunctionName(Request $request)
    {
        
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
}
