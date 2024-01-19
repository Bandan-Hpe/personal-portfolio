import React, { Fragment } from "react";
import styles from "../styles/Home.module.css";
import { IoIosArrowForward } from "react-icons/io";
import Background from "/assets/images/Background.png";

const Home = () => {
  return (
    <Fragment>
      <div className="d-flex justify-content-center h-100">
        <section className={`${styles.Home_section} row container align-items-center`}>
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
          <div className="col-md-6 d-flex justify-content-center position-relative">
            <img src={Background} alt="bg-img" className={styles.hero_img} />
            <div className={styles.bg1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 864 784">
                <g opacity="0.4" filter="url(#filter0_f_64_1236)">
                  <path
                    d="M673.469 258.482L689.984 477.861L655.759 582.726L485.295 609.598L413.003 448.57L297.588 487.343L184.059 311.368L174 177.746L452.567 174.828L523.099 285.846L673.469 258.482Z"
                    fill="#43D9AD"
                    filter="none"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_64_1236"
                    x="0"
                    y="0.827728"
                    width="863.983"
                    height="782.77"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="87"
                      result="effect1_foregroundBlur_64_1236"
                    />
                  </filter>
                </defs>
              </svg>
            </div>

            <div className={styles.bg2}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 868 831"
                
              >
                <g opacity="0.4" filter="url(#filter0_f_64_1235)">
                  <path
                    d="M477.946 656.519L264.032 605.132L174.663 540.469L201.226 369.957L376.649 350.391L375.041 228.647L577.309 174.392L707.602 205.691L625.165 471.797L497.892 504.987L477.946 656.519Z"
                    fill="#4D5BCE"
                    filter="none"

                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_64_1235"
                    x="0.663574"
                    y="0.391769"
                    width="880.938"
                    height="830.128"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="87"
                      result="effect1_foregroundBlur_64_1235"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Home;
