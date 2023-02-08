import React from 'react';
import './Sidebar.css';
import { AiOutlineMenu } from 'react-icons/ai';

export default props => {
  return (
    <>
      <AiOutlineMenu className='menu' />
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/Priser">
        Priser
      </a>
      <a className="menu-item" href="/Kontakt">
        Kontakt
      </a>
      <a className="menu-item" href="/Media">
        Media
      </a>
    </>

  );
};