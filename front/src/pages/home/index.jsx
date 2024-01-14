import React from 'react'
import Grid from '@mui/material/Grid';
import { WeatherCard } from '../../components';

const Home = ({data}) => {
  return (
    <Grid container spacing={8} alignContent={'space-between'}>
          {
            data?.weatherForecast?.map(item => {
              return (
                <Grid item xs>
                  <WeatherCard key={item.weekDay} weatherData={item} />
                </Grid>
              )
            })
          }
        </Grid>
  )
}

export default Home;