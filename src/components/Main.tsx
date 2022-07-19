import { useState } from 'react'
import SearchBox from './SearchBox';
import Forecast from './Forecast';


export default function Main() {
    const [ city, setCity ] = useState<string>(``)

    function onSearchBoxUpdate(latestText: string) {
        setCity(latestText)
    }

    return (
        <>
            <SearchBox onSearchBoxUpdate={onSearchBoxUpdate} />
            <Forecast city={city}/>
        </>
    )
}