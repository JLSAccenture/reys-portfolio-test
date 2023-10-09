import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/rightnav.css'

const Rightnav = () => {
  return (
    // <div>
    // I changed this from a class to an ID
     <nav id='right-nav'>
      <ul className='right-nav-links-container'>
        <Link to='/'>
        <li className='right-nav-link'>Home</li>
        </Link>
        <Link to='/projects'>
        <li className='right-nav-link'>Projects</li>
        </Link>
        <Link to='/contacts'>
        <li className='right-nav-link'>Contact</li>
        </Link>
      </ul>
     </nav>
    // </div>
  )
}

export default Rightnav
