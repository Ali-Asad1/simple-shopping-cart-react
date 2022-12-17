import React, { useContext } from "react";
import { BsBag } from "react-icons/bs";
import productContext from "../../Contexts/ProductContext";
import "./Navbar.css";

export default function Navbar() {
  const contextData = useContext(productContext)
  return (
    <nav className="navbar navbar-expand-sm py-3 d-flex">
      <div className="container">
        <a href="#" className="navbar-brand">
          MY Shop
        </a>
        <ul className="navbar-nav me-auto ms-3">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
        </ul>

        <div className="bag-box">
          <a href="javascript:void(0)" className="bag" onClick={() => {
            contextData.setIsShowCart(true)
          }}>
            <BsBag className="text-white" />
            <span className="bag-products-counter">{contextData.userCart.length}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
