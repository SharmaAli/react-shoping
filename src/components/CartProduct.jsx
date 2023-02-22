import React from 'react'
import useShop from '../ShopContext';

const CartProduct = () => {
    const {products , removeFromCart , total }=useShop();
  return (
    <div className='cart-products'>
        <h2>Cart products</h2>
            {products.map(product =>(
                <div className='cart-product'>
                    <div className="product-title-img">
                        <img src={product.urlImage} alt="" />
                        <span>{product.name}</span>
                    </div>
                <h3>${product.price}</h3>
                <span className='delete'
                onClick={() =>removeFromCart(product)}
                >delele</span>
            </div>
        ))};

    <div className="total-price">
        <h2> total price : ${total}</h2>
    </div>
    </div>
  )
}

export default CartProduct;