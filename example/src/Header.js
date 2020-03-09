import React from 'react'

import './header.css'

export const Header = ({ onMenuButtonClick }) => {
  return (
    <header id="header-container">
      <button className="menu-button" onClick={onMenuButtonClick}><span className="fas fa-bars"></span></button>
      <h1 className="header-title">react-tabletrim</h1>
      <div className="header-links">
        <a href="https://github.com/ponysmith/react-tabletrim"><span className="header-link fab fa-github"></span></a>
      </div>
    </header>
  )
}

export default Header;
