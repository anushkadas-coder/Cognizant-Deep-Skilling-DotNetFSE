using Microsoft.AspNetCore.OpenApi;

var builder = WebApplication.CreateBuilder(args);

// 1. Add services to the container (Sab kuch ek hi jagah register karein)
builder.Services.AddControllers(options =>
{
    options.Filters.Add<CustomExceptionFilter>(); // Aapka Custom Filter
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOpenApi();

var app = builder.Build();

// 2. Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseAuthentication(); // JWT ke liye
app.UseAuthorization();
app.MapControllers();

app.Run();