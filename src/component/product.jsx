import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = () => {
    return (
      <div className="product">
        <img src="https://picsum.photos/200/300
" alt="product" />

        <h5>title here</h5>

        <QuantityPicker></QuantityPicker>
    </div>
    );
};

export default Product;