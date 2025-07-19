import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [inputvalue, setinput] = useState("");
  const [cityValue, setCity] = useState("");
  const [temp, setTemp] = useState();
  const WeatherApiKey = "056c79a219303374a58ca9e12f42e39f"
  //const WeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${WeatherApiKey}&units=metric`

  const getWeather = async () => {
    if(!inputvalue) {
      alert("Please enter a city name")
      return;
    }
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=${WeatherApiKey}&units=metric`)
    let city = response.data.name
    let temp = response.data.main.temp;
    setTemp(temp)
    setCity(city)
  }
  return (
    <>
     <div className="container">
      <input type="text" placeholder='City Name' onChange={(e)=> setinput(e.target.value)} />
      <button className='btn' onClick={getWeather}>Check</button>
      <h1>Weather in {cityValue}</h1>
      <h1>{temp}</h1>
     </div>
    </>
  )
}

export default App
