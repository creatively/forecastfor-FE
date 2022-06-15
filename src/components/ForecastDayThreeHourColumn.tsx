export default function ForecastDayThreeHourColumn() {

    function generateKey(): string {
        return Math.random().toString(36).substring(2, 9);
    }

    return (
        <>
            
            <li className="three-hours-column" key={generateKey()}>
                <div className="cloud"></div>
                <div className="opacity-daylight"></div>
            </li>
            <li className="three-hours-column">
                <div className="cloud"></div>
                <div className="opacity-partly-light"></div>
            </li>
            <li className="three-hours-column">
                <div className="cloud"></div>
                <div className="opacity-night"></div>
            </li>
            <li className="three-hours-column"></li>
            <li className="three-hours-column"></li>
            <li className="three-hours-column"></li>
            <li className="three-hours-column"></li>
            <li className="three-hours-column"></li>
            
        </>
    )
}