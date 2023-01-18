import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <nav className='navbar'>
      <div className='container flex_space'>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to='/' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' onClick={closeMobileMenu}>
              About us
            </Link>
          </li>
          <li>
            <Link to='/gallery' onClick={closeMobileMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to='/destinations' onClick={closeMobileMenu}>
              Destination
            </Link>
          </li>
          <li>
            <Link to='/blog' onClick={closeMobileMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link to='/testimonial' onClick={closeMobileMenu}>
              Testimonial
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
        </ul>

        <div className='login-area flex'>
          <li>
            <Link to='/sign-in'>
              <i class='fa-solid fa-chevron-right'></i>Sign in
            </Link>
          </li>
          <li>
            <Link to='/register'>
              <i class='fa-solid fa-chevron-right'></i>Register
            </Link>
          </li>
          <li>
            <Link to='/contact'>
              <button className='primary-btn'>Request a Quote</button>
            </Link>
          </li>
        </div>
      </div>
    </nav>

    
  </>
    // <>
    //   <nav className="navbar">
    //     <div className="container flex_space">
    //       <div className="menu_icon" onClick={handleClick}>
    //         <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
    //       </div>

    //       <ul className={click ? "nav_menu active" : "nav_menu"}>
    //         <li>
    //           <Link exact to="/" onClick={closeMobileMenu}>
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/about" onClick={closeMobileMenu}>
    //             About
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/gallery" onClick={closeMobileMenu}>
    //             Gallery
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/destination" onClick={closeMobileMenu}>
    //             Destination
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/blog" onClick={closeMobileMenu}>
    //             Blog
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/testimonial" onClick={closeMobileMenu}>
    //             Testimonial
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/contact" onClick={closeMobileMenu}>
    //             Contact Us
    //           </Link>
    //         </li>
    //       </ul>
    //       <div className="login_area flex">
    //         <li>
    //           <Link to="/sign-in">
    //             <i class="fa-solid fa-chevron-right">Sign In</i>hii
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/register">
    //             <i className="fa-solid fa-chevron-right">Register</i>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/contact">
    //             <i className="primary_btn">Request a Quote</i>
    //           </Link>
    //         </li>
    //       </div>
    //     </div>
    //   </nav>
    //   <header>
    //     <div className="container flex_space">
    //       <div className="logo">
    //         <img src={logo} alt="" />
    //       </div>

    //       <div className="contact flex_space">
    //         <div className="box flex_space">
    //           <div className="icons">
    //             <i class="fa-regular fa-clock"></i>
    //           </div>
    //           <div className="text">
    //             <h4>Working Hours</h4>
    //             <Link to="/contact">Monday - Sunday: 9.00am to 6.00pm</Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="contact flex_space">
    //         <div className="box flex_space">
    //           <div className="icons">
    //             <i class="fa-sharp fa-solid fa-phone"></i>
    //           </div>
    //           <div className="text">
    //             <h4>Call Us Hours</h4>
    //             <Link to="/contact">+8801687454958</Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="contact flex_space">
    //         <div className="box flex_space">
    //           <div className="icons">
    //             <i class="fa-regular fa-envelope"></i>
    //           </div>
    //           <div className="text">
    //             <h4>Mail Us</h4>
    //             <Link to="/contact">himel.cse96@gmail.com</Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    // </>
  );
};

export default Navbar;
