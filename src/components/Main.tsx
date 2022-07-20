import { useState } from 'react'
import SearchBox from './SearchBox';
import SearchBoxCustom from './SearchBoxCustom';
import Forecast from './Forecast';

interface ICityDetails {
    label: string,
    lat: string,
    lon: string
}

interface IForecastProps {
    cityDetailsProp: (cityDetails: ICityDetails) => void
}


export default function Main() {
    const [ cityDetails, setCityDetails ] = useState<ICityDetails>()

    function onSearchBoxUpdate(chosenCityDetails: ICityDetails) {
        setCityDetails(chosenCityDetails)
        console.log(`>>>> ${chosenCityDetails?.label}`)
    }

    return (
        <>
            <SearchBoxCustom onSearchBoxUpdate={onSearchBoxUpdate} />
            <Forecast cityDetails={cityDetails}/>
        </>
    )
}