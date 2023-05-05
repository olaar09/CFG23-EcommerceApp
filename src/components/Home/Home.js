import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
    <div>
      <h1>Home Page</h1>
      <Link to="/products"><button>Link to Products Page</button></Link>
    </div>
    
    <div className='font-light'>
        <div>
            <h1 className='main-text'>New range</h1>
            <h2 className='sub-text'>Discover the products</h2>
            <button>Shop now</button>
        </div>
        <div>
            <img src="" alt=""></img>
        </div>
    </div>

    <div>
        <div>
            <img src="" alt=""></img>
        </div>
        <div>
            <h1>Find your skin type</h1>
            <button>Discover</button>
        </div>
        <div>
            <img src="" alt=""></img>
        </div>
    </div>
    <div>

    </div>

    </div>
  );
}

export default Home;