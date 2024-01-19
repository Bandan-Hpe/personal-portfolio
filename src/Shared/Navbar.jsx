import React, { Fragment } from "react";
import styles from "../styles/Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <div className={styles.Navbar}>
        <div className="d-flex align-content-center col-10">
          <div className={`${styles.logo} col-md-3 `}>
            <h5 className={`${styles.logo_img} mb-0`}>Bandan</h5>
          </div>
          <div className="col-md-8 mb-0 p-0">
            <ul className={`${styles.nav_list}    `}>
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
            </ul>
          </div>
        </div>
        <div className={` col-2  mb-0 p-0 d-flex justify-content-end`}>
          <NavLink to="/project" className={`${styles.nav_links} `}>
            _contact-me
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
