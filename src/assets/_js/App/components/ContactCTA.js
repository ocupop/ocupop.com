import React, { Component } from 'react'

// Honolulu: 21.3282953,-157.9394986
// https://api.darksky.net/forecast/051b951024f0718a0a61ef82c4900aa7/21.3282953,-157.9394986

// Whistler: 50.1042835,-123.1419389
// https://api.darksky.net/forecast/051b951024f0718a0a61ef82c4900aa7/50.1042835,-123.1419389

// Milwaukee
// https://api.darksky.net/forecast/051b951024f0718a0a61ef82c4900aa7/43.0579954,-88.0376409

class ContactCTA extends Component {
  render() {
    return (
      <div className="row align-items-center">
        <div className="col-4 col-md-2">
          <div className="content">
            <p>Honolulu</p>
          </div>
        </div>
        <div className="col-4 col-md-2">
          <div className="content">
            <p>Whistler</p>
          </div>
        </div>
        <div className="col-4 col-md-2">
          <div className="content">
            <p>Milwaukee</p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="content">
            <a href="/contact" className="quote">It's time to say hello. <i className="icon-envelope"></i></a>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactCTA;