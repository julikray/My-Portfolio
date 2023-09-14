import React from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.from_name.value.trim();
    const email = form.current.from_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all required fields.'); 
      return;
    }
    emailjs.sendForm('service_h6a0qc6', 'template_l4bvr9f', form.current, 'H7tu2bmsvJz5qL-bu')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
    <h1 className='animate__animated animate__bounceIn'>Contact Me</h1>
    <hr/>
    <div className='bigbox animate__animated animate__fadeIn'>
      
      <div className='texts'>
        <h2 className='animate__animated animate__fadeInDown'>Contact</h2>
        <p  className='animate__animated animate__fadeInUp' >Feel free to reach out!</p>
        <a href='https://www.linkedin.com/in/julikray/'><img className='linkedin animate__animated animate__fadeIn' src='https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png' alt='linkedin'/></a>
        <a href='https://github.com/julikray'><img className='github animate__animated animate__fadeIn' src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png' alt='github'/></a>
      
      </div>

        <form ref={form} onSubmit={sendEmail} className='animate__animated animate__fadeInRight'>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
    </div>
    </div>
  )
}

export default Contact