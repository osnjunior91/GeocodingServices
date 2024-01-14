import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import './App.css';
import { MenuBar } from './components';
import { Home } from './pages';
import { WeatherData } from "./data";


const App = () => {

  const [data, setData] = useState(WeatherData);

  return (
    <Grid container rowSpacing={12} direction="column">
      <Grid item xs={2}>
        <MenuBar />
      </Grid>
      <Grid item xs={10} alignItems={'center'} justifyContent={'center'}>
        <Home data={data} />
      </Grid>
    </Grid>
  );
}

export default App;
