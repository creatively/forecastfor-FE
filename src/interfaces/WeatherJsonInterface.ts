export default interface WeatherJsonInterface {
    "code": string,
    "location": string,
    "forecastDay": {
        "dayName": 'Mon'|'Tue'|'Wed'|'Thu'|'Fri'|'Sat'|'Sun',
        "tempMax": string
    }[],
    "forecasts3hrs": {
        "daylight": boolean,
        "precipitation": null|'light rain'|'rain'|'heavy rain'|'light showers'|'showers'|'heavy showers'|'sleet'|'light snow'|'snow'|'heavy snow'|'thunderstorm',
        "clouds": number
    }[]
}
