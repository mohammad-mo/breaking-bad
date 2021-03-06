import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// Icons
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillCloseCircle } from 'react-icons/ai'

const NavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false)

  return (
    <header className='container'>
      <nav className='main-nav'>
        <h1>
          <span className='br-span'>Br</span>eaking{' '}
          <span className='ba-span'>Ba</span>d
        </h1>
        <div
          className='hamburger-menu'
          onClick={() => setShowMediaIcons(!showMediaIcons)}
        >
          {showMediaIcons ? <AiFillCloseCircle /> : <GiHamburgerMenu />}
        </div>
        <ul className={`menu-link ${showMediaIcons ? 'active' : ''}`}>
          <li>
            <NavLink to={{ pathname: '/characters' }}>Characters</NavLink>
          </li>
          <li>
            <NavLink to={{ pathname: '/quotes' }}>Quotes</NavLink>
          </li>
          <li>
            <NavLink to={{ pathname: '/episodes' }}>Episodes</NavLink>
          </li>
          <li>
            <NavLink to={{ pathname: '/deaths' }}>Deaths</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
