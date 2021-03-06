<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Questions extends Model
{
    use HasFactory;

    protected $fillable = [
        'question',
        'category',
        'course',
        'answer',
        'choices'
    ];
    protected $cast =[
        'choices' => 'array'
    ];

    protected $table = 'questions';


    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    

}
