import React, { useState } from 'react'
//import WeatherJsonInterface from '../interfaces/WeatherJsonInterface';
//import { weatherData } from '../mock-api/weather-data';
import { useEffectOnce } from '../custom-hooks/useEffectOnce';
import useStore from '../store';
import ForecastDay from './ForecastDay';
import './css/forecast.css'
interface Temp {
    myString: string;
    myFunction: () => void;
}

const c = (txt: any) => console.log(txt)



export default function Forecast() {
    
    const store = useStore()

    useEffectOnce(() => {
        
    });


    return (
        <ul className="forecast-days">
            { store.myString }
            <ForecastDay day={ {} }/>
        </ul>
    )   
}





/*
https://www.thisdot.co/blog/zustand-for-state-management

FETCHING DATA FROM API
const useStore = create(set => ({
  posts: {},
  getPosts: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    set({ posts: await response.json() })
  }
}))



SUGGESTED BY AUTOPILOT (in store.tsx) :
const useStore = create<WeatherJsonInterface>((set, get) => ({
    weatherData: {} as WeatherJsonInterface,
        getWeatherData: async () => {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=b6907d289e10d714a6e88b30761fae22')
            set({ weatherData: await response.json() })
        }
*/