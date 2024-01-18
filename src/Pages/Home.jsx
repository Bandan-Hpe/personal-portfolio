import React, { Fragment } from "react";
import styles from "../styles/Home.module.css";
import { IoIosArrowForward } from "react-icons/io";
import Background from "/assets/images/Background.png";

const Home = () => {
  return (
    <Fragment>
      <div className="d-flex justify-content-center">
        <section className={`${styles.Home_section} row container`}>
          <div className="col-md-6">
            <div className={styles.content}>
              <p className={styles.greeting}>Hi all. I am</p>
              <p className={styles.name}>Bandan Pradhan</p>
              <p className={styles.role}>
                <IoIosArrowForward />
                Full-stack Developer
              </p>
            </div>
            <div className={styles.content_details}>
              <p className={styles.number}> // My Number </p>
              <p className="text-white">
                <span className={styles.datatype}> const </span>
                <span className={styles.variable}>Number</span> =
                <span className={styles.data}>"+91-7077407660"</span>
              </p>
              <p className={styles.number}> // My Email </p>
              <p className="text-white">
                <span className={styles.datatype}> const </span>
                <span className={styles.variable}>Email</span> =
                <span className={styles.data}>
                  "bandanpradhan456@gmail.com"
                </span>
              </p>
              <p className={styles.number}> // Github Link </p>
              <p className="text-white">
                <span className={styles.datatype}> const </span>
                <span className={styles.variable}>Github</span> =
                <span className={styles.data}>
                  "https://github.com/Bandan-Hpe"
                </span>
              </p>
              <p className={styles.number}> // My Linkedin </p>
              <p className="text-white">
            
                <span className={styles.datatype}> const </span>
                <span className={styles.variable}>Linkedin</span> =
                <span className={styles.data}>
                  "https://www.linkedin.com/in/bandan-pradhan/"
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src={Background} alt="bg-img" className={styles.hero_img} />
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Home;
