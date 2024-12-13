import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Header from './Header';
import './assets/css/mitesh1.css';
import Heroslider from './Heroslider';
import Productinner from './Productinner';
import Login from './Login';
import Signup from './Signup';
import Forgot from './Forgot';
import Otp from './Otp';

/*Miteshj change*/

const root = ReactDOM.createRoot(document.getElementById('root'));
/* Request check*/
root.render(
  <>
    {/* <Contact/> */}
    <BrowserRouter>
    <Header/>
     
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/heroslider" element={<Heroslider />} /> 
        <Route path="/productinner" element={<Productinner />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup/>} /> 
        <Route path="/forgot" element={<Forgot/>} /> 
        <Route path="/otp" element={<Otp/>} /> 
      </Routes>
    </BrowserRouter>
  </>
);


