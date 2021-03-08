import React, { useState }  from 'react';
import Context from '../Context';

import Header from './Header';
import Tagline from './Tagline'
import Content from './Content';
import WeatherSearch from './WeatherSearch';
import WeatherData from './WeatherData';
import Error from './Error';
import DateTime from './DateTime';
import Footer from './Footer';


const Main = () => {

  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState();

  const api_call = (e) => {
    e.preventDefault();
    const location = e.target.elements.location.value;
    if (!location) return setError('Please enter the name of the city.'), setWeather (null)
    const API_KEY = "4584c876de6f23d5c85ffae16448c5bf";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
    fetch(url)
    .then(result => result.json())
    .then(data => {
      setWeather(data.main);
      setCity(data.name);
      setError(null)
    })
  }

  weather && console.log(weather);

  return (
    <div className="main">
       <Header />
       <Content>
       <DateTime />
       <Tagline />
         <Context.Provider value={{ api_call, weather, city }}>
          <WeatherSearch />
          { weather && <WeatherData />}
          { error && <Error error={error} /> }
         </Context.Provider>
         <Footer />
       </Content>
    </div>
  );
}

export default Main;