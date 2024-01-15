using ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Aplication.Dtos.Request;
using ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Aplication.Dtos.Response;
using ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Aplication.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ForecastWeatherApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        
        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IWeatherForecastService _forecastService;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IWeatherForecastService forecastService)
        {
            _logger = logger;
            _forecastService = forecastService;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public async Task<ActionResult<WeatherForecastDataVM>> Get([FromQuery] GetWeatherForecastRequest request)
        {
            request.Validation();
            var result  = await _forecastService.GetWeatherForecastAsync(request);
            return Ok(result);
        }
    }
}
