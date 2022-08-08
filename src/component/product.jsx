import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = (props) => {
    return (
      <div className="product">
        <img src={"/images/" + props.data.image}
 alt=" product" />

        <h5>{props.data.title}</h5>

        <label>Total: ${props.data.price.toFixed(2)}</label>
        <label>Price: ${props.data.price.toFixed(2)}</label>

        <QuantityPicker></QuantityPicker>
    </div>
    );
};

export default Product;