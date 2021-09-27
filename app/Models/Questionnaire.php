<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Questionnaire extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'course',
        'time_duration',
        'passing_score',
        'easy_questions',
        'average_questions',
        'hard_questions',
        'total_questions'
    ];

}
