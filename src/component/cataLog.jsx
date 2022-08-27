import "./cataLog.css";
import Product from "./product";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

const CataLog = () => {
  const [products, setProducts] = useState([]);
  const [catagories, setCatagories] = useState([]);

  const loadData = () => {
    let service = new DataService(); // instance of the class
    let prods = service.getCatalog();
    setProducts(prods);

    let uniques = [];
    for (let i = 0; i < prods.length; i++) {
      let prod = prods[i];
      if (!uniques.includes(prod.category)) {
        uniques.push(prod.category);
      }
    }
    setCatagories(uniques);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="catalog">
      <h1>Check Our CataLog</h1>

      <div className="filter">
        {catagories.map((cat) => (
          <button key={cat} className="cat-btn">
            {cat}
          </button>
        ))}
      </div>

      <div className="Product-list">
        {products.map((prod) => (
          <Product key={prod._id} data={prod}></Product>
        ))}
      </div>
    </div>
  );
};

export default CataLog;
