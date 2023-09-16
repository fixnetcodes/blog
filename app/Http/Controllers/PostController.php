<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;


class PostController extends Controller
{
    public function allPosts()
    {
        return Inertia::render('Post/All', [
            'posts' => Post::latest()->paginate(10),
        ]);
    }

    public function newPost()
    {
        return Inertia::render('Post/AddNew');
    }

    public function postSubmit(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
        ]);
        // dd($request->all());

        try {
            $post = Post::create([
                'user_id' => auth()->id(),
                'title' => $request->title,
                'description' => $request->description,
            ]);
            return redirect()->back()->with('success', 'Post created successfully!');

        }catch(\Exception $e){
            return redirect()->back()->with('error', 'An error occurred while creating the post.');
        }
    }
}
