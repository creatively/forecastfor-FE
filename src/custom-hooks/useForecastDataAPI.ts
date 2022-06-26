const url = `https://raw.githubusercontent.com/creatively/forecastfor-FE/main/src/mock-api/weather-data.json`

const useForecastDataAPI = async () => {
    return await fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(response => response.fact)
        .then(fact => { return fact })
        .catch(error => console.log(error));
}

export default useForecastDataAPI 