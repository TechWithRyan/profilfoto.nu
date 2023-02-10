import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home';
import Price from './Pages/Price';
import About from './Pages/About';
import Media from './Pages/Media';
import NewMedia from './Pages/NewMedia';
import MediaList from './Pages/MediaList';
import NotFound from './Pages/NotFound';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {

  return (
    <>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Media">
          <Route path=":id" element={<Media />} />
        </Route>
        <Route path="/Price" element={<Price />} />
        <Route path="/About" element={<About />} />
        <Route path="/Medialist" element={<MediaList />} />
        <Route path="/Media/:id" element={<Media />} />
        <Route path="/Media/new" element={<NewMedia />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
        <Footer />

      
    </>

  );
}

export default App;
