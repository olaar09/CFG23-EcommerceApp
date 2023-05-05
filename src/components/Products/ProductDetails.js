import React from "react";
import "./ProductDetails.css";
import { Link } from "react-router-dom";

function ProductDetails(props) {
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
          <button>Add to Cart</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
