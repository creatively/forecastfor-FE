import React, { useState } from 'react'
import WeatherJsonInterface from '../interfaces/WeatherJsonInterface';
import { weatherData } from '../mock-api/weather-data';
import { useEffectOnce } from '../custom-hooks/useEffectOnce';

const c = (txt: any) => console.log(txt)


export default function Weather() {

    const [weather, setWeather] = useState<WeatherJsonInterface>();

    useEffectOnce(() => {
        getMyData();
    });
  
    function getMyData() {
      setWeather(weatherData)
    }


    return (
        <div className="weather">
            {weather?.code}
        </div>
    )   
}