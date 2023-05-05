import React from 'react';
import { Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';

import './Products.css';

function Products() {
  return (
    <div>
      <div className="top">
      <h1>PRODUCTS</h1>
      <div>Image</div>
      </div>
      <div className="products">
      <div className="categories">
        <button>Filter</button>
        <button>Lips</button>
        <button>Eyes</button>
        <button>Face</button>
      </div>
      <div className="products-list">
      <h1>LIPS</h1>
      <div className="lips">
      <ProductDetails></ProductDetails>
      <ProductDetails></ProductDetails>
      </div>
      <h1>EYES</h1>
      <div className="eyes">
      <ProductDetails></ProductDetails>
      <ProductDetails></ProductDetails>
      </div>
      <h1>FACE</h1>
      <div className="face">
      <ProductDetails></ProductDetails>
      <ProductDetails></ProductDetails>
      </div>
      </div>
    </div>
  </div>
  );
} 

export default Products;

/*  import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import "./product.css"


export default function product(props) {
  let cartData = props.data
  const { cartItems, addToCart, newItems, setNewItems, cartCounter, setCartCounter, updateCount} = useContext(ShopContext)

  function updateCart(id) {
    setNewItems(
      newItems.map((item) => {
        if(item.id === id) {
          let val = {...item, quantity: item.quantity + 1};
          if(val.quantity <= 1){
            setCartCounter(cartCounter + 1)}
          return val
        }
        else
          return item
      })
      )
 } 

  return (
    <div className='product'>
      <div className="image-container">
        <img src={props.data.ProductImage} alt="clothing" />
      </div>

      <div className="description">
        <div className="name">
          <p>{props.data.ProductName}</p>
        </div>

        <div className="add">
          <span>${props.data.ProductPrice}</span>
          <button onClick={() => {
            props.setCartProducts(props.cartProducts.concat({cartData})); 
            addToCart(props.data.id);
            updateCart(props.data.id)
            }}>
              Add to cart
              { !!newItems[props.data.id - 1].quantity && ` (${newItems[props.data.id - 1].quantity})`}
          </button>
        </div>
      </div>
    </div>
  )
} */


