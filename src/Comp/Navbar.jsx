import React from "react";
import "./navbar.css";
import { FaTruckMoving, FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoBagCheckOutline, IoLogInOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ cart }) => {
  const navigate = useNavigate();
  const handleSearch = () => {
    if (search) {
      navigate(`/product?search=${search}`);
    }
  };
  const [search, setSearch] = useState("");
  const [isloggedin, setIsloggedin] = useState(false);
  const handelLogin = () => setIsloggedin(true);
  const handelLogout = () => setIsloggedin(false);
  return (
    <>
      <div className="free">
        <div className="icon">
          <FaTruckMoving style={{ fontSize: "32px" }} />
          <p> Free Shipping when shopping upto $1000</p>
        </div>
      </div>
      {/* Start main-header */}
      <div className="main-header">
        <div className="container">
          <div className="logo">
            <img src="./image/Logo.jpeg" alt="logo" />
          </div>
          <div className="search-box">
            <input
              type="text"
              value={search}
              placeholder="Enter The Product Name"
              autoComplete="off"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="icons">
            <div className="account">
              <div className="user-icon">
                <FaRegUser />
              </div>
              {isloggedin && <p>Hello, user</p>}
            </div>
            <div className="second-icon">
              <Link to="/" className="link">
                <FaRegHeart />
              </Link>
              <Link to="/cart" className="link cart-icon">
                <IoBagCheckOutline />
                {cart.length > 0 && (
                  <span className="cart-count">
                    {cart.reduce((acc, item) => acc + item.qty, 0)}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End main-header */}
      {/* Start Header */}
      <div className="header">
        <div className="container">
          <div className="nav">
            <ul>
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/product">
                  Product
                </Link>
              </li>
              <li>
                <Link className="link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="auth">
            {!isloggedin && (
              <button onClick={handelLogin}>
                <IoLogInOutline />
              </button>
            )}
            {isloggedin && (
              <button onClick={handelLogout}>
                <CiLogout />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* End Header */}
    </>
  );
};

export default Navbar;
