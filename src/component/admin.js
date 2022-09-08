import "./admin.css";
import { useState, useEffect } from "react";
import DataService from "../services/dataService";

const Admin = () => {
  const [product, setProduct] = useState({});
  const [coupon, setCoupon] = useState({});
  const [showProdSuccess, setShowProdSuccess] = useState({});

  const saveProduct = async () => {
    console.log("Saving Product");
    console.log(product);

    // use service to send it to server

   let fixProd = {...product};
   fixProd.price = +fixProd.price;


    let service = new DataService();
    let savedProd = await service.service.saveProduct(fixProd);
    

    if(savedProd && savedProd._id){
      setShowProdSuccess(true);

      setTimeout (() => { 
        setShowProdSuccess (false)
      }, 6000); // milli seconds

    }
  };

  const textChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    let copy = { ...product };
    copy[name] = value;

    setProduct(copy);
  };

  const saveCoupon = () => {
    console.log(coupon);
    let copy = { ...coupon};
    copy.discount = parseFloat(copy.discount);

    let service = new DataService();
    service.saveCoupon(copy);
  };

  const couponChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    let copy = { ...coupon };
    copy[name] = value;
    setCoupon(copy);
  };

  const loadCoupons = () => {

    let service = new DataService();
    let allCoupons = await service.getCoupons();
    console.log(allCoupons);
  };

   useEffect(() => {
     loadCoupons();
   }, []);

  return (
    <div className="admin">
      <h1>Store administration</h1>

      {showProdSuccess ?<div className="alert alert-success">product saved</div> : null }

      <div className="parents">
        <section className="products">
          <h3>Register Products</h3>

          <div className="my-form">
            <label>Title:</label>
            <input name="title" onChange={textChange} type="text" />
          </div>

          <div className="my-form">
            <label>Price:</label>
            <input name="price" onChange={textChange} type="number" />
          </div>

          <div className="my-form">
            <label>Image</label>
            <input name="Image" onChange={textChange} type="text" />
          </div>

          <div className="my-form">
            <label>Category</label>
            <input name="Category" onChange={textChange} type="text" />
          </div>

          <div className="my-form">
            <button onClick={saveProduct} className="btn btn-sm btn-dark">
              Save Product
            </button>
          </div>
        </section>

        <section className="list">
          <h3>Discount Codes</h3>

          <div className="my-form">
            <label>code</label>
            <input name="code" onChange={couponChange} type="text" />
          </div>

          <div className="my-form">
            <label>Discount</label>
            <input name="discount" onChange={couponChange} type="text" />
          </div>

          <div className="my-form">
            <button onClick={saveCoupon} className="btn btn-sm btn-dark">
              Save Coupon
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
