import "./cart.css";

import { useContext } from "react";
import StoreContext from "../store/storeContext";

const Cart = () => {
  const cart = useContext(StoreContext).cart;

  return (
    <div className="cart">
      <h1>Ready to pay?</h1>
      <h5>we have {cart.length} item ready for you</h5>

      <ul>
        {cart.map(prod => <li key={prod._id}>{prod.title}</li>)}
      </ul>
    </div>
  );
};


export default Cart;
