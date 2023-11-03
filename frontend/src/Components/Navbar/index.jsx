import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import { Button } from 'antd'
const Navbar = () => {
  const navigate = useNavigate();
  function handleLogout(){
    localStorage.removeItem('token');
    alert('logged out successfully');
    navigate('/');
  }

  return (
    <div className='navbar'>
        <h1>ShoppingCart</h1>
        <div className="links">
            <Link to='/Register'>Register</Link>
            <Link to='/'>Login</Link>
            <Link to='/ViewProducts'>View Products</Link>
            <Link to='/CreateProduct'>Create Product</Link>
            <Link to='/myProducts'>My Products</Link>
        </div>
        <Button type='primary' onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Navbar