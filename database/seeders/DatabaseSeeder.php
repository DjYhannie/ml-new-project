<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\Questions;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        Questions::factory(150)->create();
        DB::table('users')->insert([
            'email' => 'admin@admin.com',
            'password' => Hash::make('admin'),
            //modified
            'role' => 'user',
            'username' => "admin",
        ]);
    }
}

