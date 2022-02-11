import React   from 'react';

import cart from '../svg/shopping-cart-solid.svg'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = ({cardLength}) => {
 
  
  return( <header>
      <div className='menu'>
   
  </div>
  <div className='logo'>
  <h1><Link to='/' >Nike </Link></h1>
  </div>

  
  <nav>
   <ul >
       <li>
           <Link to="/">Home</Link>
       </li>
       <li>
           <Link to="/product">Product</Link>
       </li>
       <li>
           <Link to="/">Contact</Link>
       </li>
       <li>
           <Link to="/">About</Link>
       </li>
      
       <li>
           <Link to="/">Login / Register</Link>
       </li>
       <li>
           
       </li>

   </ul>

   <div className='nav-cart'>
   <span>{cardLength}</span>
   <Link to="/cart">
   <img width="20px" alt="" src={cart}/>
   </Link>
   </div>
  </nav>

  </header>);
};

export default Header;
