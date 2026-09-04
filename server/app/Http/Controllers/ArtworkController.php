<?php

namespace App\Http\Controllers;

use App\Models\Artwork;
use Illuminate\Http\Request;

class ArtworkController extends Controller
{
	public function artworks() 
	{
		return Artwork::with('user')->get();
	}
}
