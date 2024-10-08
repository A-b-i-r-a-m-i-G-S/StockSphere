import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-lg-6 col-sm-12 p-5">
          <img src="media/education.svg" alt="education" />
        </div>
        <div className="col-lg-6 col-sm-12 mt-3 p-5 mb-5">
          <h2 className='mb-5'>Free and open market education</h2>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href='' style={{textDecoration: "none"}}>Explore Varsity <i class="fa-solid fa-arrow-right"></i></a>
          <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href='' style={{textDecoration: "none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Education