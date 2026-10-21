namespace server.Models;

public class Artwork
{
	public int Id { get; set; }
	public string Title { get; set; } = string.Empty;
	public string Description { get; set; } = string.Empty;
	public decimal Price { get; set; } 
	public string ImageUrl { get; set; } = string.Empty;
	public int UserId { get; set; }
	public User? User { get; set; }
}