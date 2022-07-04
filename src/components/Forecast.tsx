import { useState } from 'react'
import { useEffectOnce } from '../custom-hooks/useEffectOnce'
import Days from './Days'
import './css/forecast.css'
import axios from 'axios'
import { DataDay } from '../interfaces/ForecastInterfaces'

export default function Forecast() {

    const [data, setData] = useState<DataDay[]>([])
    const [loader, setLoader] =useState(false)

    useEffectOnce(() => {
        const apiUrl: string = `https://raw.githubusercontent.com/creatively/forecastfor-FE/main/src/mock-api/weather-data.json`;
    
        (async () => {
            setLoader(true)
            try {
                const response = await axios.get(apiUrl);
                const forecast = response.data.forecastDays
                setData(forecast)
                setLoader(false)
                console.log(response.data.forecastDays);
            } catch (error) {
                console.error(error);
            }
        })()
    });

    return (
        <>
            <h1>Forecast</h1>

            {loader ? <div>....Loading</div> : <Days data={data} />}
        </>
    )
}
