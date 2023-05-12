import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import "../Products/ProductDetails.css";
import beauteProducts from "./beaute_products shot.jpg";
import skintypeImage from "./skintypes_image.jpg"
import "../Products/ProductDetails.css";


const Home = () => {
  return (
    <div className="home">
    <div>
      <h1>Home Page</h1>
      <Link to="/products"><button>Link to Products Page</button></Link>
    </div>
    

    
    <div className="top-two">
        <div>
        <h1 className="main-text">NEW RANGE</h1>
        <h2 className='sub-text'>Discover the products</h2>
        <Link to="/products">
          <button className='button-top'>SHOP NOW</button>
        </Link>
        </div>
       
       
        <img
          src={beauteProducts}
          className="beauteProducts"
          alt="beauteProducts"
        />
    </div>
    <div>

    <div className="top-two">

    <img
          src={skintypeImage}
          className="skinProducts"
          alt="beauteProducts"
        />

<div classname="three">
        <h1 className="main-text">FIND YOUR <br/> SKIN TYPE</h1>
        <Link to="/products">
          <button>DISCOVER</button>
        </Link>
        </div>
    </div>

    


    </div>

    </div>
  );
}

export default Home;