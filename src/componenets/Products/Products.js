import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../Context';
import './Product.css'

const Products = ({addtoCart}) => {
    var products = useContext(userContext)

   
 
   
   
  return (<div id='product'>
     {products.map(product => (
         <div className='card' key={product.id}>
                 <Link to={"/product/"+product.id}>
                     <img width="250px" alt=''  src={product.img}  />
                 </Link >
                 <div>
                <h3>
                 <Link to={"/product/"+product.id}> 
                  {product.title}
                 </Link>
                 </h3>
                 <span>{product.price}₺</span>
                 <p >{product.description}</p>
                 <button onClick={()=>addtoCart(product.id)}> Add to card</button>
                  </div>
             </div>
     ))}
  </div>);
};

export default Products;
