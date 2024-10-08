import React from 'react'
import './Pricing.css'

const Pricing = () => {
  return (
    <div className='container mt-5 p-5'>
      <div className="row">
        <div className="col-4">
          <h2>Unbeatable pricing</h2>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href='' style={{textDecoration: "none"}}>See Pricing <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
            <div className="row text-center">
              <div className="col-6 border p-4">
                  <h2 className='mb-4 fs-1'>₹0</h2>
                  <p>Free equity delivery and direct mutual funds</p>
              </div>
              <div className="col-6 border p-4">
                  <h2 className='mb-4 fs-1'>₹20</h2>
                  <p>Intraday and F&O</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing