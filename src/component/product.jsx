import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState, useContext} from "react";
import StoreContext from "../store/storeContext";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useContext(StoreContext).addToCart;

  const handleAddClick = () => {
    console.log(props.data.title);
    
    addToCart(props.data);
  };
  

  const onQuantityChange = (quantity) => {
    setQuantity(quantity);
  };

  const getTotal = () => {
    let total = quantity * props.data.price;
    return total.toFixed(2);
  };

  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt=" product" />

      <h5>{props.data.title}</h5>

      <div className="prices">
        <label className="total">Total: ${getTotal()}</label>
        <label className="price">Price: ${props.data.price.toFixed(2)}</label>
      </div>

      <div className="controls">
        <QuantityPicker onChange={onQuantityChange} />
        <button onClick={handleAddClick} className="btn btn-sm btn-succes">
          Add
        </button>
      </div>
    </div>
  );
};

export default Product;
