import React, { useState } from "react";
import "./product.css";
import ProductDetails from "./ProductDetails";
import { IoCartOutline } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

const Product = ({ detail, view, close, setClose, addToCart}) => {
  const [product, setProduct] = useState(ProductDetails);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("search")?.toLowerCase() || "";
  const filtterProduct = (product) => {
    const update = ProductDetails.filter((it) => {
      return it.Cat === product;
    });
    setProduct(update);
  };
  const AllProducts = () => {
    setProduct(ProductDetails);
  };
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
      <div className="products">
        <h2># Products</h2>
        <p>Home . Products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li onClick={() => AllProducts()}>All Products</li>
                <li onClick={() => filtterProduct("Tablet")}>Tablet</li>
                <li onClick={() => filtterProduct("Smart Watch")}>
                  Smart Watch
                </li>
                <li onClick={() => filtterProduct("Headphone")}>Headphone</li>
                <li onClick={() => filtterProduct("Camera")}>Camera</li>
                <li onClick={() => filtterProduct("Gaming")}>Gaming</li>
              </ul>
            </div>
          </div>
          <div className="product-box">
            <div className="content">
              {product
                .filter((item) => item.Title.toLowerCase().includes(searchTerm))
                .map((item) => (
                  <div className="box" key={item.id}>
                    <div className="img-box">
                      <img src={item.Img} alt={item.Title} />
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
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
