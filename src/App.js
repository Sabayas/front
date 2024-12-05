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
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path= '/' element ={<Shop></Shop>}/>
        <Route path='/men' element ={<ShopCategory banner ={men_banner} category ="men"/>}/>
        <Route path='/women' element ={<ShopCategory banner ={women_banner} category ="women"/>}/>
        <Route path='/kid' element ={<ShopCategory banner ={kid_banner}category ="kid"/>}/>
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
