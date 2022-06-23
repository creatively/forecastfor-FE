import React, { useState } from 'react'
//import { weatherData } from '../mock-api/weather-data';
//import WeatherJsonInterface from '../interfaces/WeatherJsonInterface';
import { useEffectOnce } from '../custom-hooks/useEffectOnce';
import useStore from '../store';
import ForecastDays from './ForecastDays';
import ForecastDayThreeHourColumn from './ForecastDayThreeHourColumn'
import './css/forecast.css';

const c = (txt: any) => console.log(txt)
const random = (num: number) => (Math.random() + 1).toString(36).substring(num)

interface Day {
    "dayName": 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun',
    "tempMax": number
}


export default function Forecast() {
    
    const store = useStore()

    useEffectOnce(() => {
        
    });

    return (
        <>
            <h1>Forecast { random(7) }</h1>
            
            <ForecastDays />
                
            <ul className="forecast">
                {store.forecastDayThreeHourColumns.map(() => (
                    <ForecastDayThreeHourColumn />
                ))}
            </ul>
        </>
    )
}
