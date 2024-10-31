import React from "react";
import { positions } from "../data/data";

const Positions = () => {
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

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
        </table>
      </div>
    </>
  );
};

export default Positions;