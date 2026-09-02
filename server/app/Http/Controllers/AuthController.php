<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
	public function register(Request $request)
	{
		$validated = $request->validate([
			'email' => 'required|email|unique:users',
			'password' => 'required|min:8|confirmed',
			'name' => 'nullable|string',
		]);

		$user = User::create([
			'email' => $validate['email'],
			'password' => Hash::make($validate['password']),
			'name' => $validate['name'] ?? null,
		]);

		Auth::login($user);

		return response()->json($user);
	}
}
