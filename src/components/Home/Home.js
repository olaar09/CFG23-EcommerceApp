import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import "../Products/ProductDetails.css";
import beauteProducts from "./beaute_products shot.jpg";
import skintypeImage from "./skintypes_image.jpg"
import "../Products/ProductDetails.css";
import modelhomepage from "./Model_for_homepage.jpg";
import beauteShadowHome from "./beaute_eyes_02.jpg";
import beauteFoundationHome from "./beaute_foundation_01.jpg";
import beauteLipstickHome from "./beaute_lipstick_01.jpg";


const Home = () => {
  return (
    <div className="home">
   
  
    <div className="home-toptwo">

    <img
          src={modelhomepage}
          className="modelhome"
          alt="Model"
        />

        <div class="HomeTextContainer">
        <div class="HomeTitle">NATURAL MAKEUP</div>
        <div class="HomeSubTitle">IN ALL SHADES</div>

        <Link to="/products">
          <button>SHOP NOW</button>
        </Link>
        </div>
    </div>




<div class="home-second-container">
<div class="home-second-grid">
<Link to="/products"><img
      src={beauteLipstickHome}
      className="LipsImgHome"
      alt="lips"
      />
    <div class="LipsTitle">LIPS</div>
    </Link>

<Link to="/products"><img
      src={beauteShadowHome}
      className="EyesHomeSec"
      alt="eyes"
    />
     <div class="EyesTitle">EYES</div>
    </Link>


<Link to="/products"><img
      src={beauteFoundationHome}
      className="FaceHomeSec"
      alt="face"
     />
     <div class="FaceTitle">FACE</div></Link>

     </div>
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