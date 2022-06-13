export default interface WeatherJsonInterface {
    "code": string,
    "location": string,
    "forecastDay": {
        "day": number,
        "dayDesc": string,
        "tempMax": string
    }[],
    "forecasts3hrs": {
        "time": number,
        "timeDesc": string,
        "conditions": string,
        "clouds": number
    }[]
}
