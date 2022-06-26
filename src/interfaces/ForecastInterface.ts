
export interface ForecastData {
    "code": number,
    "location": string,
    "forecastDays": ForecastDay[]
}

    export interface ForecastDay {
        "dayName": 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun',
        "tempMax": number,
        "forecastThreeHourlyColumns": ForecastThreeHourlyColumn[]
    }

        export interface ForecastThreeHourlyColumn {
            "daylight": 'yes' | 'partly' | 'no',
            "precipitation": 'dry' | 'light rain' | 'rain' | 'heavy rain' | 'light showers' | 'showers' | 'heavy showers' | 'sleet' | 'snow' | 'snow showers' | 'thunderstorm',
            "clouds": number
        }

        export interface ForecastThreeHourlyColumnsProps {
            forecastThreeHourlyColumns: ForecastThreeHourlyColumn[],    
        }



