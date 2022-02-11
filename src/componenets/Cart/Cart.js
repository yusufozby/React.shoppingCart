import React from 'react';
import { Link} from 'react-router-dom';
import Colors from '../../Colors';
import '../Details/Details.css'
import './Cart.css'


const Cart = ({cart,deleteProduct,decrease,increase}) => {
 
  if(cart.length  === 0 ) {
    return <h2 style={{"textAlign":"center"}}>No item in your card  !!</h2>
  }
  else {
    var sum = 0   
  cart.forEach(element => {
     sum += element.qty*element.price  
 });

 console.log(Math.floor(sum))



  
  return (<div>
    {cart.map(prod =>   <div className='details cart' key={prod.id}>
      <img  src={prod.img} style={{"marginTop":"20px"}} alt=''/>
      <div className='box'>
        <div className='row'> 
        <h2>{prod.title}</h2>
        <span>{Math.floor(prod.price*prod.qty)}₺</span>
        </div>
          <Colors Colors={prod.colors}/>
        <p>{prod.description}</p>
        <p>{prod.content}</p>
       <div className='amount'>
       <button className='count' onClick={()=>decrease(prod.id)}>-</button>
        <span>{prod.qty}</span>
        
        <button className='count' onClick={()=>increase(prod.id)}>+</button>
       
         </div>
       
         <button className='delete' onClick={()=>deleteProduct(prod.id)}>X</button>
        </div>
       
       
  </div>)
  
  }
  <div className='total'>
  <Link to="/payment">Payment</Link>
  <h3>Total:{Math.floor(sum)}₺</h3>
  </div>
    </div>
);
};

  }
     


 
 
  
  
   
  
 

export default Cart;
