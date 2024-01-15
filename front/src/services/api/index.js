import { api } from "../axios";

export const GetWeatherForecast = (queryParams) => api.get('WeatherForecast', { params: queryParams });