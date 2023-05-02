import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  return (
    <div>
      <div className="products">
      <h1>Products Page</h1>
      <Link to="/cart"><button>Link to cart page</button></Link>
    </div>
    </div>
  );
}

export default Products;
