<?php

namespace App\Http\Controllers;

use App\Models\ExamForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ExamFormController extends Controller
{
    public function examForm(Request $request)
    {
        $user = Auth::user();

        $validation = $request->validate([
            'name' => 'required|exists:users,name',
            'answer1' => 'required',
            'answer2' => 'required',
            'answer3' => 'required',
            'answer4' => 'required',
            'answer5' => 'required',
            'answer6' => 'required',
            'answer7' => 'required',
            'answer8' => 'required',
            'answer9' => 'required',
            'answer10' => 'required',
            'answer11' => 'required',
            'answer12' => 'required',
            'answer13' => 'required',
            'answer14' => 'required',
            'answer15' => 'required',
            'answer16' => 'required',
            'answer17' => 'required',
            'answer18' => 'required',
            'answer19' => 'required',
            'answer20' => 'required',
            'answer21' => 'required',
            'answer22' => 'required',
            'answer23' => 'required',
            'answer24' => 'required',
            'answer25' => 'required',
            'answer26' => 'required',
            'answer27' => 'required',
            'answer28' => 'required',
            'answer29' => 'required',
            'answer30' => 'required',
            'answer31' => 'required',
            'answer32' => 'required',
            'answer33' => 'required',
            'answer34' => 'required',
            'answer35' => 'required',
            'answer36' => 'required',
            'answer37' => 'required',
            'answer38' => 'required',
            'answer39' => 'required',
            'answer40' => 'required',
        ]);

        $answers= ExamForm::create([
            'name' => $validation['name'],
            'answer1' => $validation['answer1'],
            'answer2' => $validation['answer2'],
            'answer3' => $validation['answer3'],
            'answer4' => $validation['answer4'],
            'answer5' => $validation['answer5'],
            'answer6' => $validation['answer6'],
            'answer7' => $validation['answer7'],
            'answer8' => $validation['answer8'],
            'answer9' => $validation['answer9'],
            'answer10' => $validation['answer10'],
            'answer11' => $validation['answer11'],
            'answer12' => $validation['answer12'],
            'answer13' => $validation['answer13'],
            'answer14' => $validation['answer14'],
            'answer15' => $validation['answer15'],
            'answer16' => $validation['answer16'],
            'answer17' => $validation['answer17'],
            'answer18' => $validation['answer18'],
            'answer19' => $validation['answer19'],
            'answer20' => $validation['answer20'],
            'answer21' => $validation['answer21'],
            'answer22' => $validation['answer22'],
            'answer23' => $validation['answer23'],
            'answer24' => $validation['answer24'],
            'answer25' => $validation['answer25'],
            'answer26' => $validation['answer26'],
            'answer27' => $validation['answer27'],
            'answer28' => $validation['answer28'],
            'answer29' => $validation['answer29'],
            'answer30' => $validation['answer30'],
            'answer31' => $validation['answer31'],
            'answer32' => $validation['answer32'],
            'answer33' => $validation['answer33'],
            'answer34' => $validation['answer34'],
            'answer35' => $validation['answer35'],
            'answer36' => $validation['answer36'],
            'answer37' => $validation['answer37'],
            'answer38' => $validation['answer38'],
            'answer39' => $validation['answer39'],
            'answer40' => $validation['answer40'],
        ]);
        $answers -> save();
        return response()->json([
            'message' => 'answer successfully submitted',
            'answers' => $answers
        ]);
    }
}
