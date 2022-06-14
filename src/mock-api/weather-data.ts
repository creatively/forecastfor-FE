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
    "forecasts3hrs": [
        {
            "daylight": true,
            "precipitation": null,
            "clouds": 85
            },{
            "daylight": true,
            "precipitation": "light rain",
            "clouds": 65
            },{
            "daylight": true,
            "precipitation": "rain",
            "clouds": 40
            },{
            "daylight": false,
            "precipitation": 'heavy rain',
            "clouds": 10
        },{
            "daylight": false,
            "precipitation": 'light showers',
            "clouds": 10
            },{
            "daylight": false,
            "precipitation": 'showers',
            "clouds": 0
            },{
            "daylight": true,
            "precipitation": 'heavy showers',
            "clouds": 0
            },{
            "daylight": true,
            "precipitation": null,
            "clouds": 70
            },{
            "daylight": true,
            "precipitation": null,
            "clouds": 85
            },{
            "daylight": true,
            "precipitation": "sleet",
            "clouds": 65
            },{
            "daylight": true,
            "precipitation": "light snow",
            "clouds": 40
            },{
            "daylight": false,
            "precipitation": "snow",
            "clouds": 10
        },{
            "daylight": false,
            "precipitation": "heavy snow",
            "clouds": 10
            },{
            "daylight": false,
            "precipitation": null,
            "clouds": 0
            },{
            "daylight": true,
            "precipitation": null,
            "clouds": 0
            },{
            "daylight": true,
            "precipitation": null,
            "clouds": 70
            },{
            "daylight": true,
            "precipitation": "thunderstorm",
            "clouds": 80
            },{
            "daylight": true,
            "precipitation": null,
            "clouds": 85
            },{
            "daylight": true,
            "precipitation": null,
            "clouds": 65
            },{
            "daylight": true,
            "precipitation": null,
            "clouds": 40
            },{
            "daylight": false,
            "precipitation": null,
            "clouds": 10
        },{
            "daylight": false,
            "precipitation": null,
            "clouds": 10
            },{
            "daylight": false,
            "precipitation": null,
            "clouds": 0
            },{
            "daylight": true,
            "precipitation": null,
            "clouds": 0
            },{
            "daylight": true,
            "precipitation": null,
            "clouds": 70
            },{
            "daylight": true,
            "precipitation": null,
            "clouds": 85
            },{
            "daylight": true,
            "precipitation": null,
            "clouds": 65
            },{
            "daylight": true,
            "precipitation": null,
            "clouds": 40
            },{
            "daylight": false,
            "precipitation": null,
            "clouds": 10
        },{
            "daylight": false,
            "precipitation": null,
            "clouds": 10
            },{
            "daylight": false,
            "precipitation": null,
            "clouds": 0
            },{
            "daylight": true,
            "precipitation": null,
            "clouds": 0
            },{
            "daylight": true,
            "precipitation": null,
            "clouds": 70
            },{
            "daylight": true,
            "precipitation": null,
            "clouds": 85
            },{
            "daylight": true,
            "precipitation": null,
            "clouds": 65
            },{
            "daylight": true,
            "precipitation": null,
            "clouds": 40
            },{
            "daylight": false,
            "precipitation": null,
            "clouds": 10
        },{
            "daylight": false,
            "precipitation": null,
            "clouds": 10
            },{
            "daylight": false,
            "precipitation": null,
            "clouds": 0
            },{
            "daylight": true,
            "precipitation": null,
            "clouds": 0
            },{
            "daylight": true,
            "precipitation": null,
            "clouds": 70
            },{
            "daylight": true,
            "precipitation": null,
            "clouds": 80
        }
    ]
    }
