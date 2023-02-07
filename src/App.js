import './App.css';
import { Link, Route, Routes } from "react-router-dom"
import Home from './Pages/Home';
import Price from './Pages/Price';
import About from './Pages/About';
import MediaList from './Pages/MediaList';
import Media from './Pages/Media';
import NewMedia from './Pages/NewMedia';
import NotFound from './Pages/NotFound';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  return (
    <>
   
   <div className='App'>
    </div>
      <nav className='nav'>

      <div className='burger-menu'>
      <div className={burger_class}></div>
      <div className={burger_class}></div>
      <div className={burger_class}></div>

      </div>
          <Link to="/"><h1 className='logo-text'>Profil<span className='color'>Foto.nu</span></h1><p>Bild & Video i Kungälv, Göteborg.</p></Link>
          
        <ul className='navbar'>
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/Price">Priser</Link>
          </li>
          <li>
            <Link to="/About">Kontakt</Link>
          </li>
          <li>
            <Link to="/Medialist">Media</Link>
          </li>
        </ul>
        <Footer />
      </nav>
      <div className={menu_class}></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Media">
          <Route path=":id" element={<Media /> } />
        </Route>
        <Route path="/Price" element={<Price />} />
        <Route path="/About" element={<About />} />
        <Route path="/Medialist" element={<MediaList />} />
        <Route path="/Media/:id" element={<Media />} />
        <Route path="/Media/new" element={<NewMedia />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>

  );
}

export default App;
