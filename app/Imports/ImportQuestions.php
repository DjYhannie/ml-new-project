<?php

namespace App\Imports;

use App\Models\Questions;
use Maatwebsite\Excel\Concerns\ToModel;

class ImportQuestions implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Questions([
            'question' => $row[1],
            'category' => $row[2],
            'course' => $row[3],
            'answer' => $row[4],
            'choices' => json_encode($row[5])
        ]);
    }
}
