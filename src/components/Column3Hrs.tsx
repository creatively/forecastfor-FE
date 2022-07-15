import { Daylight, Precipitation } from "../interfaces/ForecastInterfaces";
import CSS from 'csstype'

const random = (): string => (Math.random() + 1).toString(36).substring(7)

interface PropsData3Hrs {
    clouds: number,
    precipitation: Precipitation,
    daylight: Daylight
}


export default function Column3Hrs({ clouds, precipitation, daylight }: PropsData3Hrs) {

    const styleSun: CSS.Properties = {
        height: `${100-clouds}px`
    }
    const styleClouds: CSS.Properties = {
        height: `${clouds}px`
    }
    const classNameWithPrecipitation = `forecast-three-hourly-column ${precipitation}`
    const styleDaylight: CSS.Properties = {
        position: `absolute`,
        bottom: 0,
        height: `50px`,
        opacity: 0.5
    }


    return ( 
        <li key={random()} className={classNameWithPrecipitation}>
            <div className="clouds" style={styleClouds}></div>
            <div className="sun" style={styleSun}></div>
            <div style={styleDaylight}></div>
        </li>
    )
}
