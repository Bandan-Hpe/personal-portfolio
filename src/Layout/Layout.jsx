import React, { Fragment } from "react";
import Navbar from "../Shared/Navbar";
import Router from "../Routes/Route";
import Footer from "../Shared/Footer";
import Cursor from "../Components/Cursor";

const Layout = () => {
  return (
    <Fragment>
       <div className="d-flex flex-column justify-content-between">
       
      <Navbar />
      <Cursor/>
      <Router/>
      <Footer/>
      </div> 
    </Fragment>
  );
};

export default Layout;
