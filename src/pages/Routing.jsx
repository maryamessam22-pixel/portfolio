import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './index';
import About from './About';
import Errorpage from './Errorpage';
import CursorTrail from '../components/CursorTrail';

const Routing = () => {
    return ( 
<>

<BrowserRouter>
  <CursorTrail />
  <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<Errorpage/>} />
  </Routes>

</BrowserRouter>




</>




     );
}
 
export default Routing;