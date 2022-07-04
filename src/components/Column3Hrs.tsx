import { Data3Hrs } from "../interfaces/ForecastInterfaces";
import CSS from 'csstype'

const random = (): string => (Math.random() + 1).toString(36).substring(7)

export default function Column3Hrs({ ...column3Hrs }: Data3Hrs) {

    const styleClouds: CSS.Properties = {
        height: `${column3Hrs.clouds}px`
    }

    return ( 

        <li key={random()} className="forecast-three-hourly-column">
            <div className="clouds" style={styleClouds}>{ column3Hrs.clouds }</div>
            <div className="precipitation">{ column3Hrs.precipitation }</div>
            <div className="daylight">{ column3Hrs.daylight }</div>
        </li>

    )
}
