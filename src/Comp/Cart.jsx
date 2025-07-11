import React from "react";
import "./cart.css";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  // increoce qty
  const incQty = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exsit, qty: exsit.qty + 1 }
          : curElm;
      })
    );
  };
  // Dec Qty
  const decQty = (product) => {
    const exsit = cart.find((x) => x.id === product.id);
    if (exsit.qty > 1) {
      setCart(
        cart.map((curElm) =>
          curElm.id === product.id ? { ...exsit, qty: exsit.qty - 1 } : curElm
        )
      );
    }
  };
  // Remove Cart Product
  const removeProduct = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    if (exsit.qty > 0) {
      setCart(
        cart.filter((x) => {
          return x.id !== product.id;
        })
      );
    }
  };
  // Total Price
  const totalPrice = cart.reduce(
    (price, item) => price + item.qty * item.Price,
    0
  );
  return (
    <>
      <div className="cart-container">
        {cart.length === 0 && (
          <div className="empty-cart">
            <h2>Cart is Empty</h2>
            <Link to="/product" className="empty-cart-btn">
              Shop Now
            </Link>
          </div>
        )}
        <div className="content">
          {cart.map((item) => {
            return (
              <div className="cart-items" key={item.id}>
                <div className="img-box">
                  <img src={item.Img} alt={item.Title}></img>
                </div>
                <div className="detail">
                  <div className="info">
                    <h4>{item.Cat}</h4>
                    <h3>{item.Title}</h3>
                    <p>Price: ${item.Price}</p>
                    <div className="qty">
                      <button onClick={() => incQty(item)} className="inc-qty">
                        +
                      </button>
                      <input type="text" value={item.qty} readOnly></input>
                      <button onClick={() => decQty(item)} className="dec-qty">
                        -
                      </button>
                    </div>
                    <h5 className="sup-total">
                      sup total: ${item.Price * item.qty}
                    </h5>
                  </div>
                  <div className="close">
                    <button onClick={() => removeProduct(item)}>
                      <IoCloseSharp />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {cart.length > 0 && (
          <>
            <h2 className="total-price">Total: ${totalPrice}</h2>
            <button className="check-out">Checkout</button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
