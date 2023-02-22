import React from 'react'
import CartProduct from '../CartProduct'
import Payment from '../Payment'

const Cart = () => {
  return (
    <div className='cart-container'>
        <CartProduct />
        <Payment />
    </div>
  )
}

export default Cart