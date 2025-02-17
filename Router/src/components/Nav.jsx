import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <>
     <nav>
        <h1>Tech Portal</h1>
          <Link className='link-list' to='/'>Home</Link>
          <Link className='link-list' to='/contact'>Contact</Link>
          <Link className='link-list' to='/about'>About</Link>
          

      </nav>
    </>
  )
}

export default Nav