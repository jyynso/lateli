using Microsoft.EntityFrameworkCore;
using server.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(options =>
	options.UseMySql(
		builder.Configuration.GetConnectionString("Default"),
		ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("Default"))
	));

var app = builder.Build();

app.MapControllers();
app.Run();
