import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop.jsx';

import './App.css';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import Footer from './Components/Footer/Footer.jsx';


function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path= '/' element ={<Shop></Shop>}/>
        <Route path='/mens' element ={<ShopCategory category ="men"/>}/>
        <Route path='/women' element ={<ShopCategory category ="women"/>}/>
        <Route path='/kids' element ={<ShopCategory category ="kid"/>}/>
        <Route path='/product' element ={<Product></Product>}/>
        
      </Routes>

      <Routes>
      <Route path='/cart' element = {<Cart/>}/>
      <Route path='/login' element = {<LoginSignup/>}/>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      

      
     
    </>
  );
}

export default App;
