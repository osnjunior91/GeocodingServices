using Newtonsoft.Json;

namespace ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Infrastructure.ExternalServices
{
    public class HttpClientService : IHttpClientService
    {
        private readonly HttpClient _httpClient;

        public HttpClientService()
        {
            _httpClient = new HttpClient();
        }

        public async Task<TResponse?> FetchDataAsync<TResponse>(string url, List<KeyValuePair<string, string>>? headers = null)
        {
            // Adiciona headers, se fornecidos
            if (headers != null)
            {
                foreach (var header in headers)
                {
                    _httpClient.DefaultRequestHeaders.Add(header.Key, header.Value);
                }
            }

            HttpResponseMessage response = await _httpClient.GetAsync(url);

            if (response.IsSuccessStatusCode)
            {
                string responseData = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<TResponse>(responseData);
            }
            else
            {
                throw new HttpRequestException($"HTTP request ({url}) failed with status code {response.StatusCode}");
            }
        }
    }
}
