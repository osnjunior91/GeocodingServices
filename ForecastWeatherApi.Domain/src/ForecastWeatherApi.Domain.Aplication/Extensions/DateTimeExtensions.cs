using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Aplication.Extensions
{
    public static class DateTimeExtensions
    {
        public static string ToDayOfWeekString(this DateTime date)
        {
            if (date.Date == DateTime.Now.Date)
            {
                return "Today";
            }
            else
            {
                return date.ToString("dddd");
            }
        }
    }
}
