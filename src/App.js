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

/* import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Example = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return <div>
    <h1>Device Test!</h1>
    {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
    {isBigScreen && <p>You  have a huge screen</p>}
    {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
    <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
    {isRetina && <p>You are retina</p>}
  </div>
} */


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

      {/* Side menu */}
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
