import React,{Fragment} from 'react';
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home';
import styles from "../index.module.css"

const Router = () => {
  return <Fragment>
    <div className={styles.layout}>

    
    <Routes>
        <Route path="/" exact element={<Home/>}/>
    </Routes>
    </div>



  </Fragment>
}

export default Router;