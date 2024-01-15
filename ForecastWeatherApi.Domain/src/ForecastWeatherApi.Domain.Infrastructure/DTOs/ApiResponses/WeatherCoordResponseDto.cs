namespace ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Infrastructure.DTOs.ApiResponses
{
    public class WeatherCoordResponseDto
    {
        public FeatureProperties Properties { get; set; }
    }

    public class FeatureProperties
    {
        public string GridId { get; set; }
        public int GridX { get; set; }
        public int GridY { get; set; }
        public string Forecast { get; set; }
        public string ForecastHourly { get; set; }
        public string ForecastGridData { get; set; }
        public string ObservationStations { get; set; }
    }
}
