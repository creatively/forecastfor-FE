import { useState } from 'react'
import { Loader } from './Loader'
import { useEffectOnce } from '../custom-hooks/useEffectOnce'
import { DataDay } from '../interfaces/ForecastInterfaces'
import axios from 'axios'
import Days from './Days'
import './css/forecast.css'


export default function Forecast() {

    const [data, setData] = useState<DataDay[]>([])
    const [loader, setLoader] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [apiError, setApiError] = useState(false)
    
    useEffectOnce(() => {
        const apiErrorHandler = (error: any) => {
            console.log(error || '502 - Local API unable to contact remote API')
            setLoader(false)
            setLoaded(false)
            setApiError(true)
        }

        const apiUrl: string = `http://localhost:8080/forecast`;

        (async () => {
            setLoader(true)
            try {
                await axios
                    .get(apiUrl)
                    .then((response) => {
                        setTimeout(() => {
                            setLoader(false)
                            setData(response.data)
                            setLoaded(true)
                        }, 100)
                    })
                    .catch((error) => {
                        apiErrorHandler(error)
                    })
            } catch (error) {
                console.error(error);
            }
        })()
    });

    return (
        <>
            <h1>Forecast</h1>
            {loader ? <Loader/> : ''}
            {apiError ? <div>....ERROR CALLING API....</div> : <Days data={data} loaded={loaded} />}
        </>
    )
}
