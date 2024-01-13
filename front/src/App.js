import React from 'react';
import Grid from '@mui/material/Grid';
import './App.css';
import { MenuBar, WeatherCard } from './components';


const App = () => {

  const days = [0, 1, 2, 3, 4, 5, 6]

  return (
    <Grid container rowSpacing={12} direction="column">
      <Grid item xs={2}>
        <MenuBar />
      </Grid>
      <Grid item xs={10} alignItems={'center'} justifyContent={'center'}>
        <Grid container spacing={8} alignContent={'space-between'}>
          {
            days.map(x => {
              return (
                <Grid item xs>
                  <WeatherCard key={x} />
                </Grid>
              )
            })
          }
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
