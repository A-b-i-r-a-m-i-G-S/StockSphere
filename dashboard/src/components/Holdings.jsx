import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BarChart } from "./BarChart";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/holdings").then((res)=>{
      setHoldings(res.data);
    })
  }, [])

  const labels = holdings.map((stock) => stock.name);
  const chart_data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: holdings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };


  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          </thead>
          <tbody>
          {holdings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const profit = (curValue - stock.avg * stock.qty).toFixed(2);
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profit >= 0.0 ? "profit" : "loss"}>{profit}</td>
                <td className={profit >= 0.0  ? "profit" : "loss"}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      <BarChart data={chart_data}></BarChart>
    </>
  );
};

export default Holdings;