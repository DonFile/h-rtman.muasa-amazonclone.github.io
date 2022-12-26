import Login from './components/Login'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Nav from './components/Nav';
import SignUp from './components/SignUp';
import Checkout from './components/Checkout';
import React from 'react';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav/>
        <Routes>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
           <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
