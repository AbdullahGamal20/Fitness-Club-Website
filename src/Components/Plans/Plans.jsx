import React from 'react'
import {plansData} from "../../data/plansData"
import "./plans.css"
import whiteTick from "../../assets/whiteTick.png"

function Plans() {
  return(
    <div className='plans_container'>
      <div className="blur blur_p_1"></div>
      <div className="blur blur_p_2"></div>

      <div className="programs_header" style={{gap:"2rem"}}>
        <span className='stroke_text'>ready to start</span>
        <span>your journey</span>
        <span className='stroke_text'>now with us</span>
      </div>

      <div className="plans">
        <PlansData />
      </div>
    </div>
  )
}

const PlansData = ()=>{
  return(
    <>
    {
      plansData.map((plan , index)=>{
        return(
            <div className="plan" key={index}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>
              <div className="features">
                {plan.features.map((feature , i) =>{
                  return(
                    <div className="feature" key={i} >
                      <img src={whiteTick} alt="Image" />
                      <span >{feature}</span>
                    </div>
                  )
                })}
              </div>

              <div>
                <span>see more benefits --> </span>
              </div>

              <button className="btn">join now</button>
            </div>
        )
      })
    }
    </>
  )
}

export default Plans