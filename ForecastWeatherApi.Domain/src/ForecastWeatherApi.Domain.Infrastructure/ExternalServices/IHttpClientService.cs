namespace ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Infrastructure.ExternalServices
{
    public interface IHttpClientService
    {
        Task<TResponse?> FetchDataAsync<TResponse>(string url);
    }
}
