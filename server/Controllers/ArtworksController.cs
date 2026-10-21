using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ArtworksController : ControllerBase
{
	private readonly AppDbContext _context;
	public ArtworksController(AppDbContext context)
	{
		_context = context;
	}

	[HttpGet]
	public async Task<ActionResult<IEnumerable<Artwork>>> GetArtworks()
	{
		return await _context.Artworks.ToListAsync();
	}

	[HttpGet("{id}")]
	public async Task<ActionResult<Artwork>> GetArtwork(int id)
	{
		var artwork = await _context.Artworks.FindAsync(id);
		if (artwork == null) return NotFound();
		return artwork;
	}
}