using ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Aplication.Dtos.Request;
using ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Aplication.Dtos.Response;
using ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Aplication.Interfaces;
using ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Infrastructure.DTOs.ApiResponses;
using ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Infrastructure.ExternalServices;
using Newtonsoft.Json;

namespace ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Aplication.Services
{
    public class WeatherForecastService : IWeatherForecastService
    {
        private readonly IHttpClientService _httpClientService;
        private const string ADDRESSAPIURL = "https://geocoding.geo.census.gov/geocoder/locations/address";
        private const string WEATHERAPIURL = "http://api.weather.gov";
        private readonly List<KeyValuePair<string, string>> Headers = new List<KeyValuePair<string, string>>
        {
            new KeyValuePair<string, string>("User-Agent", Guid.NewGuid().ToString()),
        };

        public WeatherForecastService(IHttpClientService httpClientService)
        {
            _httpClientService = httpClientService;
        }

        public async Task<WeatherForecastDataVM> GetWeatherForecastAsync(GetWeatherForecastRequest request)
        {
            var coords = await _httpClientService.FetchDataAsync<AddressApiResponseDto>($"{ADDRESSAPIURL}?{request}");
            if(coords?.Result?.AddressMatches.Count == 0)
                throw new ArgumentException("Address not found, chack the parameters.");

            var weatherApiData = await _httpClientService.FetchDataAsync<WeatherCoordResponseDto>($"{WEATHERAPIURL}/points/{coords.Result.FilterByCoords}", Headers);
            var forecastData = await _httpClientService.FetchDataAsync<WeatherForecastResponseDto>(weatherApiData.Properties.Forecast);

            return new WeatherForecastDataVM(coords.Result.AddressMatches[0], forecastData);
        }
    }
}
