import ForecastDayThreeHourColumns from './ForecastDayThreeHourColumns';
import useStore from '../store';

interface Day {
    "dayName": 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun',
    "tempMax": number
}


const random = (num: number): any => (Math.random() + 1).toString(36).substring(num)

export default function ForecastDays() {

    const store = useStore()

    return (

        <ul className="forecast-days">
            {store.forecastDays.map((forecastDay: Day) => (


            <li key={ random(7) } className="forecast-day">
                <span>{forecastDay.dayName}</span>
                <h3>{forecastDay.tempMax}</h3>
            </li>
            
            ))}
        </ul>
        
    )
}
