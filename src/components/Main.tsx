import { useState } from 'react'
import SearchBox from './SearchBox';
import Forecast from './Forecast';


export default function Main() {
    const [ city, setCity ] = useState<string>(``)

    function onSearchBoxUpdate(chosenCity: string) {
        setCity(chosenCity)
        console.log(`>>>> ${city}`)
    }

    return (
        <>
            <SearchBox onSearchBoxUpdate={onSearchBoxUpdate} />
            <Forecast city={city}/>
        </>
    )
}