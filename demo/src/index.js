import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import About from './About/About';
import Rings from './Rings/Rings';
import Earrings from './Earrings/Earrings';
import Bracelets from './Bracelets/Bracelets';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="Contact" element={<Contact/>} />
        <Route path="rings" element={<Rings />} />
        <Route path="earrings" element={<Earrings/>} />
        <Route path="bracelets" element={<Bracelets />} />
       </Routes>
      <Footer/>
    </BrowserRouter>
    </>
);

