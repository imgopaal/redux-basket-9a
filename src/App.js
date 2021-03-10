import React from "react";
import "./App.css";
import Products from "./Products";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import { ProductDetails } from "./ProductDetails";
import Basket from './Basket';
import BottomNav from './BottomNav';
function App() {
  return (
    <Router>
      <nav>
        <Link className="con" to="/">Home</Link>
        <Link className="con" to="/products">Products</Link>
        <Link className="con" to="/basket">Basket</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/basket" element={<Basket />} />
        <Route
          path="/products/product1"
          element={
            <ProductDetails
              price={190} 
              item={1}
              name={"Air Jordan 1 Retro HP Green"}
              src={
                "https://stockx-360.imgix.net//Air-Jordan-1-Retro-High-Pine-Green/Images/Air-Jordan-1-Retro-High-Pine-Green/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1538777452&w=1000"
              }
            />
          }
        />
        <Route
          path="/products/product2"
          element={
            <ProductDetails
              price={230}
              item={2}
              name={"Air Jordan 1 Retro"}
              src={
                "https://stockx-360.imgix.net//Air-Jordan-1-Retro-High-Bio-Hack/Images/Air-Jordan-1-Retro-High-Bio-Hack/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1599068019&w=1000"
              }
            />
          }
        />
        <Route
          path="/products/product3"
          element={
            <ProductDetails
              price={120}
              item={3}
              name={"Air Jordan 1 Retro HS Dark"}
              src={
                "https://stockx-360.imgix.net//Air-Jordan-1-Retro-High-Strap-Dark-Grey-Anthracite/Images/Air-Jordan-1-Retro-High-Strap-Dark-Grey-Anthracite/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1560367330&w=1000"
              }
            />
          }
        />
        <Route
          path="/products/product4"
          element={
            <ProductDetails
              item={4}
              price={380}
              name={"Air Jordan 1 RH Yellow"}
              src={
                "https://stockx-360.imgix.net//Air-Jordan-1-Retro-High-Yellow-Ochre/Images/Air-Jordan-1-Retro-High-Yellow-Ochre/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1538080256&w=1000"
              }
            />
          }
        />
        <Route
          path="/products/product5"
          element={
            <ProductDetails
              price={710}
              item={5}
              name={"Air Jordan 1 Retro H Fearless"}
              src={
                "https://stockx-360.imgix.net//Air-Jordan-1-Retro-High-Fearless-UNC-Chicago/Images/Air-Jordan-1-Retro-High-Fearless-UNC-Chicago/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1573502731&w=1000"
              }
            />
          }
        />
        <Route
          path="/products/product6"
          element={
            <ProductDetails
              price={540}
              item={6}
              name={"Air Jordan 1 Retro Chicago"}
              src={
                "https://stockx-360.imgix.net//Air-Jordan-1-Retro-Chicago-1994/Images/Air-Jordan-1-Retro-Chicago-1994/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1546586711&w=1000"
              }
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomNav/>
    </Router>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}
export default App;
