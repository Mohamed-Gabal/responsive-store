import React from "react";
import "./footer.css";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="about">
            <div className="logo">
              <img src="./image/Logo.jpeg" alt="logo"></img>
            </div>
            <div className="details">
              <p>
                We are a team of designers and developers that create high
                quality WordPress
              </p>
              <div className="icons">
                <li>
                  <ImFacebook />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaYoutube />
                </li>
              </div>
            </div>
          </div>
          <div className="account">
            <h3>My Account</h3>
            <ul>
              <li>Account</li>
              <li>Order</li>
              <li>Cart</li>
              <li>Shipping</li>
              <li>Return</li>
            </ul>
          </div>
          <div className="page">
            <h2>Pages</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Terma & Condition</li>
            </ul>
          </div>
        </div>
        <div className="end">
          {" "}
          © 2024 All rights reserved — Designed & Developed by Gabal
        </div>
      </div>
    </>
  );
};

export default Footer;
