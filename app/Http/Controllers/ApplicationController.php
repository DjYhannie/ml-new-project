<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;

class ApplicationController extends Controller
{
    public function index()
    {
        // return view('application');
        // return view('welcome');
        // return view('invitation');
        return view('email');
    }
}
