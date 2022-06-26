import { ForecastThreeHourlyColumn, ForecastThreeHourlyColumnsProps } from "../interfaces/ForecastInterface";

const random = (): string => (Math.random() + 1).toString(36).substring(7)

export default function ForecastThreeHourlyColumns({ forecastThreeHourlyColumns }: ForecastThreeHourlyColumnsProps) {
   
    return (

        <ul className="forecast-three-hourly-columns">
            {forecastThreeHourlyColumns.map((forecastThreeHourlyColumn: ForecastThreeHourlyColumn) => (

                <li key={random()} className="forecast-three-hourly-column">
                    <div className="clouds">{ forecastThreeHourlyColumn.clouds }</div>
                    <div className="precipitation">{ forecastThreeHourlyColumn.precipitation }</div>
                    <div className="daylight">{ forecastThreeHourlyColumn.daylight }</div>
                </li>

            ))}
        </ul>
    
    )
}