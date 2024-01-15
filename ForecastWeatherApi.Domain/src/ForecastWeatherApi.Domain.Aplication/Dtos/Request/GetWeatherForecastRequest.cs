
namespace ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Aplication.Dtos.Request
{
    public class GetWeatherForecastRequest
    {
        public string? Street { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public string? Zip { get; set; }

        public void Validation()
        {
            if (string.IsNullOrEmpty(Street) || Street.Length > 100)
                throw new ArgumentException("Street address cannot be empty and cannot exceed 100 characters");
            if ((string.IsNullOrEmpty(City) || string.IsNullOrEmpty(State)) && string.IsNullOrEmpty(Zip))
                throw new ArgumentException("Specify street with city and state or ZIP");
        }

        public override string ToString()   
        {
            return $"street={Street}&city={City}&state={State}&zip={Zip}&benchmark=Public_AR_Census2020&format=json";
        }
    }
}
