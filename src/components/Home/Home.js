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
    </div>
  );
}

export default Home;