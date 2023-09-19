import React from 'react'
import "./programs.css"
import {programsData} from "../../data/programsData"
import rightArrow from "../../assets/rightArrow.png"


function Programs() {
  return (
    <div className='programs' id='programs'>
      <div className="programs_header">
        <span className='stroke_text'>Explore Our </span>
        <span>Programs </span>
        <span className='stroke_text'>To Shape You</span>
      </div>

      <div className="programs_categories">
        {<Cards/>}
      </div>
    </div>
  )
}

const Cards = ()=>{
  return(
    programsData.map((program , index)=>{
      return(
        <div className="category" key={index}>
          {program.image}
          <span>{program.heading}</span><span>{program.details}</span>
          <div className="join_now">
            <span>Join Now</span>
            <img src={rightArrow} alt="Image" />
          </div>
        </div>
      )
    })
  )
}

export default Programs