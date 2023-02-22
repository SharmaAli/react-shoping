import React from 'react'
import { Link } from 'react-router-dom'
import useShop from '../ShopContext'
import "../style.css"
const Header = () => {
  const {products} =useShop();
  return (
    <div className='menu'>
       <Link to="/" className='logo'>Shop cart</Link>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contatc</Link>
            <Link to="/Cart">Cart</Link>
        </div>
       <Link to="/Cart"><span className='cart'>{products.length}</span></Link>
    </div>
  )
}

export default Header