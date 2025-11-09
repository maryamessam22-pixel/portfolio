import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Errorpage from './Errorpage';
import CursorTrail from '../components/CursorTrail';

const Routing = () => {
    return ( 
<>

<BrowserRouter>
  <CursorTrail />
  <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Errorpage/>} />
  </Routes>

</BrowserRouter>




</>




     );
}
 
export default Routing;