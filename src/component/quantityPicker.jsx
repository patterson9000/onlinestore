import "./quantityPicker.css";
import { useState } from "react";

const QuantityPicker = (props) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    let next = quantity + 1;
    setQuantity(next);
    props.onChange(next);
  };

  const decrease = () => {
    let next = quantity - 1;
    if (next > 0) {
      setQuantity(next);
      props.onChange(next);
    }
};

    return (
      <div className="qt-picker">
        <button className="btn btn-sm btn-info" onClick={increase}>
          +
        </button>
        <label>{quantity}</label>
        <button className="btn btn-sm btn-info" onClick={decrease}>
          -
        </button>
      </div>
    );
  };


export default QuantityPicker;
