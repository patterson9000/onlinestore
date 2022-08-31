import "./cart.css";

import { useContext } from "react";
import StoreContext from "../store/storeContext";
import ProductInCart from "./productInCart";

const Cart = () => {
  const cart = useContext(StoreContext).cart;

  const getNumberItems = () => {
    let sum = 0;
    
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      sum += prod.quantity;
    }
    return sum;
  };

  const getTotal = () => {
    let total = 0;
    for(let i=0; i < cart.length; i++){
      let prod = cart[i];
      total += prod.quantity * prod.price;
    }

    return total.toFixed(2);
  }

  return (
    <div className="cart">
      <h1>Ready to pay?</h1>
      <h5>we have {getNumberItems()} item ready for you</h5>

      <div className="parent">

        <div className="product">
          {cart.map((prod) => (
            <ProductInCart key={prod._id} data={prod}></ProductInCart>
          ))}
        </div>

        <div className="side-menu">
          <h3>Your total is: {getTotal()}</h3>
        </div>
      </div>

      <ul></ul>
    </div>
  );
};

export default Cart;
