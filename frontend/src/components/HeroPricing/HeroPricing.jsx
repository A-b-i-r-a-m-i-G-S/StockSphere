import React from 'react'

const HeroPricing = () => {
  return (
    <div className='container'>
        <div className="row p-5 text-center mb-5 border-bottom">
            <h1>Pricing</h1>
            <p className='fs-5'>Free equity investments and flat ₹20 intraday and F&O trades</p>
        </div>
        <div className="row mt-5 text-center pb-5 border-bottom">
          <div className="col-4">
            <img src="media/pricing0.svg" alt="" style={{width : "70%"}}/>
            <h3 className='mb-4'>Free equity delivery</h3>
            <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
          </div>
          <div className="col-4">
            <img src="media/intradayTrades.svg" alt="" style={{width : "70%"}}/>
            <h3 className='mb-4'>Intraday and F&O trades</h3>
            <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>
          <div className="col-4">
            <img src="media/pricingMF.svg" alt="" style={{width : "70%"}}/>
            <h3 className='mb-4'>Free direct MF</h3>
            <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
        </div>
    </div>
  )
}

export default HeroPricing