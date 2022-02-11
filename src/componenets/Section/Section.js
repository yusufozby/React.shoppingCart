
import { Route, Routes } from 'react-router-dom';

import Cart from '../Cart/Cart';
import Details from '../Details/Details';
import Payment from '../Payment/Payment';
import Products from '../Products/Products';
const Section = ({cart,addtoCart,increase,deleteProduct,decrease}) => {
 
  return (
<section>
  <Routes>
    <Route path="/product" element={<Products addtoCart={addtoCart}/>} />
    <Route path="/" element={<Products addtoCart={addtoCart}/>} />
    <Route path="/product/:id" element={<Details addtoCart={addtoCart} />} />
    <Route path="/cart" element={<Cart cart={cart}  deleteProduct={deleteProduct} increase={increase} decrease={decrease} />} />
    <Route path='/payment' element={<Payment/>}/>
        </Routes>
</section>
 );
};

export default Section;
