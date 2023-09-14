import React from 'react'
import "./Projectcard.css";

function Projectcard({ image, title, description, demo, source }) {
  return (

    <div className='card animate__animated animate__fadeIn'>
      <img className='img' src={image} alt='' />
      <div className='info animate__animated animate__fadeIn'>
        <div className='textinfo'>
          <h4 className='animate__animated animate__fadeInDown'>{title}</h4>
          <p className='animate__animated animate__fadeInUp'>{description}</p>
          <p className='animate__animated animate__fadeIn' ><button><a href={demo}>Demo</a></button>  <button><a href={source}>Source</a></button> </p>
        </div>
      </div>
    </div>
  )
}

export default Projectcard