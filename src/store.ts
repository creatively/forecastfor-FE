import create from "zustand";
import { DataDay } from "./interfaces/ForecastInterfaces";
import { dataFor5Days } from "./data"
import axios from 'axios'

// https://raw.githubusercontent.com/creatively/forecastfor-FE/main/src/mock-api/weather-data.json

const useStore = create<any>((set: DataDay[]) => (dataFor5Days));

export default useStore;
