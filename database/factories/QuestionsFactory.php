<?php

namespace Database\Factories;

use App\Models\Questions;
use Illuminate\Database\Eloquent\Factories\Factory;

class QuestionsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Questions::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'question' => $this->faker->text(),
            'category' => ['easy', 'average', 'hard'][rand(0,2)],
            'course' => ['hiring', 'math', 'logic'][rand(0,2)],
            'answer' => ['A', 'B', 'C','D'][rand(0,3)],
            'choices' => json_encode([
                'A' => sha1(uniqid(time())),
                'B' => sha1(uniqid(time())),
                'C' => sha1(uniqid(time())),
                'D' => sha1(uniqid(time()))
            ])
        ];
    }
}
