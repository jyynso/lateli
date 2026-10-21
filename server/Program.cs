using Microsoft.EntityFrameworkCore;
using server.Data;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(options =>
	options.UseMySql(
		builder.Configuration.GetConnectionString("Default"),
		ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("Default"))
	));

builder.Services.AddCors(options =>
{
	options.AddPolicy(name: MyAllowSpecificOrigins, 
	policy =>
	{
		policy.WithOrigins("http://localhost:5174")
			.AllowAnyHeader()
			.AllowAnyMethod()
			.AllowCredentials();
	});
});

var app = builder.Build();

app.UseCors(MyAllowSpecificOrigins);
app.MapControllers();
app.Run();
