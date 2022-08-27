import "./admin.css";
import { useState } from "react";

const Admin = () => {
  const [product, setProduct] = useState({});
  const [coupon, setCoupon] = useState({});

  const saveProduct = () => {
    console.log("Saving Product");
    console.log(product);
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
  };

  const couponChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    let copy = { ...coupon };
    copy[name] = value;
    setCoupon(copy);
  };

  return (
    <div className="admin">
      <h1>Store administration</h1>
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
