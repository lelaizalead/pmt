<?php

namespace Database\Factories;
use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name=$this->faker->company();
        $description=$this->faker->name();
        $status=$this->faker->randomElement(['todo','in-progress','done']);

        return [
            'name'=>$name,
            'description'=>$description,
            'status'=>$status,
            'project_id'=>Project::factory()
            //

        ];
    }
}
