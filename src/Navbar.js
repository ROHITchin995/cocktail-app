import React from 'react'
import logo from '../src/logo.svg'
export const Navbar = () => {
  return (
    <nav className='navbar'>
    <div className='nav-center'>
        <img src={logo} alt="cocktail db logo" className='logo' />
        <ul className='nav-links'>
            <li>Home</li>
            <li>About</li>
        </ul>
    </div>
    </nav>
  )
}
