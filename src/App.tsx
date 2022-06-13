import './App.css';
import Header from './components/header';
import Search from './components/search';
import Weather from './components/weather';
import Footer from './components/footer';


function App() {

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
