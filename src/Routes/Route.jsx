import React,{Fragment} from 'react';
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home';
import styles from "../index.module.css"
import About from '../Pages/About';
import Project from '../Pages/Project';
import Contact from '../Pages/Contact';
import Skill from '../Pages/Skill';

const Router = () => {
  return <Fragment>
    <div className={styles.layout}>

    
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/skills"  element={<Skill/>}/>
        <Route path="/project"  element={<Project/>}/>
        <Route path="/contact"  element={<Contact/>}/>
    </Routes>
    </div>



  </Fragment>
}

export default Router;