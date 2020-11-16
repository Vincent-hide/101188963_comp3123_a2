import React, {useState, useEffect} from 'react';
import {Grid} from "@material-ui/core";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";

const api = {
  key: "48efe645d2614aa1ad2f21fd62654d08",
  base: "http://api.openweathermap.org/data/2.5/"
};

const useStyles = makeStyles((theme) =>
  createStyles({

  }),
);

export const Weather = () => {
  const [weatherData, setWeatherData] = useState([], []);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`${api.base}forecast/daily?q=toronto&mode=json&units=metric&cnt=10&appid=${api.key}`)
      .then(data => setWeatherData(data.data.list))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Weather</h1>
      <Grid container justify="center">
      {
        weatherData.map((weather, i) => {
          return (
            <Grid item key={i} md={4}>
              <WeatherCard weatherData={weather} />
            </Grid>
          )
          // return (
          //   <div key={i} style={styling}>
          //     <img src={`http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`} alt=""/>
          //     <div>descirption: {weatherInfo.description}</div>
          //     <div>main: {weatherInfo.main}</div>
          //     <div>Temp:
          //       <div>day: {weather.temp.day}</div>
          //       <div>min: {weather.temp.min}</div>
          //       <div>max: {weather.temp.max}</div>
          //       <div>night: {weather.temp.night}</div>
          //       <div>morn: {weather.temp.morn}</div>
          //     </div>
          //   </div>
          // )
        })
      }
      </Grid>

    </div>
  )
}