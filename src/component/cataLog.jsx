import "./cataLog.css"; 
import Product from "./product"

const CataLog = () =>{
    return(
       <div className="catalog">
        <h1>check our cataLog</h1>

        <div className="Product-list">
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
       </div>
       </div>
    );
};

export default CataLog;