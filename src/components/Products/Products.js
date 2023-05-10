import React from "react";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import beauteProducts from "./beaute_products shot.jpg";
import beauteEyes from "./eyes1.jpg";
import beauteEyeliner from "./eyes2.jpg";
import beauteFoundation from "./foundation1.jpg";
import beautePowder from "./foundation2.jpg";
import beauteLipstick from "./lipstick1.jpg";
import beauteGloss from "./lipstick2.jpg";

import "./Products.css";

function Products() {
  const products = [
    {
      id: "p1",
      image: beauteLipstick,
      title: "MATTE LIPSTICK",
      description: "A creamy rich formula with high colour payoff, in a no-shine matte finish.",
      price: 20,
    },
    {
      id: "p2",
      image: beauteGloss,
      title: "GLOSS LIPSTICK",
      description: "A creamy rich formula with high colour payoff, in a shine finish.",
      price: 22,
    },
    {
      id: "p3",
      image: beauteEyes,
      title: "EYE SHADOW",
      description: "A shadow formulated to prolong the look of your eye makeup.",
      price: 18,
    },
    {
      id: "p4",
      image: beauteEyeliner,
      title: "EYELINER",
      description: "A shadow formulated to prolong the look of your eye makeup.",
      price: 18,
    },
    {
      id: "p5",
      image: beauteFoundation,
      title: "MINERAL FOUNDATION",
      description: "Light to medium beige with peachy undertone for light to medium skin.",
      price: 32,
    },
    {
      id: "p6",
      image: beautePowder,
      title: "POWDER FOUNDATION",
      description: "Light to medium beige with peachy undertone for light to medium skin.",
      price: 28,
    },
  ];
  return (
    <>
      <div className="top">
        <h1 className="productsTitle">PRODUCTS</h1>
        <img
          src={beauteProducts}
          className="beauteProducts"
          alt="beauteProducts"
        />
      </div>
      <div className="products">
        <div className="categories">
          <button class="button">FILTER</button>
          <button class="button">LIPS</button>
          <button class="button">EYES</button>
          <button class="button">FACE</button>
        </div>
        <div className="products-list">
          <h1>LIPS</h1>
          <div className="lips">
            <ProductDetails
              image={products[0].image}
              title={products[0].title}
              description={products[0].description}
              price={products[0].price}
            ></ProductDetails>
            <span class="spacer"></span>
            <ProductDetails
              image={products[1].image}
              title={products[1].title}
              description={products[1].description}
              price={products[1].price}
            ></ProductDetails>
          </div>
          <h1>EYES</h1>
          <div className="eyes">
            <ProductDetails
              image={products[2].image}
              title={products[2].title}
              description={products[2].description}
              price={products[2].price}
            ></ProductDetails>
            <span class="spacer"></span>
            <ProductDetails
              image={products[3].image}
              title={products[3].title}
              description={products[3].description}
              price={products[3].price}
            ></ProductDetails>
          </div>
          <h1>FACE</h1>
          <div className="face">
            <ProductDetails
              image={products[4].image}
              title={products[4].title}
              description={products[4].description}
              price={products[4].price}
            ></ProductDetails>
            <span class="spacer"></span>
            <ProductDetails
              image={products[5].image}
              title={products[5].title}
              description={products[5].description}
              price={products[5].price}
            ></ProductDetails>
          </div>
        </div>
      </div>
    </>
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
