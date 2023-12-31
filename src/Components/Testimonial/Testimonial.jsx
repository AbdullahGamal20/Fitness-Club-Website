import React, { useState } from 'react'
import {testimonialsData} from "../../data/testimonialsData"
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"
import {motion} from "framer-motion"
import "./testimonial.css"


function Testimonial() {
  const transition = {
    type:'spring',
    duration:3,
  }

  const [selected , setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className='testimonial'>
      <div className="left_t">
        <span>Testimonials</span>
        <span className='stroke_text'>what they</span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{opacity:0 , x:100}}
          animate={{opacity:1 , x:0}}
          exit={{opacity:0 , x:-100}}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{color:"var(--orange)"}}>{testimonialsData[selected].name} </span>   
          -<span> {testimonialsData[selected].status}</span>
        </span>
      </div>

      <div className="right_t">
        <motion.div
          initial={{opacity:0 , x:-100}}
          transition={{...transition , duration:2}}
          whileInView={{opacity:1 , x:0}}
        ></motion.div>

        <motion.div
          initial={{opacity:0 , x:100}}
          transition={{...transition , duration:2}}
          whileInView={{opacity:1 , x:0}}
        ></motion.div>

        <motion.img 
          key={selected}
          initial={{opacity:0 , x:100}}
          animate={{opacity:1 , x:0}}
          exit={{opacity:0 , x:-100}}
          transition={transition }
          src={testimonialsData[selected].image} alt="Image" />
        
        <div className='arrows'>
          <img 
            onClick={()=>{
              selected===0?setSelected(tLength-1):setSelected(prev=>prev - 1);
            }}
            src={leftArrow} alt="Arrow" />

          <img
            onClick={()=>{
              selected===tLength-1?setSelected(0):setSelected(next=>next + 1);
            }}
            src={rightArrow} alt="Arrow" />
        </div>
      
      </div>
    </div>
  )
}




export default Testimonial