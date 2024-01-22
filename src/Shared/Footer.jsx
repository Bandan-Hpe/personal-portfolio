import React, { Fragment } from "react";
// import styles from "../styles/Navbar.module.css";
import styles from "../styles/Footer.module.css";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <Fragment>
      <Fragment>
        <div className={`${styles.Navbar} `}>
          <div className="d-flex align-content-center col-md-6 ">
            <div className={`${styles.logo}  `}>
              <h5 className={`${styles.logo_img} mb-0`}>Find me in </h5>
            </div>

            <ul className={`${styles.nav_list}    mb-0 p-0 `}>
              <li className={styles.nav_items}>
                <NavLink to="https://github.com/Bandan-Hpe" target="_blank" className={styles.nav_links_footer}>
                  <FaGithub />
                </NavLink>
              </li>
              <li className={styles.nav_items}>
                <NavLink to="https://www.linkedin.com/in/bandan-pradhan/" target="_blank" className={styles.nav_links_footer}>
                  <FaLinkedin />
                </NavLink>
              </li>
              <li className={styles.nav_items}>
                <NavLink to="https://www.instagram.com/bandan_pradhan" target="_blank" className={styles.nav_links_footer}>
                  <FaInstagram />
                </NavLink>
              </li>
              <li className={`${styles.nav_items} `}>
                <NavLink
                  to="https://www.facebook.com/bandan.pradhan.52/"
                  target="_blank"
                  className={`${styles.nav_links_footer} `}
                >
                  <FaFacebook />
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={`${styles.author} col-md-6  d-flex justify-content-end`}>
            <p>&#169;	Designed and Built by <span>Bandan</span></p>
          </div>
       
        </div>
      </Fragment>
    </Fragment>
  );
};

export default Footer;
