import { useState, useEffect } from 'react'
import { Loader } from './Loader'
import { useEffectOnce } from '../others-hooks/useEffectOnce'
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
    cityDetails: ICityDetails
}


export default function Forecast({ cityDetails }: IForecastProps) {

    // set up variables
    const [ loader, setLoader ] = useState(false)
    const [ apiError, setApiError ] = useState(false)
    const [ data, setData ] = useState<DataDay[]>([])


    // if the component is mounted, and a city details object has been populated, then call the api function
    useEffect(() => {
        if (cityDetails.lat && cityDetails.lon) getForecast()
    }, [ cityDetails ]);


    // call the city-->forecast api
    function getForecast() {

        const apiUrl: string = `http://localhost:8080/forecast?lat=${cityDetails.lat}&lon=${cityDetails.lon}`;

        (async () => {
            setLoader(true)
            try {
                const response = await axios.get(apiUrl)
                setData(response.data)
                setTimeout(() => setLoader(false), 700)
            } catch (error) {
                console.log(error || 'Error : The local API was unable to get data from the remote weather API')
                setTimeout(() => setLoader(false), 700)
                setApiError(true)
            }
        })()
        
    }

    // render component acoording to state
    return (
        <>
            { loader ? <Loader/> : ``}
            { apiError ? <div>....ERROR CALLING API....</div> : `` }
            { !apiError && !loader ? <Days data={data} /> : `` }
        </>
    )
}
