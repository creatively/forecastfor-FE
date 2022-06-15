export default interface WeatherJsonInterface {
    "code": string,
    "location": string,
    "forecastDay": {
        "dayName": 'Mon'|'Tue'|'Wed'|'Thu'|'Fri'|'Sat'|'Sun',
        "tempMax": string
    }[],
    "forecastDayThreeHourColumns": {
        "daylight": 'yes'|'no'|'partly',
        "precipitation": 'dry'|'light rain'|'rain'|'heavy rain'|'light showers'|'showers'|'heavy showers'|'sleet'|'snow'|'snow showers'|'thunderstorm',
        "clouds": number
    }[]
}
