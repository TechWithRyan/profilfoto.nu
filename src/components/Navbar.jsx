import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx';
import { VscChromeClose } from 'react-icons/vsc';
import P from "../Img/P.png";
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
                <img src={P} alt="" className='logo' />
                <div className="container">
                    <div className='head'>
                        <NavLink to="/"><h1 className='logo-text'>Profil<span className='color'>Foto.nu</span></h1></NavLink>
                    </div>

                    <div onClick={handleShowNavbar} onBlur={hide} onFocus={show} className="menu-icon">
                        {showNavbar ? (
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
                                <NavLink to="/Ryan" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Ryan</NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/Galleri" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Galleri</NavLink>
                            </li> */}
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
