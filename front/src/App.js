import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import './App.css';
import { MenuBar, ShowMap } from './components';
import { Home } from './pages';
import { WeatherData } from "./data";


const App = () => {

  const [data, setData] = useState(WeatherData);

  return (
    <Grid container rowSpacing={5} direction="column">
      <Grid item>
        <MenuBar />
      </Grid>
      <Grid item alignItems={'center'} justifyContent={'center'} style={{ height: '260px', paddingInline: '20px' }}>
        <ShowMap latitude={WeatherData?.lat} longitude={WeatherData?.lng} />
      </Grid>
      <Grid item alignItems={'center'} justifyContent={'center'} style={{ paddingInline: '20px' }}>
        <Home data={data} />
      </Grid>
    </Grid>
  );
}

export default App;
