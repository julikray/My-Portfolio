import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';


function App() {
    return (
        <BrowserRouter basename="/My-Portfolio">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Education" element={<Education />} />
                <Route path="/Skills" element={<Skills />} />
                <Route path="/Project" element={<Project />} />
                <Route path="/Contact" element={<Contact />} />

            </Routes>
        </BrowserRouter>

    )
}

export default App;













