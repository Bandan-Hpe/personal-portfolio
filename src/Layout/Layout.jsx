import React, { Fragment } from "react";
import Navbar from "../Shared/Navbar";
import Router from "../Routes/Route";
import Footer from "../Shared/Footer";
import Cursor from "../Components/Cursor";
import styles from "../index.module.css";

const Layout = () => {
  return (
    <Fragment>
       <div className={`${styles.layout} d-flex flex-column justify-content-between  `}>
       
      <Navbar />
      <Cursor/>
      <Router/>
      <Footer/>
      </div> 
    </Fragment>
  );
};

export default Layout;
