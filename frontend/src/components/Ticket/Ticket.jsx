import React from 'react'

const Ticket = () => {
    return (
        <div className='container'>
            <div className="row mb-5">
                <h3>To create a ticket, select a relevant topic</h3>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-4">
                    <p><i class="fa-solid fa-plus"></i> Account Opening</p>
                    <ul className="text-primary" style={{listStyle : "none", marginLeft : "-20px"}}>
                        <li>Getting Started</li>
                        <li>Online</li>
                        <li>Offline</li>
                        <li>Charges</li>
                        <li>Company, Partnership and HUF</li>
                        <li>Non Resident Indian (NRI)</li>
                    </ul>
                </div>
                <div className="col-4">
                    <p><i class="fa-solid fa-user"></i> Your Zerodha account</p>
                    <ul className="text-primary" style={{listStyle : "none", marginLeft : "-20px"}}>
                        <li>Login credentials</li>
                        <li>Your Profile</li>
                        <li>Account modification and segment addition</li>
                        <li>CMR & DP ID</li>
                        <li>Nomination</li>
                        <li>Transfer and conversion of shares</li>
                    </ul>
                    
                </div>
                <div className="col-4">
                    <p><i class="fa-solid fa-chart-simple"></i> Trading and Markets</p>
                    <ul className="text-primary" style={{listStyle : "none", marginLeft : "-20px"}}>
                        <li>Trading FAQs</li>
                        <li>Kite</li>
                        <li>Margins</li>
                        <li>Product and order types</li>
                        <li>Corporate actions</li>
                        <li>Kite features</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <p><i class="fa-solid fa-credit-card"></i> Funds</p>
                    <ul className="text-primary" style={{listStyle : "none", marginLeft : "-20px"}}>
                        <li>Trading FAQs</li>
                        <li>Kite</li>
                        <li>Margins</li>
                        <li>Product and order types</li>
                        <li>Corporate actions</li>
                        <li>Kite features</li>
                    </ul>
                </div>
                <div className="col-4">
                    <p><i class="fa-brands fa-chrome"></i> Console</p>
                    <ul className="text-primary" style={{listStyle : "none", marginLeft : "-20px"}}>
                        <li>Trading FAQs</li>
                        <li>Kite</li>
                        <li>Margins</li>
                        <li>Product and order types</li>
                        <li>Corporate actions</li>
                        <li>Kite features</li>
                    </ul>
                </div>
                <div className="col-4">
                    <p><i class="fa-regular fa-circle"></i> Coin</p>
                    <ul className="text-primary" style={{listStyle : "none", marginLeft : "-20px"}}>
                        <li>Trading FAQs</li>
                        <li>Kite</li>
                        <li>Margins</li>
                        <li>Product and order types</li>
                        <li>Corporate actions</li>
                        <li>Kite features</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Ticket