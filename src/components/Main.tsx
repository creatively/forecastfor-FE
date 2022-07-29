import { useState } from 'react'
import SearchBoxCustom from './SearchBoxCustom';
import Forecast from './Forecast';

interface ICityDetails {
    label: string,
    lat: string,
    lon: string,
    flag: string,
    regionCode: string
}

interface IForecastProps {
    cityDetailsProp: (cityDetails: ICityDetails | undefined) => void
}


export default function Main() {
    const [ cityDetails, setCityDetails ] = useState<ICityDetails>()

    function onSearchBoxUpdate(chosenCityDetails: ICityDetails) {
        setCityDetails(chosenCityDetails)
    }

    return (
        <div className="forecast-container">
            <SearchBoxCustom onSearchBoxUpdate={onSearchBoxUpdate} />
            { cityDetails ? <Forecast cityDetails={cityDetails}/> : `` }
        </div>
    )
}