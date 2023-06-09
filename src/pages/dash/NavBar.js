import React, { useState } from 'react'
import Navlink from './NavLink';

const Navbar = () => {

  // const [mobileMenuVisible,setMobileMenuVisible]=useState(false);
  const [mobileMenuVisible,setMobileMenuVisible]=useState(false);
  const toggleMobileMenu =()=>{
    setMobileMenuVisible(!mobileMenuVisible);
  }
  return (
    <div className='navbar-wrapper'>
        <div className={`only-mobile mobile-option-menu ${(mobileMenuVisible)?"overlay":""}`}>
            <Navlink link="/dashboard/" class="m-nb nb" name="Home"/>
            <Navlink link="/dashboard/closet?source=mobile_menu" class="m-nb nb" name="Closet"/>
            <Navlink link="/dashboard/lookbook?source=mobile_menu" class="m-nb nb" name="Lookbook"/>
            <Navlink link="/dashboard/" class="m-nb nb" name="Shop"/> 
            <Navlink link="/dashboard/about" class="m-nb nb" name="About"/>
            <Navlink link="/" class="m-nb nb" name="Profile"/>
        </div>
        <div className='navbar'>

          <div className='logos logo'>Closet.io</div>
          <div className='only-mobile sec-1-option-button'>
            <button class={`hamburger hamburger--elastic ${(mobileMenuVisible)? "is-active" :""}`} type="button" onClick={toggleMobileMenu}>
                <span class="hamburger-box">
                <span class="hamburger-inner"></span>
                </span>
            </button> 
          </div>
        
          <div className='nav'>
              <Navlink link="/dashboard/" class="nb" name="Home"/>
              <Navlink link="/dashboard/closet" class="nb" name="Closet"/>
              <Navlink link="/dashboard/lookbook" class="nb" name="Lookbook"/>
              <Navlink link="/" class="nb" name="Shop"/>
              <Navlink link="/dashboard/about" class="nb" name="About"/>
              <Navlink link="/" class="nb" name="Profile"/>
          </div>
        </div>
    </div>
  )
}

export default Navbar
