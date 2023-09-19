import React, { useRef } from 'react'
import "./join.css"
import emailjs from "@emailjs/browser"


function Join() {
  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ze7znhe', 'template_hzz77ki', form.current, 'xF2ZjR9GPapIq0LL0 ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='join' id='join-us'>
      <div className="left_j">
        <hr />
        <div className='first_text'>
          <span className='stroke_text'>ready to</span>
          <span>level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className='stroke_text'>with us ?</span>
        </div>
      </div>

      <div className="right_j">
        <form ref={form} className="email_container" onSubmit={sendEmail}>
          <input type="email" name='user-email' placeholder='Enter Your Email' />
          <button className='btn btn_join'>Join Now</button>
        </form>
      </div>

    </div>
  )
}

export default Join