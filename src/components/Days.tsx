import { useState } from 'react'
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DataDay, Data3Hrs } from "../interfaces/ForecastInterfaces";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ColumnDay from "./ColumnDay";
import Column3Hrs from "./Column3Hrs";
import { useEffectOnce } from 'react-use';

const c = (txt: any) => console.log(txt)

const random = (): string => (Math.random() + 1).toString(36).substring(7)

interface Props {
    data: DataDay[],
}

export default function Days({ data }: Props) {

    return (
        <>

        <ul className="forecast-days" >
            {data.map((day: DataDay) => (

                <li key={random()} className="forecast-day">
                    <div>
                        <span className="day-name">{day.dayName}</span>
                        <span className="temp-max">{day.tempMax}</span>

                        <ul className="forecast-three-hourly-columns">
                            { day.forecastThreeHourlyColumns.map((column: Data3Hrs) => (
                                <Column3Hrs clouds={column.clouds} 
                                            precipitation={column.precipitation}
                                            daylight={column.daylight}
                                />  
                            ))}                   
                        </ul>
                        <div className="daylight"></div>
                    </div>
                </li>
 
            ))}
        </ul>
        </>
    )
}
