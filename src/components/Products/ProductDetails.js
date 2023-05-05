import React from "react";
import './ProductDetails.css';
import { Link } from 'react-router-dom';

function ProductDetails(props) {
  const productName = "Matte Lipstick";
  const productDescription = "Lips Product description";
  const lipsDescription = "Lips description";
  const faceDescription = "Face description";
  const productFace = "Face";
  const productLips = "Lips";
  const productPrice = 20;
  return (
    <div className="productcard">
      <div>Image</div>
      <div className = "item__description">
      <h2>{ productName} </h2>
      <p>{ productDescription }</p>
      <div className="product__price">£{ productPrice }</div>
      <Link to="/cart"><button>Add to Cart</button></Link>
      </div>
    </div>
  );
}

export default ProductDetails;
