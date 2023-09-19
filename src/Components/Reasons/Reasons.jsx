import React from 'react'
import "./reasons.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import nike from "../../assets/nike.png"
import adidas from "../../assets/adidas.png"
import tick from "../../assets/tick.png"






function Reasons() {
  return (
    <div className='reasons' id='reasons'>
      <div className="left_r">
        <img src={image1}alt="Image" />
        <img src={image2}alt="Image" />
        <img src={image3}alt="Image" />
        <img src={image4}alt="Image" />
      </div>
      
      <div className="right_r">
        <span>Some Reasons </span>

        <div>
          <span className='stroke_text'>Why </span><span>Choose us ?</span>
        </div >

        <div className='details_r'> 
          <div>
            <img src={tick} alt="Image" />
            <span>over 140+ expert coaches</span>
          </div>

          <div>
            <img src={tick} alt="Image" />
            <span>train smarted and faster than before </span>
          </div>

          <div>
            <img src={tick} alt="Image" />
            <span>1 free program for new member </span>
          </div>

          <div>
            <img src={tick} alt="Image" />
            <span>reliable partners </span>
          </div>
        </div>

        <span className='partners_r'>our partners</span>
        <div className="partners_r_images">
          <img src={nb} alt="Image" />
          <img src={adidas} alt="Image" />
          <img src={nike} alt="Image" />
        </div>
      </div>

    </div>
  )
}

export default Reasons