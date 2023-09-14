import React from 'react';
import './Project.css';
import Projectcard from './Projectcard';

function Project() {
  return (

<div className='heading'><h1 className='animate__animated animate__bounceIn'>Project</h1>
<hr/>


    <div className='All'>
      <Projectcard
        title=" Analogclock"
        image="./images/analog.jpg"
        description= "Create a dynamic analog clock using HTML, CSS, and JavaScript for a visually engaging time-telling interface on webpages."
        demo= " https://julikray.github.io/Analogclock/ "
        source= "https://github.com/julikray/Analogclock "
      />
      <Projectcard
        title=" Tic-tac-toe"
        image="./images/tictactoe.jpg"
        description= "Create a web-based Tic-Tac-Toe game using HTML, CSS, and JavaScript for a fun and interactive two-player gaming experience."
        demo= " https://julikray.github.io/Tic-tac-toe/ "
        source= " https://github.com/julikray/Tic-tac-toe "
      />
      <Projectcard
        title="Calculator"
        image="../images/Calculator.jpg"
        description= "Create a responsive calculator web application using HTML, CSS, and JavaScript for basic arithmetic calculations and user-friendly interface."
        demo= "https://julikray.github.io/Scientific-calculator/ "
        source= " https://github.com/julikray/Scientific-calculator"
      />
      <Projectcard
        title="Digital-clock"
        image="../images/Digitalclock.jpg"
        description= "Create a digital clock using HTML, CSS, and JavaScript with both dark and light modes for user-friendly time display."
        demo= "https://julikray.github.io/Digital-clock/"
        source= " https://github.com/julikray/Digital-clock "
      />
    </div>

    </div>
    
  )
}
export default Project;