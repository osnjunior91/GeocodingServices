import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import './App.css';
import { FormModal, Loading, MenuBar, ShowMap } from './components';
import { Home } from './pages';
import { WeatherData } from "./data";
import { GetWeatherForecast } from './services/api';


const App = () => {

  const [data, setData] = useState(WeatherData);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  const GetForecast = (parms) => {
    setLoading(true);
    GetWeatherForecast(parms)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => setLoading(false));
  }

  const onSubmit = (values) => {
    const parms = {
      street: '401 7TH AVE',
      city: 'New York',
      state: 'NY',
      zip: '10001',
    }
    GetForecast(parms);
  }

  return (
    <Grid container rowSpacing={5} direction="column">
      <Loading isOpen={loading} />
      <FormModal open={open} setOpen={setOpen} handleSubmit={onSubmit} />
      <Grid item>
        <MenuBar setOpen={setOpen} weatherData={data} />
      </Grid>
      <Grid item alignItems={'center'} justifyContent={'center'} style={{ height: '260px', paddingInline: '20px' }}>
        <ShowMap latitude={data?.lat} longitude={data?.lng} />
      </Grid>
      <Grid item alignItems={'center'} justifyContent={'center'} style={{ paddingInline: '20px' }}>
        <Home data={data} />
      </Grid>
    </Grid>
  );
}

export default App;
