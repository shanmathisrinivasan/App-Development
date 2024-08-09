import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AHome from '../components/AHome';
import AAHome from '../components/AAHome';
import Signup from '../components/Signup';
import Age from '../components/Age';
import Library from '../components/Library';
import Lib from '../components/Lib';
import { BooksProvider } from '../components/BooksContext';
import Aboutus from '../components/Aboutus';
import Contact from '../components/Contact';
import Premium from '../components/Premium';

//import Doption from '../components/Doption';
const App = () => {
    return (
        <BooksProvider>
        <Routes>
          <Route path="/" element={<AAHome/>} />
          <Route path="/ahome" element={<AHome/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/age" element={<Age />} />
          <Route path="/library" element={<Library />} />
          <Route path="/lib" element={<Lib />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/premium" element={<Premium />} />

          
        </Routes>
        </BooksProvider>
    );
  };
  
  export default App;