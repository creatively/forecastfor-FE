import { useEffectOnce } from '../custom-hooks/useEffectOnce';
import useStore from '../store';
import ForecastDays from './ForecastDays';
import './css/forecast.css';

const c = (txt: any) => console.log(txt)


export default function Forecast() {
    
    // const store = useStore()
     
    useEffectOnce(() => {
        // onload code

        // "store" currently populated in store.js
        // prob best move it in here once it becomes a fetch call
        // instead of hardcoded.

        //maybe custom-hook ?? const useStoredFetchedData = (url, store,  sliceName) => {        // ?? 
        // ../custom-hooks/useForecastDataAPI ??
    });

    return (
        <>
            <h1>Forecast</h1>
            <ForecastDays />
        </>
    )
}
