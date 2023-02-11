import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home';
import Price from './Pages/Price';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Film from './Pages/Film';
import Galleri from './components/Galleri';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Media" />
        <Route path="/Price" element={<Price />} />
        <Route path="/About" element={<About />} />
        <Route path="/Galleri" element={<Galleri />} />
        <Route path="/Film" element={<Film />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />


    </>

  );
}

export default App;
