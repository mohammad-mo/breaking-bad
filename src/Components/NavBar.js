import React from "react"
import logo from "../images/logo.png"

const NavBar = () => 
{
  return (
    <header className="container">
      <h1>Breaking Bad</h1>
      <nav>
        <ul>
          <li><a href="#" className="active">Characters</a></li>
          <li><a href="#">Quotes</a></li>
          <li><a href="#">Episodes</a></li>
          <li><a href="#">Deaths</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
