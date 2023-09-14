import React from 'react';
import "./Home.css"
import { Typewriter } from 'react-simple-typewriter'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useEffect, useState } from 'react';


function Home() {


  

  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextVisible(true);
    }, 500);
  }, []);

  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };


  return (
    <div className='home'>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000",
            },
          },

          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "images",
              images: [
                {
                  src: "images/html.png",
                  width: 100,
                  height: 100,


                },
                {
                  src: "images/js.png",
                  width: 100,
                  height: 100,

                },
                {
                  src: "images/css.png",
                  width: 100,
                  height: 100,

                },
                {
                  src: "images/reactjs.png",
                  width: 100,
                  height: 100,
                },
                {
                  src: "images/tailwind.png",
                  width: 100,
                  height: 100,

                },

                {
                  src: "images/bootstrap.png",
                  width: 100,
                  height: 100,

                },


              ],
              stroke: {
                width: 0,
                color: "#000000",
              },
            },
            opacity: {
              value: 9,

            },
            size: {
              value: 50,
              random: true,
              anim: {
                enable: false,
                speed: 80,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "",
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          fpsLimit: 120,
          interactivity: {

            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {

              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },

            },
          },
          retina_detect: true,
        }}
      />

      <div className='topblur' />
      <div className='bottomblur' />

      <div className={`text ${textVisible ? 'show' : ''}`}>
        <h1 className='homeh1'>Hello, It's Me Juli kumari</h1>
        <h1 className='homeh1'>And I'm a {" "}  <Typewriter
            words={['Frontend developer.', 'Coder.']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
          /></h1>
      </div>
    </div>

  )
}

export default Home;




