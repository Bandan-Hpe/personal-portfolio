import React, { Fragment } from "react";
// import styles from "../styles/Navbar.module.css";
import styles from "../styles/Footer.module.css";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <Fragment>
      <Fragment>
        <div className={styles.Navbar}>
          <div className="d-flex align-content-center col-10">
            <div className={`${styles.logo} col-3 `}>
              <h5 className={`${styles.logo_img} mb-0`}>Find me in </h5>
            </div>

            <ul className={`${styles.nav_list}   col-md-7 mb-0 p-0 `}>
              <li className={styles.nav_items}>
                <NavLink to="/" className={styles.nav_links_footer}>
                  <FaGithub />
                </NavLink>
              </li>
              <li className={styles.nav_items}>
                <NavLink to="/about" className={styles.nav_links_footer}>
                  <FaLinkedin />
                </NavLink>
              </li>
              <li className={styles.nav_items}>
                <NavLink to="/project" className={styles.nav_links_footer}>
                  <FaInstagram />
                </NavLink>
              </li>
              <li className={`${styles.nav_items} `}>
                <NavLink
                  to="/project"
                  className={`${styles.nav_links_footer} `}
                >
                  <FaFacebook />
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={` col-2  mb-0 p-0 d-flex justify-content-end`}>
            <NavLink to="/project" className={`${styles.nav_links_footer} `}>
              _contact-me
            </NavLink>
          </div>
        </div>
      </Fragment>
    </Fragment>
  );
};

export default Footer;
