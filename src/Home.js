import React from "react";
import './Home.css';
import Products from "./Products";
import {Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="cont">
      <p className="welcome">Welcome Here</p>
      <Link className="cc" to="/products" element={<Products />}>

      <button id="shop">
                SHOP NOW{" "}
              </button>
      </Link>
    </div>
  );
};

export default Home;
