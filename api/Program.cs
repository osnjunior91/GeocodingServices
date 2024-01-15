using ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Aplication.Interfaces;
using ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Aplication.Middlewares;
using ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Aplication.Services;
using ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Infrastructure.ExternalServices;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IWeatherForecastService, WeatherForecastService>();
builder.Services.AddScoped<IHttpClientService, HttpClientService>();
builder.Services.AddCors();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x
    .AllowAnyMethod()
    .AllowAnyHeader()
    .SetIsOriginAllowed(origin => true) 
    .AllowCredentials());

app.UseAuthorization();

app.MapControllers();

app.UseMiddleware<ExceptionMiddleware>();

app.Run();
