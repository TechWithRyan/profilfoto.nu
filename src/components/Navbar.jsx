import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx';
import { VscChromeClose } from 'react-icons/vsc';

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
                    <div className='head'>
                    <NavLink to="/"><h1 className='logo-text'>Profil<span className='color'>Foto.nu</span></h1></NavLink>
                    </div>
                    <div onClick={handleShowNavbar} onBlur={hide} onFocus={show} className="menu-icon">
                        { showNavbar ? ( 
                            <VscChromeClose />
                            ) : ( 
                                <RxHamburgerMenu size={20} />
                             )}
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
                                <NavLink to="/Medialist" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Foto</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Film" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Film</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
