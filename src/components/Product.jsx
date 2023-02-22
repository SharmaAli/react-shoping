import React, { useEffect, useState } from 'react'
import useShop from '../ShopContext';

const Product = ({product}) => {
  const [isInCart, setIsInCart]= useState(false);
  const {addToCart, products, removeFromCart} =useShop();
  

  useEffect(()=>{
    const isCart = products.filter(prod => prod.id == product.id);

    if(isCart.length  >0){
      setIsInCart(true);
    }else{
      setIsInCart(false);
    }
    
  },[products]);

  const handleAdToCart = () =>{
    if(isInCart){
      removeFromCart(product);

    }else {
      addToCart(product);
    }
 
  }

  return (
    <div className='card' style={{minHeight: "100%", background : `linear-gradient(rgba(0,0,0,0.1), rgba(0,0, 0,0.1)), url(${product.urlImage})`, backgroundSize: "cover", backgroundRepeat :"no-repeat"}}>
        <div className='info'>
            <span>{product.name}</span>
            <span>{product.price}</span>
        </div>
        <button className={`btn ${isInCart? "btn-secondary" : "btn-primary" }`} onClick={handleAdToCart}>
          {isInCart? "-": "+"}
        </button>
    </div>
  )
}

export default Product