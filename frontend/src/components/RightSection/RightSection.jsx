import React from 'react'

const RightSection = ({image, title, desc}) => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-4 fs-6 p-5" style={{ margin: "5% 0% 0% 5%" }}>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <div className="row mb-3">
                        <div className="col-6">
                            <a href="">Try Now  <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-7">
                    <img src={"media/" + image} alt="" style={{ width: "100%" }} />
                </div>
            </div>
        </div>
    )
}

export default RightSection