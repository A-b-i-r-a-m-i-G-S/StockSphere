import React, { useDebugValue, useEffect, useState } from "react";
import axios from 'axios';


const Positions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(()=>{
    axios.get("https://stocksphere-backend-tskz.onrender.com/positions").then((res)=>{
      setPositions(res.data);
    })
  },[]);

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          </thead>

          <tbody>

          {
            positions.map((pos, index) => {
              const curValue = pos.price * pos.qty;
              const profit = (curValue - pos.avg * pos.qty).toFixed(2);
              const dayClass = pos.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{pos.name}</td>
                  <td>{pos.qty}</td>
                  <td>{pos.avg.toFixed(2)}</td>
                  <td>{pos.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profit >= 0.0 ? "profit" : "loss"}>{profit}</td>
                  <td className={profit >= 0.0 ? "profit" : "loss"}>{pos.net}</td>
                  <td className={dayClass}>{pos.day}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;