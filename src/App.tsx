import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Forecast from './components/Forecast';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Forecast />
      <Footer />
    </div>
  )
}
