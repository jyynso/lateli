<?php

use App\Http\Controllers\ArtworkController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/artworks', [ArtworkController::class, 'artwork']);

Route::post('/register', [AuthController::class, 'register']);