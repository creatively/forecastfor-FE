import { useState, useEffect } from 'react'
import { Loader } from './Loader'
import { useEffectOnce } from '../custom-hooks/useEffectOnce'
import { DataDay } from '../interfaces/ForecastInterfaces'
import axios from 'axios'
import Days from './Days'
import './css/forecast.css'

interface ICity {
    city: string
}

interface LatLon {
    lat: string,
    lon: string
}




export default function Forecast({ city }: ICity) {

    // ---------------- API :  TEXT --> CITY -----------------
    // ---------------- API :  CITY --> LATLON -----------------
    function getLatLon() {

        console.log(`getting latlon for city : ${city}`)


        const result: LatLon = { 
            lat: `51.3`,
            lon: `3.1`
        }
        return result
    }


    // generic
    const [ loader, setLoader ] = useState(false)
    const [ apiError, setApiError ] = useState(false)
    // getLatLon
    const [ latlon, setLatlon ] = useState<LatLon>({lat: ``,lon: ``})
    // getForecast
    const [ data, setData ] = useState<DataDay[]>([])


    // loaded
    useEffectOnce(() => {
    });

    // city changes
    useEffect(() => {
        console.log(`---city has changed to be ${city}`)
        getLatLon()
    }, [ city ])

    // latlon changes
    useEffect(() => {
        getForecast()
    }, [ latlon ])

    




    // ---------------- API :  LATLON --> WEATHER -----------------
    function getForecast() {
        const lat = latlon.lat
        const lon = latlon.lon
        
        if (lat !== `` && lon !== ``) {
            const apiUrl: string = `http://localhost:8080/forecast?lat=${latlon.lat}&lon=${latlon.lon}`;

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
