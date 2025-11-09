import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Errorpage from './Errorpage';

const Routing = () => {
    return ( 
<>

<BrowserRouter>
  <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Errorpage/>} />
  </Routes>

</BrowserRouter>




</>




     );
}
 
export default Routing;