import React from "react";
import './Cart.css';
import cartModel from './Model_for_cart.jpg';

const Cart = () => {
  const payNow = () => {
  }
  return (
    <>
    <div id="content">
      <img src={cartModel} className="cartModel" alt="cartModel" />
      <div><h1 className="cartTitle">CART</h1></div>
    </div>
    <div className="blockRight">
      <h1 className="orderSummary">ORDER SUMMARY</h1>
      <h3><span style={{ fontSize: 20 }}>Subtotal</span></h3>
      <h3><span style={{ fontSize: 20 }}>Gift Wrap</span></h3>
      <h3><span style={{ fontSize: 20 }}>Delivery: Standard Shipping</span></h3>
      <h3 className="estTotal">Estimated Total</h3>
      <button className="payButton" onClick={() => payNow()}>PAY NOW</button>
    </div>
    </>
  );
  }

export default Cart;