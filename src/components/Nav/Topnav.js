import React from 'react'
import { Link } from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../../styles/topnav.css'

const Topnav = () => {
  return (
    <div>
      <nav className='nav-container'>
        <ul className='navlinks-list'>
          <Link to='/'>
            <li className='nav-links'>Home</li>
          </Link>
          <Link to='/projects'>
            <li className='nav-links'>Projects</li>
          </Link>
          {/* <Link to='/contact'>
            <li className='nav-links'>Contact</li>
          </Link>
          <Link to='/about'>
            <li className='nav-links'>About</li>
          </Link> */}
        </ul>
        <div>

        <h1>Rey Alvarez</h1>
        </div>
        <div className='nav-icons-container'>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/reynaldoalvarezjr/'>
            <LinkedInIcon className='nav-icons' fontSize='large'/>
          </a>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/reynaldoalvarezjr/'>
            <GitHubIcon className='nav-icons' fontSize='large'/>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Topnav
