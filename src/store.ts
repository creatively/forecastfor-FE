import create from "zustand";
//import { WeatherData, WeatherJsonInterface }  from './interfaces/WeatherJsonInterface'


/*
interface WeatherJsonInterface {
    "code": number,
    "location": string,
    "forecastDay": {
        "dayName": 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun',
        "tempMax": number
    }[],
    "forecastDayThreeHourColumns": {
        "daylight": 'yes' | 'no' | 'partly',
        "precipitation": 'dry' | 'light rain' | 'rain' | 'heavy rain' | 'light showers' | 'showers' | 'heavy showers' | 'sleet' | 'snow' | 'snow showers' | 'thunderstorm',
        "clouds": number
    }[]
}

const initialValues: WeatherJsonInterface = {
    "code": 0,
    "location": '',
    "forecastDay": [{
        "dayName": "Mon",
        "tempMax": 0
    }],
    "forecastDayThreeHourColumns": [{
        "daylight": 'yes',
        "precipitation": 'dry',
        "clouds": 0
    }]
}
*/

interface Temp {
    myString: string;
    myFunction: () => void;
}

const initialValues = {
    myString: 'this is myString',
    myFunction: () => {
        console.log('myFunction');
    }
}


const useStore = create<Temp>((set) => (
    initialValues
));




export default useStore;

