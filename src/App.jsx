import Navbar from "./Comp/Navbar";
import Rout from "./Comp/Rout";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Comp/Footer";
import { useState } from "react";

const App = () => {
  // add to cart
  const [cart, setCart] = useState([]);
  const [close, setClose] = useState(false);
  {
    /* start filter-product */
  }
  const [detail, steDetail] = useState([]);
  {
    /* end filter-product */
  }
  const view = (product) => {
    steDetail([{ ...product }]);
    setClose(true);
  };
  // add to cart
  const addToCart = (product) => {
     const exsit = cart.find((x) => {
    return x.id === product.id;
  });
    if (exsit) {
      alert("This Product is already added to cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar detail={detail} view={view} close={close} setClose={setClose} cart={cart}/>
        <Rout
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          cart={cart}
          setCart={setCart}
          addToCart={addToCart}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
