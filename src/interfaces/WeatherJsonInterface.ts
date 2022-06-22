
export interface WeatherData {
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

export interface WeatherJsonInterface {
    "weatherData": WeatherData,
    "setWeatherData": (weatherData: WeatherJsonInterface) => void
}
