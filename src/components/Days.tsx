import { DataDay, Data3Hrs } from "../interfaces/ForecastInterfaces";
import ColumnDay from "./ColumnDay";
import Column3Hrs from "./Column3Hrs";

const random = (): string => (Math.random() + 1).toString(36).substring(7)

interface Props {
    data: DataDay[]
}

export default function Days({ data }: Props) {

// issue occurs when first mapping an array received as a prop
    // the array no longer has the array methods it had
    // items can still be obtained using array[2],
    // but unable to '.map' or '.length' etc..



    return (

        <ul className="forecast-days" >
            {data.map((day: DataDay) => (
  
                <li key={random()} className="forecast-day">
                    <div>
                        <span className="day-name">{day.dayName}</span>
                        <span className="temp-max">{day.tempMax}</span>

                        <ul className="forecast-three-hourly-columns">
                            { day.forecastThreeHourlyColumns?.map(({ clouds, precipitation, daylight }: Data3Hrs) => (

                                <li key={random()} className="forecast-three-hourly-column">
                                    <div className="clouds">{ clouds }</div>
                                    <div className="precipitation">{ precipitation }</div>
                                    <div className="daylight">{ daylight }</div>
                                </li>

                            )) }
                        </ul>

                    </div>
                </li>
 
            ))}
        </ul>
        
    )
}
