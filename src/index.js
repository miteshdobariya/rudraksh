import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Header from './Header';
import './assets/css/mitesh1.css';
import Heroslider from './Heroslider';
import Contact from './Contact';
import Productinner from './Productinner';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    
    {/* <Contact/> */}
    <BrowserRouter>
    <Header/>
      vjkldhicufhjh
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/heroslider" element={<Heroslider />} /> 
        <Route path="/productinner" element={<Productinner />} /> 
      </Routes>
    </BrowserRouter>
  </>
);


