<?php

namespace App\Exports;

use App\Models\Questions;
use Maatwebsite\Excel\Concerns\FromCollection;

class ExportQuestions implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Questions::all();
    }
}
