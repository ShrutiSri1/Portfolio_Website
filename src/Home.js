import React from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import profilepic from "../src/img/shruti.jpeg"
import { NavLink } from 'react-router-dom';
import About from './About';
import Education from './Education';
import Experience from "./Experience";
import Skills from './Skills'
import Project from "./Project";
import Contact from './Contact';
import Language from "./Language";
import Hobbies from "./Hobbies";

function Home() {
    return (
        <>
            <About />

            <Experience />
            <Project />
            <Skills />
            <Hobbies />
            <Language />
            <Contact />

        </>
    )
}
export default Home;