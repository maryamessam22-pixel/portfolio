import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './index';
import About from './About';
import UIUX from './UIUX';
import Errorpage from './Errorpage';
import CursorTrail from '../components/CursorTrail';
import Articles from './Articles';
import Contact from './Contact';

const Routing = () => {
    return ( 
<>

<BrowserRouter>
  <CursorTrail />
  <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/uiux' element={<UIUX />} />
      <Route path='/articles' element={<Articles/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='*' element={<Errorpage/>} />
  </Routes>

</BrowserRouter>




</>




     );
}
 
export default Routing;