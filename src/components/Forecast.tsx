import { useState } from 'react'
import { useEffectOnce } from '../custom-hooks/useEffectOnce'
import { DataDay } from '../interfaces/ForecastInterfaces'
import axios from 'axios'
import Days from './Days'
import './css/forecast.css'

export default function Forecast() {

    const [data, setData] = useState<DataDay[]>([])
    const [loader, setLoader] = useState(false)

    useEffectOnce(() => {
        const apiUrl: string = `http://localhost:8080/forecast`;

        (async () => {
            setLoader(true)
            try {
                const response = await axios.get(apiUrl);
                const forecast = response.data
                setData(forecast)
                setLoader(false)
            } catch (error) {
                console.error(error);
            }
        })()
    });

    return (
        <>
            <h1>Forecast</h1>

            {loader ? <div>....LOADING FORECAST....</div> : <Days data={data} />}
        </>
    )
}
