import React, { Fragment, useState } from "react";
import styles from "../styles/Navbar.module.css";
import { NavLink } from "react-router-dom";
import openbar from "/assets/images/open.png";
import closebar from "/assets/images/close.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <div className={styles.Navbar}>
        <div className={`d-flex align-content-center col-12 ${styles.nav_menu}`}>
          <div className={`${styles.logo} col-md-3 `}>
            <h5 className={`${styles.logo_img} mb-0`}>Bandan</h5>
          </div>
          <div className="col-md-8 mb-0 p-0   d-flex justify-content-end">
            <button className={styles.nav_btn} onClick={toggleMenu}>
              {open ? <img src={closebar} alt="close" /> : <img src={openbar} alt="open" />}
            </button>
            <ul className={`${styles.nav_list} ${open ? styles.open : ""} p-0`}>
              <li className={styles.nav_items}>
                <NavLink to="/"  onClick={toggleMenu} className={styles.nav_links} activeClassName={styles.active}>
                  _hello
                </NavLink>
              </li>
              <li className={styles.nav_items}>
                <NavLink to="/about" className={styles.nav_links} onClick={toggleMenu} activeClassName={styles.active}>
                  _about-me
                </NavLink>
              </li>
              <li className={styles.nav_items} >
                <NavLink to="/skill" className={styles.nav_links} onClick={toggleMenu} activeClassName={styles.active}>
                  _Skills
                </NavLink>
              </li>
              <li className={styles.nav_items}>
                <NavLink to="/project" className={styles.nav_links} onClick={toggleMenu} activeClassName={styles.active}>
                  _project
                </NavLink>
              </li>
              <li className={styles.nav_items}>
                <NavLink to="/contact" className={styles.nav_links} onClick={toggleMenu} activeClassName={styles.active}>
                  _contact-me
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
