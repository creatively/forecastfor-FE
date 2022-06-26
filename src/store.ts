import create from "zustand";
import { ForecastData } from "./interfaces/ForecastInterface";

const useStore = create<ForecastData>((set) => (
    {
        "code": 200,
        "location": "London",
        "forecastDays": [
            {
                "dayName": "Mon",
                "tempMax": 20,
                "forecastThreeHourlyColumns": [
                    {
                        "daylight": "yes",
                        "precipitation": "dry",
                        "clouds": 85
                    },{
                        "daylight": "yes",
                        "precipitation": "light rain",
                        "clouds": 65
                    },{
                        "daylight": "partly",
                        "precipitation": "rain",
                        "clouds": 40
                    },{
                        "daylight": "no",
                        "precipitation": "heavy rain",
                        "clouds": 10
                    },{
                        "daylight": "yes",
                        "precipitation": "snow",
                        "clouds": 40
                    },{
                        "daylight": "no",
                        "precipitation": "snow showers",
                        "clouds": 10
                    },{
                        "daylight": "yes",
                        "precipitation": "heavy showers",
                        "clouds": 0
                    },{
                        "daylight": "yes",
                        "precipitation": "heavy showers",
                        "clouds": 0
                    }
                ]
            },{
                "dayName": "Tue",
                "tempMax": 21,
                "forecastThreeHourlyColumns": [
                    {
                        "daylight": "no",
                        "precipitation": "light showers",
                        "clouds": 10
                    },{
                        "daylight": "no",
                        "precipitation": "showers",
                        "clouds": 0
                    },{
                        "daylight": "yes",
                        "precipitation": "heavy showers",
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
                    }
                ]
            },{
                "dayName": "Wed",
                "tempMax": 24,
                "forecastThreeHourlyColumns": [
                    {
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
                    }
                ]
            },{
                "dayName": "Thu",
                "tempMax": 24,
                "forecastThreeHourlyColumns": [
                    {
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
                    }
                ]
            },{
                "dayName": "Fri",
                "tempMax": 19,
                "forecastThreeHourlyColumns": [
                    {
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
                    }
                ]
            }
        ]
    }
));

export default useStore;

