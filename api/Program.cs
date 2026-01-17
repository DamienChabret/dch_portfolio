using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using api.Data;
using api.Services;

// Avoid datetime errors because of UTC, etc..
AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

var builder = WebApplication.CreateBuilder(args);
// Ajoute les services MVC (controllers)
var allowedOrigin = builder.Configuration["AllowedOrigin"];
Console.WriteLine($"AllowedOrigin: {allowedOrigin}");

builder.Services.AddCors(options =>
{
    if (allowedOrigin != null)
    {
         options.AddPolicy(name: "AllowAngularDev",
        policy =>
        {
            policy.WithOrigins(allowedOrigin) // Front
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
    }
});

// Paramètre des controllers
builder.Services.AddControllers()
    .AddJsonOptions(options =>
        {
            options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
        });;
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


// Services
builder.Services.AddScoped<CareerService>();
builder.Services.AddScoped<DegreeService>();
builder.Services.AddScoped<ProjectService>();
builder.Services.AddScoped<SkillService>();
builder.Services.AddScoped<ToolService>();

// Configuration de la chaîne de connexion
var connectionString = "";
if (builder.Environment.IsDevelopment())
{
    connectionString = builder.Configuration.GetConnectionString("dev-connection");
}
else
{
    var host = Environment.GetEnvironmentVariable("PGHOST");
    var database = Environment.GetEnvironmentVariable("PGDATABASE");
    var user = Environment.GetEnvironmentVariable("PGUSER");
    var password = Environment.GetEnvironmentVariable("PGPASSWORD");

    connectionString = $"Host={host};Database={database};Username={user};Password={password}";
}


builder.Services.AddDbContext<ApiDbContext>(
    options => options.UseNpgsql(connectionString)
);

// Build
var app = builder.Build();
app.UseHttpsRedirection();
app.UseCors("AllowAngularDev"); 
app.UseAuthorization();
app.MapControllers();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.Run();
