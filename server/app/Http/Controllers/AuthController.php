<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
	
	public function register(Request $request)
	{
		$validated = $request->validate([
			'email' => 'required|email|unique:users',
			'password' => 'required|confirmed',
			'name' => 'nullable|string',
		]);

		$user = User::create([
			'email' => $validated['email'],
			'password' => Hash::make($validated['password']),
			'name' => $validated['name'] ?? null,
		]);

		Auth::login($user);

		return response()->json($user);
	}

	public function login(Request $request)
	{
		$credentials = $request->validate([
			'email' => 'required|email',
			'password' => 'required'
		]);

		if (!Auth::attempt($credentials)) {
			return response()->json(['message' => 'Invalid credentials'], 401);
		}

		$request->session()->regenerate();

		return response()->json(Auth::user());
	}

	public function logout(Request $request)
	{
		Auth::guard('web')->logout();

		$request->session()->invalidate();
		$request->session()->regenerateToken();

		return response()->json(['message' => 'Logged out']);
	}
}
