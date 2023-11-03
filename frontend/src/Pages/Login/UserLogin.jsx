import React from "react";
import Login from "../../Components/Forms/Login";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const navigate = useNavigate();
  function handleSubmit(userData) {
    const URL = import.meta.env.VITE_BACKEND_URL;
    axios
      .post(`${URL}/user/login`, userData)
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
  }
  return (
    <div>
      <h1>Login as Customer</h1>
      <Login handleSubmit={handleSubmit}>
        <Link to="/Login/Vendor">Login as Vendor?</Link>
      </Login>
    </div>
  );
};

export default UserLogin;
