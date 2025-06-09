
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';

// eslint-disable-next-line




function App() {
  return (
    <div>
      <BrowserRouter>
     <Navbar/>
      <Routes>
       <Route path='/' element={<HomePage/>}></Route>
       <Route path='/About' element={<About/>}> </Route>
       <Route path='/Services' element={<Services/>}></Route>
       <Route path='/Projects' element={<Projects/>}></Route>
       <Route path='/Contacts' element={<Contacts/>}></Route>
       
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
