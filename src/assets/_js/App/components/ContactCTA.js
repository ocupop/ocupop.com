import React, { Component } from 'react'

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