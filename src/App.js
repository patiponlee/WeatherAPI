import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form.js';
import Title from './components/title.js'
import Weather from './components/weather.js'
import { Jumbotron ,Grid ,Image } from 'react-bootstrap';

const API_KEY = "b4affba98eb9e8634675f437f411d686"

class App extends Component {
  state={
    lat: undefined,
    lon: undefined,
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements .country.value;
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      console.log(data);

      this.setState({
        lat: data.coord.lat,
        lon: data.coord.lon,
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }else{
      console.log(data);
      this.setState({
        lat: undefined,
        lon: undefined,
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the value"
      });
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Grid>
            <Jumbotron>
              <Image src={logo} className="App-logo" alt="logo" />
              <Title />
            </Jumbotron>
            <Form getWeather={this.getWeather} />
            <Weather
              lat = {this.state.lat}
              lon = {this.state.lon}
              city = {this.state.city}
              country = {this.state.country}
              temperature = {this.state.temperature}
              humidity = {this.state.humidity}
              description = {this.state.description}
              error = {this.state.error}
            />
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
