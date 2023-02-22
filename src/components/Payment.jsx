import React, { useEffect, useState } from 'react'

const Payment = () => {
    const intitalMetod ={
        evc : false,
        edahab : false,
        paypal : false
    };

    const [payment, setPayment] = useState(intitalMetod);
    const [updated, setUpdate] =useState(true);

    useEffect(()=>{},[updated])
  return (
    <div className='paymentAll'>
        <div className="payment-cards">
            <h2>payment with</h2> 
            <div className={`payment-card ${payment.evc && "selected" }`}
            onClick={()=> setPayment({...intitalMetod, evc: true} )} >
                <h3>EVC plus </h3>
            </div>
            <div className={`payment-card ${payment.paypal && "selected"}`} 
            onClick ={()=>setPayment({...intitalMetod, paypal : true})}
            >
                <h3>paypal </h3>
            </div>
            <div className={`payment-card ${payment.edahab &&  "selected"}`}
            onClick={()=>setPayment({...intitalMetod, edahab: true})}
            >
            <h3>e Dahab </h3>
            </div>         
        </div>
        <form >
            <input type="text" className='form-control' placeholder='+25261.........' />
            <button className='roceedbtn'>proceed</button>
        </form>
    </div>
  )
}

export default Payment