<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $adminRole = Role::create(['name' => 'admin']);
        $authorRole = Role::create(['name' => 'author']);
        $userRole = Role::create(['name' => 'user']);

        $manageUsersPermission = Permission::create(['name' => 'manage users']);
        $createPostPermission = Permission::create(['name' => 'create post']);
        $editOwnPostPermission = Permission::create(['name' => 'edit own post']);

        $adminRole->givePermissionTo($manageUsersPermission);
        $authorRole->givePermissionTo($createPostPermission);
        $authorRole->givePermissionTo($editOwnPostPermission);
    }
}
