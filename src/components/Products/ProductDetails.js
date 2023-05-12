import React from "react";
import "./ProductDetails.css";
import { Link } from "react-router-dom";

function ProductDetails(props) {
  const handleAddToCart = () => {
    props.addToCart({
      image: props.image,
      title: props.title,
      description: props.description,
      price: props.price
    });
  };
  
  return (
    <div className="productcard">
      <div> <img
          src={props.image}
        /></div>
      <div className="item__description">
        <h2>{props.title} </h2>
        <p>{props.description}</p>
        <div className="product__price">£{props.price}</div>
        <Link to="/cart">
          <button onClick={handleAddToCart}>ADD TO CART</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
