<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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
        DB::table('users')->insert([
            'name' => 'Rhea May Ardiente',
            'email' => 'rhea.ardiente@mlhuillier.com',
            'password' => Hash::make('rhea2021'),
            'is_admin' => '0'
        ]);
    }
}
