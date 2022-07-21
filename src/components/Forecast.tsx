import { useState, useEffect } from 'react'
import { Loader } from './Loader'
import { useEffectOnce } from '../custom-hooks/useEffectOnce'
import { DataDay } from '../interfaces/ForecastInterfaces'
import axios from 'axios'
import Days from './Days'
import './css/forecast.css'

interface ICityDetails {
    label: string,
    lat: string,
    lon: string,
    flag: string,
    regionCode: string
}

interface IForecastProps {
    cityDetails :{ cityDetails: ICityDetails }
}


export default function Forecast({ label, lat, lon }: any) {

    // generic
    const [ loader, setLoader ] = useState(false)
    const [ apiError, setApiError ] = useState(false)

    // getForecast
    const [ data, setData ] = useState<DataDay[]>([])


    // onload
    useEffect(() => {

        /*
        NEXT: Need to link the incoming changes in 
            label/lat/lon with the API call
        */
        console.log(`logged from useEffect in Forecast.tsx`)

        //getForecast()
    }, [ lat ]);


    // ---------------- API :  LATLON --> WEATHER -----------------
    function getForecast() {
        
        if (lat !== `` && lon !== ``) {
            const apiUrl: string = `http://localhost:8080/forecast?lat=${lat}&lon=${lon}`;

            (async () => {
                setLoader(true)
                try {
                    const response = await axios.get(apiUrl)
                    setData(response.data)
                    setLoader(false)
                } catch (error) {
                    console.log(error || 'Error : The local API was unable to get data from the remote weather API')
                    setLoader(false)
                    setApiError(true)
                }
            })()
        }
    }
    // -------------------------APIs END----------------------------

    
    return (
        <>
            <h1>Forecast</h1>
            { loader ? <Loader/> : ``}
            { apiError ? <div>....ERROR CALLING API....</div> : `` }
            { !apiError && !loader ? <Days data={data} /> : `` }
        </>
    )
}
