import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../Components/Product";
import "../PageStyles/vendorProducts.css";
const VendorProducts = () => {
  const [productList, setProductList] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Login to access this page");
      navigate("/");
    }
    const URL = import.meta.env.VITE_BACKEND_URL;
    axios
      .get(`${URL}/product/getVendorProducts`, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        if (res.data.status == 200) {
          setProductList(res.data.data);
        } else alert(res.data.message);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>Vendor Products</h1>
      <div className="products">
        {productList &&
          productList.map((product) => <Product data={product} />)}
      </div>
    </div>
  );
};

export default VendorProducts;
