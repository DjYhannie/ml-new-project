<?php

namespace App\Imports;

use App\Models\Questions;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ImportQuestions implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Questions([
            'question' => $row['question'],
            'category' => $row['category'],
            'course' => $row['course'],
            'answer' => $row['answer'],
            'choices' => json_encode($row['choices'])
        ]);
    }
}
