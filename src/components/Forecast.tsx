import { useState, useRef } from 'react'
import { Loader } from './Loader'
import { useEffectOnce } from '../custom-hooks/useEffectOnce'
import { DataDay } from '../interfaces/ForecastInterfaces'
import axios from 'axios'
import Days from './Days'
import './css/forecast.css'


export default function Forecast() {

    const [data, setData] = useState<DataDay[]>([])
    const [loader, setLoader] = useState(false)
    const [apiError, setApiError] = useState(false)
    
    useEffectOnce(() => {
        const apiErrorHandler = (error: any) => {
            console.log(error || '502 - Local API unable to contact remote API')
            setLoader(false)
            setApiError(true)
        }

        const latitude = `51`
        const longitude = `0`
        
        const apiUrl: string = `http://localhost:8080/forecast?lat=${latitude}&lon=${longitude}`;

        (async () => {
            setLoader(true)
            try {
                await axios
                    .get(apiUrl)
                    .then((response) => {
                        setLoader(false)
                        const incomingData: DataDay[] = response.data
console.log(incomingData)
                        setData(incomingData)
                    })
                    .catch((error) => {
                        apiErrorHandler(error)
                    })
            } catch (error) {
                console.error(error);
            }
        })()
    });
/*
    function locationLookup(event: React.ChangeEvent<HTMLInputElement>): any {
        event.preventDefault()
        const value: string = inputLocation.current.value
        console.log(`--- locationLookup`)
        console.log(`${value}`)
        // debouce(apiCall())
    }
*/

    return (
        <>
            <h1>Forecast</h1>
            { loader ? <Loader/> : ``}
            { apiError ? <div>....ERROR CALLING API....</div> : `` }
            { !apiError && !loader ? <Days data={data} /> : `` }
        </>
    )
}
