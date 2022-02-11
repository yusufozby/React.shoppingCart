import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Colors from '../../Colors';
import './Details.css'

import { userContext } from '../../Context';

const Details = ({addtoCart}) => {

var ürünler =useContext(userContext) 
const [product,setProduct] = useState([])

const {id} = useParams(); 





const getProducts = () => {
const selectedProduct = ürünler.filter(prod =>  prod.id.toString() === id)

setProduct(selectedProduct)


   


}
console.log(product)
useEffect(()=>{
getProducts()
},[])





return (<div>
  { product.map(prod =>   <div className='details' key={prod.id}>
    <img  src={prod.img} alt=''/>
    <div className='box'>
      <div className='row'> 
      <h2>{prod.title}</h2>
      <span>{prod.price}₺</span>
      </div>
        <Colors Colors={prod.colors}/>
      <p>{prod.description}</p>
      <p>{prod.content}</p>
      <Link onClick={()=>addtoCart(prod.id)} to='/cart' className='cart'>
        Add to cart

      </Link>

      
      </div>
   
</div>)

}

  </div>);
};

export default Details;
