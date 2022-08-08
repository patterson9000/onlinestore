import "./cataLog.css"; 
import Product from "./product";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

const CataLog = () =>{

    const [products,setProducts] = useState([]);

    const loadData = () => {
      let service = new DataService();// instance of the class
      let prods = service.getCatalog();
      setProducts(prods);
    };
    
     useEffect(() => {
        loadData();
     }, []);

    return(
       <div className="catalog">
        <h1>check our cataLog</h1>

        <div className="Product-list">
          {products.map((prod) => (
            <Product key={prod._id} data={prod}></Product>
            
          ))}
       </div>
       </div>
    );
};

export default CataLog;