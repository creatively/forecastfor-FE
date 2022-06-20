import ForecastDayThreeHourColumn from './ForecastDayThreeHourColumn';
import { createGlobalState } from 'react-use';

export default function ForecastDay_ThreeHourColumns() {

    function generateKey(): string {
        return Math.random().toString(36).substring(2, 9);
    }

    //const [ forecast, setForecast ] = useGlobalValue();


    return (
        //{ forecast?.forecastDay?.map((day: any) => (day.tempmax )) }

        <ul className="three-hour-columns">

            <ForecastDayThreeHourColumn />
            
        </ul>
    )
}