import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import './App.css';
import { FormModal, Loading, MenuBar, ShowMap } from './components';
import { Home } from './pages';
import { GetWeatherForecast } from './services/api';
import { GetApiErrorMessage } from './utils';


const App = () => {

  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (values) => {
    setLoading(true);
    GetWeatherForecast(values)
      .then(response => {
        setData(response.data);
      })
      .catch((error) => {
        alert(GetApiErrorMessage(error));
      })
      .finally(() => setLoading(false));
  }

  return (
    <Grid container rowSpacing={5} direction="column">
      <Loading isOpen={loading} />
      <FormModal open={open} setOpen={setOpen} handleSubmit={onSubmit} />
      <Grid item>
        <MenuBar setOpen={setOpen} weatherData={data} />
      </Grid>
      {data ?
        <Grid item rowSpacing={5}>
          <Grid item alignItems={'center'} justifyContent={'center'} style={{ height: '260px', paddingInline: '20px' }}>
            <ShowMap latitude={data?.lat} longitude={data?.lng} />
          </Grid>
          <Grid item alignItems={'center'} justifyContent={'center'} style={{ padding: '20px' }}>
            <Home data={data} />
          </Grid>
        </Grid> : null}
    </Grid>
  );
}

export default App;
