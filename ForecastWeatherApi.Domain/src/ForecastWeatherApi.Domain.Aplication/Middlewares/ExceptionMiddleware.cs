using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;
using ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Aplication.Dtos.Response;


namespace ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Aplication.Middlewares
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;

        public ExceptionMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (ArgumentException ex)
            {
                await FormatErrorResponseAsync(context, StatusCodes.Status400BadRequest, ex.Message.ToString());
            }
            catch (Exception ex)
            {
                await FormatErrorResponseAsync(context, StatusCodes.Status500InternalServerError, ex.Message.ToString());
            }
        }

        private async Task FormatErrorResponseAsync(HttpContext context, int statusCode, string errorResponse)
        {
            context.Response.StatusCode = statusCode;
            context.Response.ContentType = "application/json";
            var jsonResponse = JsonConvert.SerializeObject(new ApiErrorVM(statusCode, errorResponse));
            await context.Response.WriteAsync(jsonResponse);
        }
    }
}
