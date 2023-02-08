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
import { Twirl as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import { Sidebar, Menu, SubMenu, MenuItem, useProSidebar } from 'react-pro-sidebar';


function App() {
  const [isOpen, setOpen] = useState(false)
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

  return (
    <>
      <nav className='nav'>


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
      <div className='App' id="outer-container">
        <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
        <Sidebar>
          <Menu>
            <SubMenu label="Meny">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Priser </MenuItem>
            <MenuItem> Media </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </>

  );
}

export default App;
