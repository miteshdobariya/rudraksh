import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Header from './Header';
import './assets/css/mitesh1.css';
import Heroslider from './Heroslider';
import Contact from './Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>fjhkwsbdasifkhhsad</h1>
    {/* <Contact/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/heroslider" element={<Heroslider />} /> 
      </Routes>
    </BrowserRouter>
  </>
);


