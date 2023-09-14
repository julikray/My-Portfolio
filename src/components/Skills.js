import React from 'react'
import './Skills.css';

function Skills() {
    return (
        <div>
            <h1 className='animate__animated animate__bounceIn'>My Skills </h1>
            <hr />
            <div className='bigcontainer' >
                <hr />
                <div className="container">
                    <div className="skill-box">
                        <span className="title">HTML</span>
                        <div className="skill-bar">
                            <span className="skill-per html">
                                <span className="tooltip">95%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">CSS</span>
                        <div className="skill-bar">
                            <span className="skill-per css">
                                <span className="tooltip">60%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">SCSS</span>
                        <div className="skill-bar">
                            <span className="skill-per css">
                                <span className="tooltip">80%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">JavaScript</span>
                        <div className="skill-bar">
                            <span className="skill-per javascript">
                                <span className="tooltip">60%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">ReactJS</span>
                        <div className="skill-bar">
                            <span className="skill-per reactjs">
                                <span className="tooltip">70%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">Tailwind CSS</span>
                        <div className="skill-bar">
                            <span className="skill-per reactjs">
                                <span className="tooltip">70%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">Python</span>
                        <div className="skill-bar">
                            <span className="skill-per reactjs">
                                <span className="tooltip">50%</span>
                            </span>
                        </div>
                    </div>

                </div>
            </div >
        </div>

    )
}

export default Skills