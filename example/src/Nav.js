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
      
      <Link className="nav-link" to="/basic">
        <span className="link-icon fas fa-table"></span>
        <span className="link-title">Basic Example</span>
      </Link>
      <Link className="nav-link" to="/active-col">
        <span className="link-icon fas fa-columns"></span>
        <span className="link-title">Set Active Column</span>
      </Link>
      <Link className="nav-link" to="/active-col-callback">
        <span className="link-icon fas fa-sliders-h"></span>
        <span className="link-title">Active Column Callback</span>
      </Link>
    </nav>
  )
}

export default Nav;