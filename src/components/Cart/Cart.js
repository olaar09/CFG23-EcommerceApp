import React, { useContext } from "react";
import './Cart.css';
import cartModel from './Model_for_cart.jpg';
import { CartContext } from "../Products/CartContext";
import CartProduct from "./CartProduct";

const Cart = () => {
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  const payNow = () => {}

  return (
    <>
    <div id="content">
      <img src={cartModel} className="cartModel" alt="cartModel" />
      <div><h1 className="cartTitle">CART</h1></div>
    </div>
    <div className="blockRight">
      {productsCount > 0 ? 
        <>
          <p className="itemsLeft">Items in your cart:</p>
          <div className="itemsLeft">
          {cart.items.map((currentProduct, idx) => (
            // <h1>{currentProduct.id}</h1>
            <CartProduct 
              key={idx} 
              id={currentProduct.id}
              quantity={currentProduct.quantity}></CartProduct>
            ))}</div>
            <h1 className="orderSummary">ORDER SUMMARY</h1>
            <h3><span style={{ fontSize: 20 }}>Subtotal</span></h3>
            <h3><span style={{ fontSize: 20 }}>Gift Wrap</span> <p className="priceRight">£0.00</p></h3>
            <h3><span style={{ fontSize: 20 }}>Delivery: Standard Shipping</span> <p className="priceRight">FREE</p></h3>
            <h3 className="estTotal">Estimated Total {cart.getTotalCost()}</h3>
            <button className="payButton" onClick={() => payNow()}>PAY NOW</button>
        </>
      :
        <h2>YOUR CART IS EMPTY</h2>
        }
    </div>
    </>
  );
  }

 export default Cart;