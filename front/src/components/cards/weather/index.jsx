import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { DateFormat } from '../../../utils';
import './index.css';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

const WeatherCard = ({ weatherData }) => {
  const { date, weekDay, dayWeather, nightWeather } = weatherData;

  const WeatherDescription = (text, weather) => (
    <Accordion>
      <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
      >
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {text}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
      <div>
          <Typography variant="body1">{weather?.shortForecast}</Typography>
          <Typography variant="body2">Temperature: {weather?.temperature}°F</Typography>
          <Typography variant="body2">Wind Speed: {weather?.windSpeed}</Typography>
          <Typography variant="body2">Humidity: {weather?.relativeHumidity}%</Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Detailed Forecast
          </Typography>
          <Typography variant="body2">{weather?.detailedForecast}</Typography>
        </div>
      </AccordionDetails>
    </Accordion>
  )

  return (
    <Card style={{minHeight: '150px'}}>
      <CardContent>
        <Typography alignSelf={'center'} className='text-center' variant="h5" component="div">
          {DateFormat(date)}
        </Typography>
        <Typography variant="h6" component="div" color="textSecondary">
          {weekDay}
        </Typography>
        <div className='accordion'>
          {WeatherDescription('Day', dayWeather)}
        </div>
        <div className='accordion'>
          {WeatherDescription('Night', nightWeather)}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
