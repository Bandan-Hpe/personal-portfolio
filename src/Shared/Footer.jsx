import React, { Fragment } from "react";
import styles from "../styles/Navbar.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <Fragment>
        <div className={styles.Navbar}>
          <div className="d-flex align-content-center col-10">
            <div className={`${styles.logo} col-md-1 `}>
              <h5 className={`${styles.logo_img} mb-0`}>Find me</h5>
            </div>

            <ul className={`${styles.nav_list}   col-md-8 mb-0 p-0 `}>
              <li className={styles.nav_items}>
                <NavLink to="/" className={styles.nav_links}>
                  _hello
                </NavLink>
              </li>
              <li className={styles.nav_items}>
                <NavLink to="/about" className={styles.nav_links}>
                  _about-me
                </NavLink>
              </li>
              <li className={styles.nav_items}>
                <NavLink to="/project" className={styles.nav_links}>
                  _project
                </NavLink>
              </li>
              <li className={`${styles.nav_items} `}>
                <NavLink to="/project" className={`${styles.nav_links} `}>
                  _contact-me
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={` col-2  mb-0 p-0 d-flex justify-content-end`}>
            <NavLink to="/project" className={`${styles.nav_links} `}>
              _contact-me
            </NavLink>
          </div>
        </div>
      </Fragment>
    </Fragment>
  );
};

export default Footer;
