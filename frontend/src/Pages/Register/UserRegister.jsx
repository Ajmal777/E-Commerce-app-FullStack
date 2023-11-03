import React from 'react'
import Register from '../../Components/Forms/Register'
import { Link } from 'react-router-dom'
import axios from 'axios'
const UserRegister = () => {

  function handleSubmit(userData){
    const URL = import.meta.env.VITE_BACKEND_URL;
    axios.post(`${URL}/user/register`, userData)
    .then(res => {
      console.log(res.data);
      alert(res.data.message);
    })
    .catch(err => {
      console.log(err);
      alert(err.message);
    })
  }


  return (
    <div>
        <h1>Register as Customer</h1>
        <div className="form">
          <Register handleSubmit={handleSubmit}>
              <Link to='/Register/Vendor'>Register as Vendor?</Link>
          </Register>
        </div>
    </div>
  )
}

export default UserRegister