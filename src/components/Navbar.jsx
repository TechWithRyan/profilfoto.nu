import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Twirl as Hamburger } from 'hamburger-react'
import "./Navbar.css";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)

    }

    const hide = () => setShowNavbar(false);
    const show = () => setShowNavbar(true);

    return (
        <>
            <nav className='navbar'>
                <div className="container">

                    <NavLink to="/"><h1 className='logo-text'>Profil<span className='color'>Foto.nu</span></h1><p>Bild & Video i Kungälv, Göteborg.</p></NavLink>
                    <div onClick={handleShowNavbar} onBlur={hide} onFocus={show} className="menu-icon">
                        <Hamburger size={20} />
                    </div>
                    <div className={`nav-elements ${showNavbar && "active"}`} >
                        <ul>
                            <li>
                                <NavLink to="/" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Hem</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Price" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Priser</NavLink>
                            </li>
                            <li>
                                <NavLink to="/About" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Kontakt</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Medialist" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Media</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
