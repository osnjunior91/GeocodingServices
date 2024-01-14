import React from 'react'
import Grid from '@mui/material/Grid';
import { WeatherCard } from '../../components';

const Home = ({data}) => {
    const days = [0, 1, 2, 3, 4, 5, 6]
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