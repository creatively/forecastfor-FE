import { ReactHTMLElement, useEffect, useState } from 'react'
import './css/search-box-custom.css'
import randomKey from './RandomKey'

interface ICityDetails {
    label: string,
    lat: string,
    lon: string
}

interface ISearchBoxProps {
    onSearchBoxUpdate: (chosenCityDetails: ICityDetails) => void
}


export default function SearchBoxCustom({ onSearchBoxUpdate }: ISearchBoxProps) {

    const [ inputLetters, setInputLetters ] = useState<string>(``)
    const [ citiesList, setCitiesList ] = useState<ICityDetails[]>([])
    const [ chosenCity, setChosenCity ] = useState<ICityDetails>()
    const [ optionsVisible, setOptionsVisible ] = useState<boolean>(false)
    const [ errorMessage, setErrorMessage ] = useState<string>(``)
    const [ errorLog, setErrorLog ] = useState<string>(``)


    // get list of cities
    useEffect(() => {
        if (inputLetters.length > 3) {
            (async function(): Promise<ICityDetails[]> {
                try {
                    const response = await fetch(
                        `http://geodb-free-service.wirefreethought.com/v1/geo/cities?minPopulation=40000&namePrefix=${inputLetters}&hateoasMode=false&limit=8&offset=0&sort=name`
                    )
                    const data = await response.json();
                    return data.data.map((aSuggestedCityObj: any) => {
                        return {
                            label: aSuggestedCityObj.name,
                            lat: aSuggestedCityObj.latitude,
                            lon: aSuggestedCityObj.longitude
                        }
                    })
                } catch(error: any) {
                    console.log(error)
                    return []
                }
            })()
            .then((resultsArray) => {
                setOptionsVisible(true)
                setCitiesList(resultsArray)
            })
        }
    }, [ inputLetters ])

    function updateInputLetters(event: React.ChangeEvent<HTMLInputElement>): void {        
        setInputLetters(event.target.value)
        if (inputLetters.length < 5) {
            setOptionsVisible(false)
        }
    }

    function handleSetChosenCity(event: any): void {
        const liElement: HTMLLIElement = event.target
        if (liElement.textContent && 
            liElement.getAttribute('data-lat') && 
            liElement.getAttribute('data-lon')) 
        {
            const chosenCity: ICityDetails = {
                label: liElement.textContent,
                lat: liElement.getAttribute('data-lat') || ``,
                lon: liElement.getAttribute('data-lon') || ``
            }
            setChosenCity(chosenCity) 
            setInputLetters(chosenCity.label)  //    <---- NB. This is triggering an extra call to the Api for the 1 chosen city, which in turn re-shows the option(s) list
            setOptionsVisible(false)
        } else {
            setErrorMessage(`your selected option isn't available`)
            setErrorLog(`Error - when clicking a city option '${liElement?.textContent}' in the SearchBox, the 'data-lat' and/or 'data-lon' attributes were unavailable on the <li>`)
        }
    }


    return (
        <div className="search-box-custom">
            <input className="inputbox" value={inputLetters} onChange={updateInputLetters} />
            <ul className={ optionsVisible && (chosenCity?.label !== inputLetters) ? "city-options--visible" : "city-options--hidden" }>
                {
                    citiesList.map((city) => (
                        <li className="city-option" key={randomKey()} data-lat={11} data-lon={12} onClick={handleSetChosenCity}>{city.label}</li>
                    ))
                }
            </ul>
            <p className="error-message">{errorMessage}</p>
        </div>
    )
}