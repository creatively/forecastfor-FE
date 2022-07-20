import { useEffect, useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'


interface ICityDetails {
    label: string,
    lat: string,
    lon: string
}

interface ISearchBoxProps {
    onSearchBoxUpdate: (chosenCityDetails: ICityDetails) => void
}


export default function SearchBox({ onSearchBoxUpdate }: ISearchBoxProps) {

    const [ cityDetails, setCityDetails ] = useState<ICityDetails>()

    // This was added as it wasn't possible to directly pass 
    //  onChange={setCityDetails}  from the elememt
    // Even though it passes an object matching  ICityDetails  structure
    // it won't allow it, so the  :ICityDetails  object is manually built here first
    // before being passed into  setCityDetails  and beyond
    function setCityDetailsProxy(details: ICityDetails | any) {    // <--- 'any' used here
        const cityDetailsObject: ICityDetails = {
            label: details.label,
            lat: details.lat,
            lon: details.lon
        }
        setCityDetails(cityDetailsObject)
    }
    
    // called when a city is selected from the dropdown
    useEffect(() => {
        cityDetails && cityDetails.label && onSearchBoxUpdate(cityDetails)
    }, [ cityDetails, onSearchBoxUpdate ])  //  <--- this double item seems to be needed, but results in 2 calls for 1 change


    // dynamically gets and shows list of potential cities
    const loadOptions = (inputText: string): any => {

        return fetch(
            `http://geodb-free-service.wirefreethought.com/v1/geo/cities?minPopulation=40000&namePrefix=${inputText}&hateoasMode=false&limit=8&offset=0&sort=name`
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
                value={cityDetails}
                loadOptions={loadOptions}
                debounceTimeout={300}
                placeholder="enter a city"
                onChange={setCityDetailsProxy}
            />
        </div>
    )
}