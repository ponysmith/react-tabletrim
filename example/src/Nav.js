import React from 'react'
import { Link } from 'react-router-dom'

import './nav.css'

export const Nav = ({ isNavExpanded }) => {
  return (
    <nav id="nav-container" className={ (isNavExpanded) ? "expanded" : "" }>
      <Link className="nav-link" to="/">
        <span className="link-icon fas fa-home"></span>
        <span className="link-title">Overview</span>
      </Link>

      <div className="nav-divider"></div>
      
      <Link className="nav-link" to="/default">
        <span className="link-icon fas fa-table"></span>
        <span className="link-title">Default Settings</span>
      </Link>
      <Link className="nav-link" to="/columns">
        <span className="link-icon fas fa-columns"></span>
        <span className="link-title">Custom Columns</span>
      </Link>
      <Link className="nav-link" to="/controls">
        <span className="link-icon fas fa-sliders-h"></span>
        <span className="link-title">Custom Controls</span>
      </Link>
    </nav>
  )
}

export default Nav;