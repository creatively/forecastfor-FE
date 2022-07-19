import { useEffect, useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

interface ISearchBoxProps {
    onSearchBoxUpdate: (chosenCity: string) => void
}


export default function SearchBox({ onSearchBoxUpdate }: ISearchBoxProps) {

    const [ cityObj, setCityObj ] = useState<any>(null)

    // called when a city is selected from the dropdown
    useEffect(() => {
        cityObj && cityObj.label && onSearchBoxUpdate(cityObj.label)
    }, [ cityObj, onSearchBoxUpdate ])

    const loadOptions = (inputText: string): any => {
        console.log(`1 ${inputText}`)

        return fetch(
            `http://geodb-free-service.wirefreethought.com/v1/geo/cities?minPopulation=40000&namePrefix=${inputText}&hateoasMode=false&limit=5&offset=0&sort=name`
        )
        .then((response) => response.json())
        .then((response) => {
            return { 
                options: response.data.map((aSuggestedCityObj: any) => {
                    return {
                        label: aSuggestedCityObj.name,
                        lat: aSuggestedCityObj.latitude,
                        lon: aSuggestedCityObj.longitude
                    }
                }
            )}
        })
        .catch((error: any)=> {
            console.log(error)
            return { options: [] }
        })
    }


    return (
        <div className="search">
            <AsyncPaginate
                value={cityObj}
                loadOptions={loadOptions}
                debounceTimeout={300}
                placeholder="enter a city"
                onChange={setCityObj}
            />
        </div>
    )   
}