import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/order").then((res) => {
      setOrders(res.data);
    });
    
  }, [])

  return (
    <div className="orders">
      {orders.length == 0 ?
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
        :
        <>
          <h3 className="title">Orders ({orders.length})</h3>

          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => {
                  return (
                    <tr key={index}>
                      <td>{order.name}</td>
                      <td>{order.qty}</td>
                      <td>{order.price.toFixed(2)}</td>
                      <td>{order.mode}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>

      }

    </div>
  );
};

export default Orders;