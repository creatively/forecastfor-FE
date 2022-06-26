import { ForecastDay, ForecastThreeHourlyColumn } from "../interfaces/ForecastInterface";
import useStore from '../store';
import ForecastThreeHourlyColumns from "./ForecastThreeHourlyColumns";

const random = (): string => (Math.random() + 1).toString(36).substring(7)

export default function ForecastDays() {

    const store = useStore()

    return (

        <ul className="forecast-days">
            {store.forecastDays.map((forecastDay: ForecastDay) => (

                <li key={random()} className="forecast-day">
                    <div>
                        <span className="day-name">{forecastDay.dayName}</span>
                        <span className="temp-max">{forecastDay.tempMax}</span>
                        <ForecastThreeHourlyColumns forecastThreeHourlyColumns={forecastDay.forecastThreeHourlyColumns}/>
                    </div>
                </li>
 
            ))}
        </ul>
        
    )
}
