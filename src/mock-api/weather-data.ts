/* 
This is a mock of json from the weather api, after it's been 'processed' into more relevant format
"conditions" - defined at https://openweathermap.org/weather-conditions
*/

import WeatherJsonInterface from '../interfaces/WeatherJsonInterface';

export const weatherData: WeatherJsonInterface = {
    "code": 200,
    "location": "London",
    "forecastDay": [
        {
        "dayName": "Mon",
        "tempMax": "20"
        },{
        "dayName": "Tue",
        "tempMax": "21"
        },{
        "dayName": "Wed",
        "tempMax": "24"
        },{
        "dayName": "Thu",
        "tempMax": "24"
        },{
        "dayName": "Fri",
        "tempMax": "19"
        }
    ],
    "forecastDayThreeHourColumns": [
        {
            "daylight": "yes",
            "precipitation": "dry",
            "clouds": 85
            },{
            "daylight": "yes",
            "precipitation": "light rain",
            "clouds": 65
            },{
            "daylight": 'partly',
            "precipitation": "rain",
            "clouds": 40
            },{
            "daylight": "no",
            "precipitation": 'heavy rain',
            "clouds": 10
        },{
            "daylight": "no",
            "precipitation": 'light showers',
            "clouds": 10
            },{
            "daylight": "no",
            "precipitation": 'showers',
            "clouds": 0
            },{
            "daylight": "yes",
            "precipitation": 'heavy showers',
            "clouds": 0
            },{
            "daylight": "yes",
            "precipitation": "dry",
            "clouds": 70
            },{
            "daylight": "yes",
            "precipitation": "dry",
            "clouds": 85
            },{
            "daylight": "yes",
            "precipitation": "sleet",
            "clouds": 65
            },{
            "daylight": "yes",
            "precipitation": "snow",
            "clouds": 40
            },{
            "daylight": "no",
            "precipitation": "snow showers",
            "clouds": 10
        },{
            "daylight": "no",
            "precipitation": "snow showers",
            "clouds": 10
            },{
            "daylight": "no",
            "precipitation": "dry",
            "clouds": 0
            },{
            "daylight": "yes",
            "precipitation": "dry",
            "clouds": 0
            },{
            "daylight": "yes",
            "precipitation": "dry",
            "clouds": 70
            },{
            "daylight": "yes",
            "precipitation": "thunderstorm",
            "clouds": 80
            },{
            "daylight": "yes",
            "precipitation": "thunderstorm",
            "clouds": 85
            },{
            "daylight": "yes",
            "precipitation": "dry",
            "clouds": 65
            },{
            "daylight": "yes",
            "precipitation": "dry",
            "clouds": 40
            },{
            "daylight": "no",
            "precipitation": "dry",
            "clouds": 10
        },{
            "daylight": "no",
            "precipitation": "dry",
            "clouds": 10
            },{
            "daylight": "no",
            "precipitation": "dry",
            "clouds": 0
            },{
            "daylight": "yes",
            "precipitation": "dry",
            "clouds": 0
            },{
            "daylight": "yes",
            "precipitation": "dry",
            "clouds": 70
            },{
            "daylight": "yes",
            "precipitation": "dry",
            "clouds": 85
            },{
            "daylight": "yes",
            "precipitation": "dry",
            "clouds": 65
            },{
            "daylight": "yes",
            "precipitation": "dry",
            "clouds": 40
            },{
            "daylight": "no",
            "precipitation": "dry",
            "clouds": 10
        },{
            "daylight": "no",
            "precipitation": "dry",
            "clouds": 10
            },{
            "daylight": "no",
            "precipitation": "dry",
            "clouds": 0
            },{
            "daylight": "yes",
            "precipitation": "dry",
            "clouds": 0
            },{
            "daylight": "yes",
            "precipitation": "dry",
            "clouds": 70
            },{
            "daylight": "yes",
            "precipitation": "dry",
            "clouds": 85
            },{
            "daylight": "yes",
            "precipitation": "dry",
            "clouds": 65
            },{
            "daylight": "yes",
            "precipitation": "dry",
            "clouds": 40
            },{
            "daylight": "no",
            "precipitation": "dry",
            "clouds": 10
        },{
            "daylight": "no",
            "precipitation": "dry",
            "clouds": 10
            },{
            "daylight": "no",
            "precipitation": "dry",
            "clouds": 0
            },{
            "daylight": "yes",
            "precipitation": "dry",
            "clouds": 0
            },{
            "daylight": "yes",
            "precipitation": "dry",
            "clouds": 70
            },{
            "daylight": "yes",
            "precipitation": "dry",
            "clouds": 80
        }
    ]
    }
