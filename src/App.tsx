import React from 'react';
import { useEffectOnce } from './custom-hooks/useEffectOnce';

import './App.css';

// import the components we need
import Header from './components/header';
import Search from './components/search';
import Weather from './components/weather';
import Footer from './components/footer';


function App() {
  // use third-party custom hook to prevent new double-render added in React 18
  useEffectOnce(() => {
    console.log('--useEffectOnce called')
    return (() => getWeather())
  });

  // get the weather data from a stubbed API
  const getWeather = async () => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=b6907d289e10d714a6e88b30761fae22');
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      Hi from React's App.tsx
      <Header />
      <Search />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
