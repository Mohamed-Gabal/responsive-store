import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiTruck } from "react-icons/fi";
import { BiDollar } from "react-icons/bi";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { FaHeadphones } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import HomeProduct from "./HomeProduct.js";
import { IoCloseSharp } from "react-icons/io5";


import "./home.css";

const Home = ({ detail, view, close, setClose, addToCart}) => {
  return (
    <>
      {/* start filter-product */}
      {close ? (
        <div className="product-detail">
          <div className="container">
            <button onClick={() => setClose(false)} className="close-btn">
              <IoCloseSharp
                className="pp"
                style={{ background: "red", color: "#fff", transition: "0.5s" }}
              />
            </button>
            {detail.map((curElm) => {
              return (
                <div className="product-bix" key={curElm.id}>
                  <div className="img-box">
                    <img src={curElm.Img} alt={curElm.Title}></img>
                  </div>
                  <div className="detail">
                    <h4>{curElm.Cat}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>
                      A Screen Everyone Will Love: Whether Your Family is
                      Streaming or video chatting with friends tablet A8....|
                    </p>
                    <h3>{curElm.Price}</h3>
                    <button>Add To Cart</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      {/* end filter-product */}
      <div className="tob-banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Note Book Colletion 2024</h2>
            <Link to="/product" className="link">
              Shop Now <FaArrowRightLong />
            </Link>
          </div>
          <div className="img-box">
            <img
              style={{ width: "100%" }}
              src="./image/img-box 1.jpg"
              alt="slider-img"
            ></img>
          </div>
        </div>
      </div>
      {/* start product */}
      <div className="product-type">
        <div className="container">
          <div className="box">
            <div className="img-box">
              <img src="./image/mobile.jpeg" alt="mobile"></img>
            </div>
            <div className="details">
              <p>23 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="./image/watch.jpg" alt="mobile"></img>
            </div>
            <div className="details">
              <p>18 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="./image/sup.jpeg" alt="mobile"></img>
            </div>
            <div className="details">
              <p>52 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="./image/camera.jpeg" alt="mobile"></img>
            </div>
            <div className="details">
              <p>63 Products</p>
            </div>
          </div>
        </div>
      </div>
      {/* end product */}
      {/* start about */}
      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FiTruck />
            </div>
            <div className="details">
              <h3>Free Shipping</h3>
              <p>Oder above $1000</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BiDollar />
            </div>
            <div className="details">
              <h3>Return & Refund</h3>
              <p>Money Back Gaurenty</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <HiOutlineReceiptPercent />
            </div>
            <div className="details">
              <h3>Member Discount</h3>
              <p>On every Oder</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FaHeadphones />
            </div>
            <div className="details">
              <h3>Customer Support</h3>
              <p>Every Time Call Support</p>
            </div>
          </div>
        </div>
      </div>
      {/* end contact */}
      {/* start product */}
      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {HomeProduct.map((item) => {
            return (
              <div className="box" key={item.id}>
                <div className="img-box">
                  <img src={item.Img} alt={item.Title}></img>
                  <div className="icon">
                    <li onClick={() => addToCart(item)}>
                      <IoCartOutline />
                    </li>
                    <li onClick={() => view(item)}>
                      <MdRemoveRedEye />
                    </li>
                    <li>
                      <FaRegHeart />
                    </li>
                  </div>
                </div>
                <div className="details">
                  <p>{item.Cat}</p>
                  <h3>{item.Title}</h3>
                  <h4>{item.Price}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* end product */}
      {/* start banner */}
      <div className="banner">
        <div className="container">
          <div className="details">
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Apple ipad 10.2 9th Gen - 2021</h3>
            <p>$ 986</p>
            <Link to="/product" className="link">
              Shop Now
              <FaArrowRightLong />
            </Link>
          </div>
          <div className="img-box">
            <img
              style={{ width: "100%" }}
              src="./image/img-box 1.jpg"
              alt="slider img"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
