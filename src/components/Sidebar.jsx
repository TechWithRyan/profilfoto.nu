import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx';
import { VscChromeClose } from 'react-icons/vsc';
import P from "../Img/P.png";
import "./Navbar.css";

const Sidebar = () => {

    const [showSideBar, setShowSidebar] = useState(false);
    const handleShowSideBar = () => {
        setShowSidebar(!showSideBar)
    }

    const hideSide = () => setShowSidebar(false);
    const showSide = () => setShowSidebar(true);

    return (
        <>
            <nav className='navbar'>
                <img src={P} alt="" className='logo' />
                <div className="container">
                   
                    <div onClick={handleShowSideBar} onBlur={hideSide} onFocus={showSide} className="sidebar">
                        {showNavbar ? (
                            <VscChromeClose />
                        ) : (
                            <RxHamburgerMenu size={20} />
                        )}
                    </div>
                    <div className={`nav-elements ${showSidebar && "active"}`} >
                        <ul>
                            <li>
                                <NavLink to="/https://www.youtube.com/channel/UCOg3PF76vT3K6DMGcU7-XzA" onClick={handleShowSideBar} onBlur={hideSide} onFocus={showSide}>YouTube</NavLink>
                            </li>
                            <li>
                                <NavLink to="/https://www.facebook.com/ryanphillips.cornelio/" onClick={handleShowSideBar} onBlur={hideSide} onFocus={showSide}>Facebook</NavLink>
                            </li>
                            <li>
                                <NavLink to="/https://www.instagram.com/techwithryan/" onClick={handleShowSideBar} onBlur={hideSide} onFocus={showSide}>Instagram</NavLink>
                            </li>
                            <li>
                                <NavLink to="/discordapp.com/users/415209212969222146" onClick={handleShowSideBar} onBlur={hideSide} onFocus={showSide}>Discord</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Sidebar
