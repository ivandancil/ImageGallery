import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/profile.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <p>IMAGE GALLERY UI</p>
        <img src={navlogo} alt="" className="nav-profile" />
    </div>
  )
}

export default Navbar