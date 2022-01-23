import React, { useState } from "react"
import { NavLink } from 'react-router-dom'

import Hamburger from 'hamburger-react'

const NavBar = () => 
{
  const [showMediaIcons, setShowMediaIcons] = useState(false)
  const [isOpen, setOpen] = useState(false)

  return (
    <header className="container">
      <nav className="main-nav">
        <h1>Breaking Bad</h1>
        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <Hamburger className size={28} toggled={isOpen} toggle={setOpen} />
        </div>
        <ul className={`menu-link ${showMediaIcons ? 'active' : ''}`}>
          <li><NavLink to={{ pathname: '/' }}>Characters</NavLink></li>
          <li><NavLink to={{ pathname: '/quotes' }}>Quotes</NavLink></li>
          <li><NavLink to={{ pathname: '/episodes' }}>Episodes</NavLink></li>
          <li><NavLink to={{ pathname: '/deaths' }}>Deaths</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
