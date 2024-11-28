import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
     <Router>  
        <Navbar />  
        <Routes>  
          <Route path='/' element={<Home />} />  
          <Route path='/services' element={<Services />} />  
          <Route path='/products' element={<Products />} />  
          <Route path='/signup' element={<SignUp />} />  
        </Routes>  
      </Router>  
    </>
  );
}

export default App;
