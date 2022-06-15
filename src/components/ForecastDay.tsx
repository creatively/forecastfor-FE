import ForecastDayThreeHourColumns from './ForecastDayThreeHourColumns';

export default function ForecastDay({ day }: { day: any }) {   
    
    function generateKey(): string {
        return Math.random().toString(36).substring(2, 9);
    }

    return (
        <li className="forecast-day" key={generateKey()}>
            <span className="forecast-day__dayname">{day.dayName}</span>
            <span className="forecast-day__tempmax">{day.tempMax}</span>
            <ForecastDayThreeHourColumns />
        </li>
    )
}
