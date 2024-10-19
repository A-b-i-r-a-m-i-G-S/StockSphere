import React from 'react'

const Team = () => {
    return (
        <div className='container' style={{marginBottom : "10%"}}>
            <div className="row text-center">
                <h2>People</h2>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-6 text-center">
                    <img src="media/nithinKamath.jpg" alt=""  className="m-3" style={{borderRadius: "50%", width: "50%"}}/>
                    <p className='fs-5'>Nithin Kamath</p>
                    <p>Founder, CEO</p>
                </div>
                <div className="col-6 px-4" style={{fontSize:"1.1em"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="">Homepage / TradingQnA / Twitter</a></p>
                </div>
            </div>
        </div>
    )
}

export default Team