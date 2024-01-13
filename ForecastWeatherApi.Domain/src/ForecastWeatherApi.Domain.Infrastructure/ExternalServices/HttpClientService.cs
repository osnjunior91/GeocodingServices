using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Infrastructure.ExternalServices
{
    public class HttpClientService: IHttpClientService
    {
        private readonly HttpClient _httpClient;

        public HttpClientService()
        {
            _httpClient = new HttpClient();
        }

        public async Task<TResponse?> FetchDataAsync<TResponse>(string url)
        {
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
