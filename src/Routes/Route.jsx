import React,{Fragment} from 'react';
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home';

const Router = () => {
  return <Fragment>
    <Routes>
        <Route path="/" exact element={<Home/>}/>
    </Routes>



  </Fragment>
}

export default Router;