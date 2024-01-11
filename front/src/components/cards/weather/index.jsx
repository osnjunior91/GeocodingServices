import React, { useState } from 'react';
import { Card, CardContent, Typography, Switch, Grid, Box, Divider } from '@mui/material';

const WeatherCard = () => {
  const [isCelsius, setIsCelsius] = useState(true);

  const temperature = isCelsius ? 25 : 77; // Substitua isso com a lógica real de obtenção da temperatura
  const temperatureUnit = isCelsius ? '°C' : '°F';

  return (
    <Card>
      {/* Parte superior com imagem ou gif e temperatura */}
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            {/* Adicione aqui o componente de imagem ou gif */}
            <Box>Imagem ou Gif aqui</Box>
          </Grid>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              {temperature}
              <span>{temperatureUnit}</span>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Sensação térmica, umidade, etc.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              Celsius
            </Typography>
            <Switch
              checked={isCelsius}
              onChange={() => setIsCelsius((prev) => !prev)}
              inputProps={{ 'aria-label': 'Alternar entre Celsius e Fahrenheit' }}
            />
            <Typography variant="body2" color="textSecondary">
              Fahrenheit
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      
      {/* Parte inferior com dados sobre o tempo */}
      <Divider />
      <CardContent>
        {/* Adicione aqui os dados sobre o tempo (umidade, vento, etc.) */}
        <Typography variant="body2" color="textSecondary">
          Outros dados sobre o tempo aqui...
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
