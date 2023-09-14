import React from 'react'
import './About.css';
import 'animate.css/animate.min.css';
import { useEffect, useState } from 'react';


function About() {

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);


  return (
    <div className='aboutbox'>
      <h1 className={isAnimated ? 'animate__animated animate__bounceIn' : ''}>About Me</h1>
      <hr />

      <div className={`About ${isAnimated ? 'animate__animated animate__fadeInUp' : ''}`}>

        <div className={`aboutimg ${isAnimated ? 'animate__animated animate__fadeInLeft' : ''}`}>
          <img src="images/about.jpg" alt='avatr' />
        </div>

        <div className={`aboutme ${isAnimated ? 'animate__animated animate__fadeInRight' : ''}`}>
          <p>Hello! I'm Juli kumari, a passionate and aspiring BCA student. I'm currently pursuing my Bachelor's degree in Computer Applications at Manipal University Jaipur, and I'm thrilled to share my journey with you.
            Ever since I was a child, I've been fascinated by the world of technology and computers. My curiosity and love for problem-solving led me to choose BCA as my academic path. This program has been an exciting adventure filled with coding challenges, software development projects, and a deep dive into the world of IT.
            As a BCA student, I've delved into a wide range of subjects, including programming languages like Java, C++, and Python, database management, web development, and software engineering. I'm constantly striving to expand my knowledge and skills in these areas.
            I believe in the power of collaboration and learning from others. Feel free to connect with me on linkedin . Let's exchange ideas, collaborate on projects, and together, make the most of our BCA journey.
          </p>
        </div>
      </div>

    </div>

  )
}

export default About;