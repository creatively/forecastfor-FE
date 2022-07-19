import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

interface ISearchBoxProps {
    onSearchBoxUpdate: (latestText: string) => void
}

export default function Search({ onSearchBoxUpdate }: ISearchBoxProps) {

    const [ city, setCity ] = useState<string>('')

    function handleSearchBoxUpdate(e: React.FormEvent<HTMLInputElement>): void {
        setCity(e.currentTarget.value)
    }

    function handleCityChosen() {
        onSearchBoxUpdate(city)
    }

    return (
        <div className="search">
            <input value={city} onChange={handleSearchBoxUpdate} />
            <button onClick={handleCityChosen}>Go</button>
        </div>
    )   
}