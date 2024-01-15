using Newtonsoft.Json;

namespace ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Aplication.Dtos.Response
{
    public class ApiErrorVM
    {
        public ApiErrorVM(int statusCode, string message)
        {
            StatusCode = statusCode;
            Message = message;
        }

        [JsonProperty("statusCode")]
        public int StatusCode { get; private set; }
        [JsonProperty("message")]
        public string Message { get; private set; }
    }
}
