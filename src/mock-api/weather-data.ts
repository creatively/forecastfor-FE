/* 
This is a mock of json from the weather api, after it's been 'processed' into more relevant format
"conditions" - defined at https://openweathermap.org/weather-conditions
*/

import WeatherJsonInterface from '../interfaces/WeatherJsonInterface';

export const weatherData: WeatherJsonInterface = {
    "code": "200",
    "location": "London",
    "forecastDay": [
        {
        "day": 0,
        "dayDesc": "Monday",
        "tempMax": "20"
        },{
        "day": 1,
        "dayDesc": "Tuesday",
        "tempMax": "21"
        },{
        "day": 2,
        "dayDesc": "Wednesday",
        "tempMax": "24"
        },{
        "day": 3,
        "dayDesc": "Thursday",
        "tempMax": "24"
        },{
        "day": 4,
        "dayDesc": "Friday",
        "tempMax": "19"
        }
    ],
    "forecasts3hrs": [
        {
        "time": 0,
        "timeDesc": "2022-03-15 12:00:00",
        "conditions": "Clouds",
        "clouds": 85
        },{
        "time": 3,
        "timeDesc": "2022-03-15 15:00:00",
        "conditions": "Clouds",
        "clouds": 65
        },{
        "time": 6,
        "timeDesc": "2022-03-15 18:00:00",
        "conditions": "Clouds",
        "clouds": 40
        },{
        "time": 9,
        "timeDesc": "2022-03-15 21:00:00",
        "conditions": "Clouds",
        "clouds": 10
        },{
        "time": 12,
        "timeDesc": "2022-03-16 00:00:00",
        "conditions": "Clouds",
        "clouds": 10
        },{
        "time": 15,
        "timeDesc": "2022-03-16 03:00:00",
        "conditions": "Clouds",
        "clouds": 0
        },{
        "time": 18,
        "timeDesc": "2022-03-16 06:00:00",
        "conditions": "Clouds",
        "clouds": 0
        },{
        "time": 21,
        "timeDesc": "2022-03-16 09:00:00",
        "conditions": "Clouds",
        "clouds": 70
        },{
        "time": 24,
        "timeDesc": "2022-03-16 12:00:00",
        "conditions": "Clouds",
        "clouds": 80
        }
    ]
    }
