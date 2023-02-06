import './App.css';
import { Link, Route, Routes } from "react-router-dom"
import Home from './Pages/Home';
import Price from './Pages/Price';
import About from './Pages/About';
import MediaList from './Pages/MediaList';
import Media from './Pages/Media';
import NewMedia from './Pages/NewMedia';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
   
   <div className='App'>
    </div>
      <nav className='nav'>
          <Link to="/"><h1 className='logo-text'>Profil<span className='color'>Foto.nu</span></h1></Link>
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
      </nav>
      

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
