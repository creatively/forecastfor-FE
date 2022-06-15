import React, { useState } from 'react'
import WeatherJsonInterface from '../interfaces/WeatherJsonInterface';
import { weatherData } from '../mock-api/weather-data';
import { useEffectOnce } from '../custom-hooks/useEffectOnce';
import { createGlobalState } from 'react-use';
import ForecastDay from './ForecastDay';
import './css/forecast.css'

const c = (txt: any) => console.log(txt)

const useGlobalValue = createGlobalState<WeatherJsonInterface>();


export default function Forecast() {

    const [forecast, setForecast] = useGlobalValue();

    useEffectOnce(() => {
        getMyData();
    });
  
    function getMyData() {
      setForecast(weatherData)
    }


    return (
        <ul className="forecast-days">
            {forecast?.forecastDay?.map((day: any) => (
                <ForecastDay day={day} />
            ))}
        </ul>
    )   
}
