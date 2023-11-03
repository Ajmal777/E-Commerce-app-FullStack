import React from "react";
import Login from "../../Components/Forms/Login";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const VendorLogin = () => {
  const navigate = useNavigate();
  function handleSubmit(vendorData) {
    const URL = import.meta.env.VITE_BACKEND_URL;
    axios
      .post(`${URL}/vendor/login`, vendorData)
      .then((res) => {
        if (res.data.status == 200) {
          localStorage.setItem("token", res.data.data.token);
          alert(res.data.message);
          navigate("/ViewProducts");
        } else {
          alert(res.data.message);
        }
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
    console.log("inside login", vendorData);
  }
  return (
    <div>
      <h1>Login as Vendor</h1>
      <Login handleSubmit={handleSubmit}>
        <Link to="/">Login as Customer?</Link>
      </Login>
    </div>
  );
};

export default VendorLogin;
