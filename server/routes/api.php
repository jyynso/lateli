<?php

use App\Http\Controllers\ArtworkController;
use Illuminate\Support\Facades\Route;

Route::get('/artworks', [ArtworkController::class, 'index']);

