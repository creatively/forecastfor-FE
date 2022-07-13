import { Daylight, Precipitation } from "../interfaces/ForecastInterfaces";
import CSS from 'csstype'

const random = (): string => (Math.random() + 1).toString(36).substring(7)

interface PropsData3Hrs {
    clouds: number,
    precipitation: Precipitation,
    daylight: Daylight
}


export default function Column3Hrs({ clouds, precipitation, daylight }: PropsData3Hrs) {

    const styleClouds: CSS.Properties = {
        height: `${clouds}px`
    }
    const styleDaylight: CSS.Properties = {
        position: `absolute`,
        bottom: 0,
        height: `50px`,
        opacity: 0.5
    }
 

    return ( 
        <li key={random()} className="forecast-three-hourly-column">
            <div className="clouds" style={styleClouds}></div>
            <div style={styleDaylight}></div>
        </li>
    )
}
