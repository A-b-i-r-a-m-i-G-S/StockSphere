import React from 'react'

const HeroSupport = () => {
  return (
    <div className='bg-primary container-fluid text-white mb-5'>
      <div className="container m-5 mb-0 mt-0">
        <div className="row m-5 mb-0 mt-0 p-3 pt-5">
          <div className="col-6">
            <p className='fs-4'>Support Portal</p>
          </div>
          <div className="col-6" style={{ textAlign: "right" }}>
            <a href="" className='text-white' style={{ textDecoration: "underline" }}>Track tickets</a>
          </div>
        </div>
        <div className="row m-5 mb-0 mt-0 p-3">
          <div className="col-6 p-2 mr-5">
            <p className='fs-3'>Search for an answer or browse help topics to create a ticket</p>
            <input type="text" placeholder='Eg. How do I activate F&O' style={{ border: "none", width: "100%", padding: "1em", borderRadius: "5px", marginBottom: "10px" }} />
            <br />
            <div>
              <a href="" className='text-white' style={{ textDecoration: "underline" }}>Track account opening</a> <br />
              <a href="" className='text-white' style={{ textDecoration: "underline" }}>Track segment activation</a> <br />
              <a href="" className='text-white' style={{ textDecoration: "underline" }}>Intraday margins</a> <br />
              <a href="" className='text-white' style={{ textDecoration: "underline" }}>Kite user manual</a> <br />
            </div>
          </div>
          <div className="col-6 p-5 pt-2">
            <p className='fs-3'>Featured</p>
            <ol>
              <li> <a href="" className='text-white' style={{ textDecoration: "underline" }}>Current takeovers and Listings</a></li>
              <li> <a href="" className='text-white' style={{ textDecoration: "underline" }}>Latest intraday leverages</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSupport