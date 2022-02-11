
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './componenets/Header/Header';
import Section from './componenets/Section/Section';
import { userContext } from './Context';
import { useState } from 'react';


function App() {
  const [cart,setCart ] = useState([])


 const products = [{
   id:1,
   title:"Nike shoes 03",
   img:"https://n11scdn.akamaized.net/a1/450/spor-outdoor/basketbol/nike-cocuk-basketbol-ayakkabisi-aq4224-100-team-hustle-d-9-gs__0834884109602992.jpg",
   description:"UI/UX desinging, html css tutorials",
   content:"This is my trial shopping cart project",
   price:70,
   colors:["red","black","crimson","teal"],
   qty:1
 },
 {
  id:2,
  title:"Nike shoes 04",
  img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/616900b5-a644-4157-972c-8cf610e385f0/mx-720-818-ayakkab%C4%B1s%C4%B1-dNDt9j.png",
  description:"UI/UX desinging, html css tutorials",
  content:"This is my trial shopping cart project",
  price:87.45,
  colors:["red","black","crimson","teal"],
  qty:1
 },{
  id:3,
  title:"Nike shoes 05",
  img:"https://productimages.hepsiburada.net/s/31/600-800/10335794528306.jpg",
  description:"UI/UX desinging, html css tutorials",
  content:"This is my trial shopping cart project",
  price:69.74,
  colors:["red","black","crimson","teal"],
  qty:1
 },{
  id:4,
  title:"Nike shoes 06",
  img:"https://barcin.akinoncdn.com/products/2021/02/04/131529/3e2f3bae-16eb-498f-b826-11f4dc47d747.jpg",
  description:"UI/UX desinging, html css tutorials",
  content:"This is my trial shopping cart project",
  price:90.37,
  colors:["red","black","crimson","teal"],
  qty:1
 },
 {
  id:5,
  title:"Nike shoes 07",
  img:"https://cdn03.ciceksepeti.com/cicek/kc5735459-1/XL/nike-bq5671-mavi-beyaz-siyah-unisex-spor-ayakkabi-kc5735459-1-38055803019f48e9aa5a0cc55017701e.jpg",
  description:"UI/UX desinging, html css tutorials",
  content:"This is my trial shopping cart project",
  price:76.52,
  colors:["red","black","crimson","teal"],
  qty:1
 },
 {
  id:6,
  title:"Nike shoes 08",
  img:"https://cdn.cimri.io/image/1000x1000/nikeaqsarjrmagistaolaiifgocukhalsahaerkeksporayakkab_214518432.jpg",
  description:"UI/UX desinging, html css tutorials",
  content:"This is my trial shopping cart project",
  price:76.52,
  colors:["red","black","crimson","teal"],
  qty:1
 }

 




 
 
  


]



 const addtoCart = (id) => {
   var addedProduct = products.find(prod => prod.id === id)


   const isEmpty = cart.some(item => item.id === id)
 
 
 if(!isEmpty) {
const newCart = [...cart,addedProduct]
setCart(newCart)
 }
 else {
   alert("Product has been added")
 }
 



   }
  
 
   const increase = (id) => {
     
    const updateCart = [...cart]
    var item = updateCart.find(x => x.id === id)
    console.log(item)
     item.qty += 1
     console.log(item.qty)
     console.log(updateCart)
   
    
  
    setCart(updateCart)
  }

   const decrease = (id) => {
     
    const updateCart = [...cart]
    const item = updateCart.find(x => x.id === id)
    console.log(item)
     item.qty === 1 ? item.qty = 1 : item.qty -= 1
     console.log(item.qty)
     console.log(updateCart)
   
    
  
    setCart(updateCart)
  }

  const deleteProduct = (id) => {
    if(window.confirm("Are you sure to delete this ?")){
    const deleteFromCart = cart.filter(product => product.id !== id)
    setCart(deleteFromCart)
    }
  }   

  

  return (
  <userContext.Provider  value={products}>
    <div className="App">

    
    <Router>
<Header cardLength={cart.length}/>
<Section deleteProduct={deleteProduct} decrease={decrease} increase={increase}  addtoCart={addtoCart} cart={cart}  />
    </Router>
    </div>
    </userContext.Provider>
  );
}

export default App;
