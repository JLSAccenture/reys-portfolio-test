// rafce
import React, {useState} from 'react'
import "../../styles/hamburger.css"
import Rightnav from './Rightnav'


const Hamburger = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open) 
  }

  const isOpen = () => {
    return (
      <>
        <div className='hamburger-container open' onClick={handleClick}>
          <div className="hamburger-icon open"></div>
          <div className="hamburger-icon open"></div>
          <div className="hamburger-icon open"></div>
        </div>
      <div className='right-nav open'> <Rightnav/> </div>
      </>
    )
  }

  const isClose = () => {
    return (
      <>
        <div className='hamburger-container' onClick={handleClick}>
          <div className="hamburger-icon"></div>
          <div className="hamburger-icon"></div>
          <div className="hamburger-icon"></div>
        </div>
      <div className='right-nav'> <Rightnav/> </div>
      </>
    )
  }

  return (
    open ? isOpen() : isClose() 
  )
 
}

export default Hamburger
