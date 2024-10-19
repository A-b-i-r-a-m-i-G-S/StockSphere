import React from 'react'

const Brokerage = () => {
    return (
        <div className='container'>
            <div className="row text-center fs-5 mb-5">
                <div className="col-6">
                    <a href="">Brokerage calculator</a>
                </div>
                <div className="col-6">
                    <a href="">List of charges</a>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <ul>
                        <li style={{fontSize : "0.8rem", color: "grey"}}>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li style={{fontSize : "0.8rem", color: "grey"}}>Digital contract notes will be sent via e-mail.</li>
                        <li style={{fontSize : "0.8rem", color: "grey"}}>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li style={{fontSize : "0.8rem", color: "grey"}}>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li style={{fontSize : "0.8rem", color: "grey"}}>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li style={{fontSize : "0.8rem", color: "grey"}}>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Brokerage