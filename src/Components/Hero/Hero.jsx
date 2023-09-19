import React from 'react'
import Header from '../Header/Header'
import heroImage from "../../assets/hero_image.png"
import heroImageBack from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import{motion} from "framer-motion"
import  NumberCounter from "number-counter"
import "./hero.css"




function Hero() {

  const transition = {
    type:'spring',
    duration:3,
  }

  const mobile =window.innerWidth <= 768 ? true :false;


  return (
    <div className='hero'>
      <div className="blur blur_h"></div>
      <div className="left_h"> 
        <Header />

        <div className="the_best_ad">
          <motion.div
            initial={{left: mobile? "165px":'238px'}}
            whileInView={{left:'8px'}}
            transition = {{...transition , type:"tween"}}
          ></motion.div>
          <span>the best fitness club in the town </span>
        </div>

        <div className="hero_text">

          <div>
            <span className='stroke_text'>Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal Body</span>
          </div>

          <div>
            <span>in here we will help you to shape and build your 
              ideal body and live up your life to fullest 
            </span>
          </div>

        </div>

        <div className="figures">
          <div>
            <span><NumberCounter end={140} start={100} delay='4' preFix ="+" /></span>
            <span>expert coaches</span>
          </div>
          <div>
            <span><NumberCounter end={987} start={800} delay='4' preFix ="+" /></span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={0} delay='4' preFix ="+" /></span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero_btns">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>

    
      </div>


      <div className="right_h">

        <button className='btn join-btn'>Join Now</button>

        <motion.div 
          initial={{right:"-1rem"}}
          whileInView={{right:"4rem"}}
          transition={transition}
          className="heart_rate">
          <img src={heart} alt="Image" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={heroImage} alt="Image" className='hero_image' />
        <motion.img 
          initial={{right:"11rem"}}
          whileInView={{right:"20rem"}}
          transition={transition}
          src={heroImageBack} alt="Image" className='hero_image_back'/>
        

        <motion.div 
          initial={{right:"37rem"}}
          whileInView={{right:"28rem"}}
          transition={transition}
          className="calories">
          <img src={calories} alt="Image" />
          <div>
            <span className='first'>Calories <span>Burned</span></span>
            <span>220 kcal</span>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Hero