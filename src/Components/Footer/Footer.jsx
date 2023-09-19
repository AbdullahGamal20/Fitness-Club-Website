import React from 'react'
import gitHub from "../../assets/github.png"
import instagram from "../../assets/instagram.png"
import logo from "../../assets/logo.png"
import linkedin from "../../assets/linkedin.png"
import "./footer.css"


function Footer() {
  return (
    <div className='footer_container'>
      <hr />
      <div className="footer">

        <div className="social_links">
          <img src={gitHub} alt="Image" />
          <img src={instagram} alt="Image" />
          <img src={linkedin} alt="Image" />
        </div>

        <div className="logo_f">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="blur blur_f_1"></div>
      <div className="blur blur_f_2"></div>

      
    </div>
  )
}

export default Footer