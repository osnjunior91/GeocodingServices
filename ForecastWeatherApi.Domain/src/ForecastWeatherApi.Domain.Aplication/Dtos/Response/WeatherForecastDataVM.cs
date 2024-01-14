using ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Aplication.Extensions;
using ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Infrastructure.DTOs.ApiResponses;
using System.Collections.Generic;

namespace ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Aplication.Dtos.Response
{
    public class WeatherForecastDataVM
    {
        public string Zip { get; private set; }
        public string StreetName { get; private set; }
        public string City { get; private set; }
        public string State { get; private set; }
        public double Lat { get; private set; }
        public double Lng { get; private set; }
        public List<WeatherDataVM> WeatherForecast { get; private set; }

        public WeatherForecastDataVM(AddressMatch address, WeatherForecastResponseDto forecast) 
        {
            Lat = address.Coordinates.Y;
            Lng = address.Coordinates.X;
            Zip = address.AddressComponents.Zip;
            StreetName = address.AddressComponents.StreetName;
            City = address.AddressComponents.City; 
            State = address.AddressComponents.State;
            WeatherForecast = GenerateWeatherForecastData(forecast.Properties);
        }

        private List<WeatherDataVM>? GenerateWeatherForecastData(WeatherProperties properties)
        {
            List<WeatherDataVM> result = new List<WeatherDataVM>();
            for (var i = 0; i < 7; i++) 
            {
                result.Add(new WeatherDataVM(
                    DateTime.UtcNow.AddDays(i).Date, 
                    properties.Periods.First(x => x.IsDaytime && x.StartTime.Date == DateTime.UtcNow.AddDays(i).Date),
                    properties.Periods.First(x => !x.IsDaytime && x.StartTime.Date == DateTime.UtcNow.AddDays(i).Date)));
            }
            return result;
        }
    }

    public class WeatherDataVM
    {
        public WeatherDataVM(DateTime date, Period dayPeriod, Period nightPeriod)
        {
            Date = date;
            WeekDay = date.ToDayOfWeekString();
            DayWeather = new WeatherDataInfoVM(dayPeriod);
            NightWeather = new WeatherDataInfoVM(nightPeriod);
        }
        public DateTime Date { get; private set; }
        public string WeekDay { get; private set; }
        public WeatherDataInfoVM DayWeather { get; private set; }
        public WeatherDataInfoVM NightWeather { get; private set; }

    }

    public class WeatherDataInfoVM
    {
        public WeatherDataInfoVM(Period period)
        {
            Temperature = period.Temperature;
            WindSpeed = period.WindSpeed;
            Icon = period.Icon;
            ShortForecast = period.ShortForecast;
            DetailedForecast = period.DetailedForecast;
            RelativeHumidity = period.RelativeHumidity?.Value;
        }

        public int Temperature { get; private set; }
        public string WindSpeed { get; private set; }
        public string Icon { get; private set; }
        public string ShortForecast { get; private set; }
        public string DetailedForecast { get; private set; }
        public int? RelativeHumidity { get; private set; }

    }
}
