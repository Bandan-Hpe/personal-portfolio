import React, { Fragment } from "react";
import styles from "../styles/About.module.css";
import { Link } from "react-router-dom";
import portrait from "/assets/images/portrait.jpg";

const About = () => {
  return (
    <Fragment>
      <div className={styles.about}>
        <div className={styles.header}>
          <h1 className={styles.title}>A little bit about me </h1>
          <p className={styles.sub_title}>Who i am and what i do </p>
        </div>
        <div className={styles.content}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="text-white">WHO I AM</p>
                <p>
                  I’m <span className={styles.name}>Bandan</span> Highly skilled
                  and motivated full-stack engineer based in Hyderabad, India.
                </p>
                <p className="text-white">WHO I DO</p>
                <p>
                  I bring over two years of immersive experience as a seasoned
                  full-stack developer in the dynamic realm of web development.
                  My expertise encompasses a robust skill set, including React
                  JS, Next JS, Typescript, and Node JS. Throughout my
                  professional journey, I have actively contributed my skills to
                  diverse projects, emphasizing the creation of seamless and
                  innovative solutions.
                </p>
                <p>
                  My portfolio showcases a range of successful endeavors, from
                  steering the development of E-commerce projects to
                  orchestrating the intricacies of CRM systems. Each project has
                  not only refined my technical prowess but has also deepened my
                  appreciation for the multifaceted nature of full-stack
                  development. As I continue to navigate this ever-evolving
                  landscape, I am driven by a passion for creating impactful and
                  user-centric digital experiences.
                </p>

                <p>
                  Feel free to reach out via{" "}
                  <Link to="mailto:bandanpradhan456@gmail.com" className={styles.connect}>
                    e-mail
                  </Link>
                  , or follow me on{" "}
                  <Link
                    to="https://www.instagram.com/bandan_pradhan"
                    className={styles.connect}
                  >
                    Instagram
                  </Link>
                  . Want to see where I’ve worked? Check out my{" "}
                  <Link
                    to="/assets/images/BANDAN_PRADHAN.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.connect}
                  >
                    Resume
                  </Link>
                  , or Connect with me on{" "}
                  <Link
                    className={styles.connect}
                    to="https://www.linkedin.com/in/bandan-pradhan/"
                  >
                    LinkedIn
                  </Link>
                  .
                </p>

                <p>Let's collaborate to build something great ,</p>

                <p className={`${styles.sign} mb-3`}>Bandan Pradhan</p>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className={`${styles.img} mb-5`}>
                  {/* <img src={portrait} alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
