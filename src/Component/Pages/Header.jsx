import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Images/logo.png";


const Header = () => {
  return (
    <header>
      <div className='container flex_space'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>

        <div className='contact flex_space '>
          <div className='box flex_space'>
            <div className='icons'>
              <i class='fa-regular fa-clock'></i>
            </div>
            <div className='text'>
              <h4>Working Hours</h4>
              <Link to='/contact'>Monday - Sunday: 9.00am to 6.00pm</Link>
            </div>
          </div>
          <div className='box flex_space'>
            <div className='icons'>
              <i class='fas fa-phone-volume'></i>
            </div>
            <div className='text'>
              <h4>Call Us</h4>
              <Link to='/contact'>01687454958</Link>
            </div>
          </div>
          <div className='box flex_space'>
            <div className='icons'>
              <i class='far fa-envelope'></i>
            </div>
            <div className='text'>
              <h4>Mail Us</h4>
              <Link to='/contact'>himel.cse96@gmail.com</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header