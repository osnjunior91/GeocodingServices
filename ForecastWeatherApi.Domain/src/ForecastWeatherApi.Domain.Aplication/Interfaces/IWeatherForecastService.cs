using ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Aplication.Dtos.Request;
using ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Aplication.Dtos.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Aplication.Interfaces
{
    public interface IWeatherForecastService
    {
        public Task<WeatherForecastDataVM> GetWeatherForecastAsync(GetWeatherForecastRequest request);
    }
}
