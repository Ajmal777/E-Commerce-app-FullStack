import React from 'react'
import Register from '../../Components/Forms/Register'
import { Link } from 'react-router-dom'
import axios from 'axios';

const VendorRegister = () => {

  function handleSubmit(vendorData){
    const vendorObj = {
      name: vendorData.name,
      vendorname: vendorData.username,
      email: vendorData.email,
      password: vendorData.password
    }
    const URL = import.meta.env.VITE_BACKEND_URL;
    axios.post(`${URL}/vendor/register`, vendorObj)
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
        <h1>Register as Vendor</h1>
        <Register handleSubmit={handleSubmit}>
            <Link to='/Register'>Register as Customer?</Link>
        </Register>
    </div>
  )
}

export default VendorRegister