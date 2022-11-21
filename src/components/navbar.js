import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        {/* <Routes>
          <Route className="my_shop" />
        </Routes> */}
        <span className="my_shop" onClick={() => setShow(true)}>
          Harry Books
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
