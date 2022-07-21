import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce';
import './css/search-box-custom.css'
import randomKey from './RandomKey'

interface ICityDetails {
    label: string,
    lat: string,
    lon: string,
    flag: string,
    regionCode: string
}

interface ISearchBoxProps {
    onSearchBoxUpdate: (chosenCityDetails: ICityDetails) => void
}


export default function SearchBoxCustom({ onSearchBoxUpdate }: ISearchBoxProps) {

    const [ inputLetters, setInputLetters ] = useState<string>(``)
    const [ lettersReadyForApiCall ] = useDebounce(inputLetters, 1000)
    const [ citiesList, setCitiesList ] = useState<ICityDetails[]>([])
    const [ chosenCity, setChosenCity ] = useState<ICityDetails>()
    const [ optionsVisible, setOptionsVisible ] = useState<boolean>(false)
    const [ errorMessage, setErrorMessage ] = useState<string>(``)
    const [ errorLog, setErrorLog ] = useState<string>(``)
    const [ showApiCallLoaderImage, setShowApiCallLoaderImage ] = useState<boolean>(false)
    const [ showGreenTick, setShowGreenTick ] = useState<boolean>(false)

    const maxNumberOfOptions = 7
    const imageLoader = 'https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif'
    const imageTick = `https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/240px-Yes_Check_Circle.svg.png`
    const imageDefaultLoader = `https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Note.svg/240px-Note.svg.png`

    // get list of cities from remote api
    useEffect(() => {
        if (lettersReadyForApiCall.length > 3) {
            (async function(): Promise<ICityDetails[]> {
                try {
                    const response = await fetch(
                        `http://geodb-free-service.wirefreethought.com/v1/geo/cities?minPopulation=40000&namePrefix=${lettersReadyForApiCall}&hateoasMode=false&limit=${maxNumberOfOptions}&offset=0&sort=name`
                    )
                    const data = await response.json();
                    return data.data.map((cityOption: any) => {
                        return {
                            label: cityOption.name,
                            lat: cityOption.latitude,
                            lon: cityOption.longitude,
                            flag: `https://countryflagsapi.com/png/${cityOption.countryCode}`,
                            regionCode: cityOption.regionCode
                        }
                    })
                } catch(error: any) {
                    console.log(error)
                    return []
                }
            })()
            .then((resultsArray) => {
                setShowApiCallLoaderImage(false);
                setOptionsVisible(true)
                setCitiesList(resultsArray)
            })
        }
    }, [ lettersReadyForApiCall ])

    // update UI of inputbox accoring to current state
    useEffect(() => {
        if (inputLetters.charAt(0) !== inputLetters.charAt(0).toUpperCase()) {
            setInputLetters((old) => old.charAt(0).toUpperCase())
        }
        if (inputLetters.length > 3 && inputLetters !== chosenCity?.label) {
            setShowApiCallLoaderImage(true);
        }
        if (inputLetters !== chosenCity?.label) {
            setShowGreenTick(false)
        }
        if (chosenCity?.label === inputLetters) {
            setShowGreenTick(true)
        }
    }, [ inputLetters, chosenCity?.label ])


    // DOM event handlers
    function handleInputLettersChange(event: React.ChangeEvent<HTMLInputElement>): void {        
        setInputLetters(event.target.value)
        if (inputLetters.length < 5) {
            setOptionsVisible(false)
        }
    }

    function handleSetChosenCity(event: any): void {
    const liElement: HTMLLIElement = event.target
        const chosenCity: ICityDetails = {
            label: liElement.textContent || ``,
            lat: liElement.getAttribute('data-lat') || ``,
            lon: liElement.getAttribute('data-lon') || ``,
            flag: liElement.querySelector('.flag')?.getAttribute('src') || ``,
            regionCode: liElement.querySelector('.regionCode')?.textContent || ``
        }
        setChosenCity(chosenCity)
        setInputLetters(chosenCity.label)
        setOptionsVisible(false)
    }


    return (
        <div className="search-box-custom">
            <input className="inputbox" value={inputLetters} onChange={handleInputLettersChange} />

            <div className="loader-container">
                {(showApiCallLoaderImage || showGreenTick)
                    ? <img className='loader-image'
                        alt={
                            showApiCallLoaderImage
                                ? `loading city options` :
                            showGreenTick 
                                ? `city selected` : 
                            ``
                        }
                        height="24" width="24" 
                        src={
                            showApiCallLoaderImage
                                ? imageLoader :
                            showGreenTick 
                                ? imageTick : 
                            imageDefaultLoader
                        }/>
                    :   <img className='loader-image' alt='type here' height="24" width="24" src={imageDefaultLoader} />
                }
            </div>

            <ul className={ optionsVisible && (chosenCity?.label !== inputLetters) ? "city-options--visible" : "city-options--hidden" }>
                {
                    citiesList.map((cityOption, index) => (
                        <li data-temp={`${index.toString()}`}
                            className={ 
                                (index === maxNumberOfOptions - 2) ? `city-option--lastbutone` : 
                                (index === maxNumberOfOptions - 1) ? `city-option--lastone` :
                                (index < 5) ? `city-option`: ``
                            }
                            key={randomKey()} 
                            data-lat={cityOption.lat} 
                            data-lon={cityOption.lon} 
                            onClick={handleSetChosenCity}
                        >
                            <img className='flag' alt='flag' src={cityOption.flag} />
                            <span className='label'>{cityOption.label}</span>
                            <span className='regionCode' title='region'>{cityOption.regionCode}</span>
                        </li>
                    ))
                }
            </ul>
            <p className="error-message">{errorMessage}</p>
        </div>
    )
}