import React from 'react'
import './Awards.css'

const Awards = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-lg-6 col-sm-12 p-5">
          <img src="media/largestBroker.svg" alt="broker" />
        </div>
        <div className="col-lg-6 col-sm-12 mt-3 p-5">
          <h2>Largest stock broker in India</h2>
          <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
          <ul className='row mt-5 mb-5'>
            <div className="col-6">
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </div>
            <div className="col-6">
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt. Securities</li>
            </div>
          </ul>
          <img src="media/pressLogos.png" alt="press" style={{width: "90%"}}/>
        </div>
      </div>
    </div>
  )
}

export default Awards