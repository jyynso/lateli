<?php

use App\Http\Controllers\ArtworkController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/artworks', [ArtworkController::class, 'artworks']);

Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

