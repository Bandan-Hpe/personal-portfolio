import React, { Fragment } from "react";
import styles from "../styles/Project.module.css";
import { Link } from "react-router-dom";

const Project = () => {
  const data = [
    {
      image: "/assets/images/project1.jpg",
      title: "SAYANA WORLDVERSE",
      link: "https://sayanaworldverse.com/",
    },
    {
      image: "/assets/images/project2.jpg",
      title: "SAYANA Dashboard",
      link: "https://sayana-dashboard.vercel.app/",
    },
    {
      image: "/assets/images/project3.jpg",
      title: "The Real Technologies",
      link: "https://therealtechnologies.com/",
    },
    {
      image: "/assets/images/project4.jpg",
      title: "Code Connex pvt ltd",
      link: "https://codeconnex.com/",
    },
    {
      image: "/assets/images/project5.jpg",
      title: "Kathalaya Kids School",
      link: "https://kathalayakids.com/",
    },
    {
      image: "/assets/images/project6.jpg",
      title: "Tranquil CRM ",
      link: "https://tranquilcrm.com",
    },
  ];
  return (
    <Fragment>
      <div className={styles.Project}>
        <div className={styles.header}>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.sub_title}>Projects and ideas I’ve worked on </p>
        </div>

        <div  className={`${styles.work} container d-flex flex-wrap justify-content-center gap-5`}>
          {data.map((item,index) => {
            return (
              <div className={styles.project_card} key={index}>
                <img src={item.image} alt="" />

                <h5>{item.title}</h5>
                <Link className={styles.btn} to={`${item.link}`} target="_blank">
                  Visit Site
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Project;
