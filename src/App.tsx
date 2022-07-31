import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default function App() {

  return (
    <div className="App">
      <Header />
      <h1>Forecast for</h1>
      <Main />
      <Footer />
    </div>
  )
}
