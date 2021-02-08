import React from 'react';
//import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Social from './Social';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
function App() {
  return (
    <>

      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/project" exact component={Project} />
        <Route path="/skill" exact component={Skills} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/experience" exact component={Experience} />
        <Route path="/education " exact component={Education} />


        <Redirect to="/" />
      </Switch>





    </>



  );
}

export default App;
