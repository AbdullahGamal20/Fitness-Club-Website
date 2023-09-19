import React, { useState , useRef } from 'react'
import Logo from "../../assets/logo.png"
import Bars from "../../assets/bars.png"
import {Link} from "react-scroll";

import "./header.css"

function Header() {

  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }


  return (
    <div className='header'>
      <img src= {Logo} alt="Logo " className='logo'  />

      <div className={`bar_div ${isMenuOpen && ' active'}`} onClick={toggleMenu}>
        <img src={Bars} alt="Image" style={{ width: "1.5rem", height: '1.5rem' }} />
      </div>
    
      <ul className={`header_menu ${isMenuOpen && ' active'} `} ref={menuRef} >
        <li >
          <Link 
            to="hero"
            span={true}
            smooth={true}
          >Home</Link>
          </li>
        <li ><Link 
            to="programs"
            span={true}
            smooth={true}
          >Programs</Link>
        </li>
        <li ><Link 
            to="reasons"
            span={true}
            smooth={true}
          >Why Us</Link>
        </li>
        <li ><Link 
            to="plans"
            span={true}
            smooth={true}
          >Plans</Link></li>
        <li >
          <Link
            to='testimonial'
            span={true}
            smooth={true}
          >Testimonials</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header