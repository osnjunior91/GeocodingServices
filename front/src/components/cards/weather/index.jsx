import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const WeatherCard = ({ weatherData }) => {
  const { date, weekDay, dayWeather } = weatherData;

  const formatDate = (inputDate) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(inputDate).toLocaleDateString('en-US', options);
  };

  return (
    <Card style={{height: '450px'}}>
      <CardContent>
        <Typography variant="h5" component="div">
          {formatDate(date)}
        </Typography>
        <Typography variant="h6" component="div" color="textSecondary">
          {weekDay}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Day
        </Typography>
        <div>
          <Typography variant="body1">{dayWeather?.shortForecast}</Typography>
          <Typography variant="body2">Temperature: {dayWeather?.temperature}°F</Typography>
          <Typography variant="body2">Wind Speed: {dayWeather?.windSpeed}</Typography>
          <Typography variant="body2">Humidity: {dayWeather?.relativeHumidity}%</Typography>
        </div>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Detailed Forecast
        </Typography>
        <Typography variant="body2">{dayWeather?.detailedForecast}</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
