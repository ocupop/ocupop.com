import React, { Component } from 'react'

// Honolulu: 21.3282953,-157.9394986
// https://api.darksky.net/forecast/051b951024f0718a0a61ef82c4900aa7/21.3282953,-157.9394986

// Whistler: 50.1042835,-123.1419389
// https://api.darksky.net/forecast/051b951024f0718a0a61ef82c4900aa7/50.1042835,-123.1419389

// Milwaukee
// https://api.darksky.net/forecast/051b951024f0718a0a61ef82c4900aa7/43.0579954,-88.0376409

class ContactCTA extends Component {
  render() {
    function getWeatherDataHonolulu() {
      //get darksky api data
      $.ajax({
        url:
          'https://api.darksky.net/forecast/051b951024f0718a0a61ef82c4900aa7/21.3282953,-157.9394986',
        dataType: 'jsonp',
        success: function(weatherData) {
          //icon information (explained after)
          var icon = weatherData.currently.icon
          //weather description
          var description = weatherData.currently.summary
          //change background image
          //temperature
          var temperature = weatherData.currently.temperature
          $('#weather-temperature-honolulu').text(temperature)
          $('#weather-icon-honolulu').addClass(weatherData.currently.icon)
        },
      })
    }

    getWeatherDataHonolulu()

    function getWeatherDataWhistler() {
      //get darksky api data
      $.ajax({
        url:
          'https://api.darksky.net/forecast/051b951024f0718a0a61ef82c4900aa7/50.1042835,-123.1419389',
        dataType: 'jsonp',
        success: function(weatherData) {
          //icon information (explained after)
          var icon = weatherData.currently.icon
          //weather description
          var description = weatherData.currently.summary
          //change background image
          //temperature
          var temperature = weatherData.currently.temperature
          $('#weather-temperature-whistler').text(temperature)
          $('#weather-icon-whistler').addClass(weatherData.currently.icon)
        },
      })
    }

    getWeatherDataWhistler()

    function getWeatherDataMilwaukee() {
      //get darksky api data
      $.ajax({
        url:
          'https://api.darksky.net/forecast/051b951024f0718a0a61ef82c4900aa7/43.0579954,-88.0376409',
        dataType: 'jsonp',
        success: function(weatherData) {
          //icon information (explained after)
          var icon = weatherData.currently.icon
          //weather description
          var description = weatherData.currently.summary
          //change background image
          //temperature
          var temperature = weatherData.currently.temperature
          $('#weather-temperature-milwaukee').text(temperature)
          $('#weather-icon-milwaukee').addClass(weatherData.currently.icon)
        },
      })
    }

    getWeatherDataMilwaukee()

    return (
      <div>
        <div className="content">
          <a href="/contact">Time to say hi!</a>
        </div>
        <div className="content">
          <div className="d-flex align-items-center justify-content-between">
            <p>Honolulu</p>
            <div id="weather-icon-honolulu" className="weather-icon" />
          </div>
        </div>
        <div className="content">
          <div className="d-flex align-items-center justify-content-between">
            <p>Whistler</p>
            <div id="weather-icon-whistler" className="weather-icon" />
          </div>
        </div>
        <div className="content">
          <div className="d-flex align-items-center justify-content-between">
            <p>Milwaukee</p>
            <div id="weather-icon-milwaukee" className="weather-icon" />
          </div>
        </div>
      </div>
    )
  }
}

export default ContactCTA
