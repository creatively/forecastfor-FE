export interface ForecastThreeHourly {
    "daylight": 'yes' | 'partly' | 'no',
    "precipitation": 'dry' | 'light rain' | 'rain' | 'heavy rain' | 'light showers' | 'showers' | 'heavy showers' | 'sleet' | 'snow' | 'snow showers' | 'thunderstorm',
    "clouds": number
}

export interface ForecastDay {
    "dayName": 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun',
    "tempMax": number,
    "three-hourly": ForecastThreeHourly[]
}

export interface ForecastData {
    "code": number,
    "location": string,
    "forecastDays": ForecastDay[]
}