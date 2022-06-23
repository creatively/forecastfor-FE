import create from "zustand";
//import { WeatherData, WeatherJsonInterface }  from './interfaces/WeatherJsonInterface'

// https://raw.githubusercontent.com/creatively/forecastfor-FE/main/src/mock-api/weather-data.json

interface WeatherJsonInterface {
    "code": number,
    "location": string,
    "forecastDays": {
        "dayName": 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun',
        "tempMax": number
    }[],
    "forecastDayThreeHourColumns": {
        "daylight": 'yes' | 'no' | 'partly',
        "precipitation": 'dry' | 'light rain' | 'rain' | 'heavy rain' | 'light showers' | 'showers' | 'heavy showers' | 'sleet' | 'snow' | 'snow showers' | 'thunderstorm',
        "clouds": number
    }[]
}


const useStore = create<WeatherJsonInterface>((set) => (
    {
        "code": 201,
        "location": 'London',
        "forecastDays": [
            {
                "dayName": 'Wed',
                "tempMax": 27
            },{
                "dayName": 'Thu',
                "tempMax": 28
            },{
                "dayName": 'Fri',
                "tempMax": 22
            },{
                "dayName": 'Sat',
                "tempMax": 22
            },{
                "dayName": 'Sun',
                "tempMax": 24
            }
        ],
        "forecastDayThreeHourColumns": [
            {
                "daylight": 'yes',
                "precipitation": 'dry',
                "clouds": 15
            },{
                "daylight": 'yes',
                "precipitation": 'rain',
                "clouds": 25
            },{
                "daylight": 'yes',
                "precipitation": 'rain',
                "clouds": 55
            },{
                "daylight": 'yes',
                "precipitation": 'dry',
                "clouds": 45
            },{
                "daylight": 'yes',
                "precipitation": 'dry',
                "clouds": 0
            },{
                "daylight": 'yes',
                "precipitation": 'dry',
                "clouds": 0
            },{
                "daylight": 'yes',
                "precipitation": 'dry',
                "clouds": 20
            },{
                "daylight": 'yes',
                "precipitation": 'dry',
                "clouds": 10
            }
        ]
    }
));


export default useStore;

