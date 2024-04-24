import React, { Fragment } from "react";
import styles from "../styles/Skill.module.css";
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const Skill = () => {
  return (
    <Fragment>
      <div className={styles.skills}>
        <div className={styles.header}>
          <h1 className={styles.title}>Tech Stack </h1>
          <p className={styles.sub_title}>
            The dev tools, Languages and The Framework I used to Work.{" "}
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center col-sm-12">
              <p className="text-white">WHAT I LIKE</p>
              <p>
                Passionate about development and technology, I thrive on staying
                abreast of the latest advancements. With an insatiable
                curiosity, I actively seek opportunities to learn and apply
                emerging technologies. Committed to continuous growth, I embrace
                the ever-evolving landscape of development, ensuring I remain at
                the forefront of innovation.
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-end col-sm-12">
              <TagCloud
                className={styles.tagCloud}
                options={(Window) => ({
                  radius: Math.min(500, innerWidth, innerHeight) / 2,
                  maxSpeed: "fast",
                })}
                onClick={(tag) => alert(tag)}
                onClickOptions={{ passive: true }}
              >
                {[
                  "HTML",
                  "CSS",
                  "JS",
                  "jQuery",
                  "SCSS/SASS",
                  "Bootstrap",
                  "React.JS",
                  "Next.JS",
                  "Redux.JS",
                  "React-Router",
                  "Material-UI",
                  "React-Bootstrap",
                  "Styled-Component",
                  "npm",
                  "Node.JS",
                  "Express.JS",
                  "Mongo DB",
                  "REST API",
                ]}
              </TagCloud>
            </div>
          </div>
        </div>

        <div className="container">
          <div className={styles.header}>
            <h1 className={styles.title}>Front-end Technology </h1>
          </div>
          <div className=" d-flex flex-wrap justify-content-center tools-container gap-5">
            <div className={`${styles.tools_card}    d-flex flex-column `}>
              <img
                src="/assets/images/html.png"
                alt=""
                className={styles.tools}
              />
              <p className="ex-para">HTML</p>
            </div>
            <div className={`${styles.tools_card}    d-flex flex-column `}>
              <img
                src="/assets/images/css.png"
                alt=""
                className={styles.tools}
              />
              <p className="ex-para">CSS</p>
            </div>
            <div className={`${styles.tools_card}    d-flex flex-column `}>
              <img
                src="/assets/images/sass.png"
                alt=""
                className={styles.tools}
              />
              <p className="ex-para">SASS</p>
            </div>
            <div className={`${styles.tools_card}    d-flex flex-column `}>
              <img
                src="/assets/images/js.png"
                alt=""
                className={styles.tools}
              />
              <p className="ex-para">JavaScript</p>
            </div>
            <div className={`${styles.tools_card}    d-flex flex-column `}>
              <img
                src="/assets/images/typescript.png"
                alt=""
                className={styles.tools}
              />
              <p className="ex-para">TypeScript</p>
            </div>
            <div className={`${styles.tools_card}    d-flex flex-column `}>
              <img
                src="/assets/images/React.png"
                alt=""
                className={styles.tools}
              />
              <p className="ex-para">
                React JS & <br />
                React Native
              </p>
            </div>
            <div className={`${styles.tools_card}    d-flex flex-column `}>
              <img
                src="/assets/images/redux.png"
                alt=""
                className={styles.tools}
              />
              <p className="ex-para">Redux</p>
            </div>
            <div className={`${styles.tools_card}    d-flex flex-column `}>
              <img
                src="/assets/images/nexts.webp"
                alt=""
                className={styles.tools}
              />
              <p className="ex-para">Next JS</p>
            </div>
            <div className={`${styles.tools_card}    d-flex flex-column `}>
              <img
                src="/assets/images/tailwind.svg"
                alt=""
                className={styles.tools}
              />
              <p className="ex-para">Tailwind CSS</p>
            </div>
            <div className={`${styles.tools_card}    d-flex flex-column `}>
              <img
                src="/assets/images/bootstrap.png"
                alt=""
                className={styles.tools}
              />
              <p className="ex-para">Bootstrap</p>
            </div>
            <div className={`${styles.tools_card}    d-flex flex-column `}>
              <img
                src="/assets/images/mui.png"
                alt=""
                className={styles.tools}
              />
              <p className="ex-para">Material UI</p>
            </div>
            <div className={`${styles.tools_card}    d-flex flex-column `}>
              <img
                src="/assets/images/styled.png"
                alt=""
                className={styles.tools}
              />
              <p className="ex-para">
                Styled <br />
                Component
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className={styles.header}>
            <h1 className={styles.title}>Backend-end Technology </h1>
          </div>
          <div className=" d-flex flex-wrap  justify-content-center tools-container gap-5">
            <div className={`${styles.tools_card}    d-flex flex-column `}>
              <img
                src="/assets/images/nodejs.png"
                alt=""
                className={styles.tools}
              />
              <p className="ex-para">Node JS</p>
            </div>
            <div className={`${styles.tools_card}    d-flex flex-column `}>
              <img
                src="/assets/images/nexts.webp"
                alt=""
                className={styles.tools}
              />
              <p className="ex-para">Next JS</p>
            </div>
            <div className={`${styles.tools_card}    d-flex flex-column `}>
              <img
                src="/assets/images/expressjs.png"
                alt=""
                className={styles.tools}
              />
              <p className="ex-para">Express JS</p>
            </div>
            <div className={`${styles.tools_card}    d-flex flex-column `}>
              <img
                src="/assets/images/mongo.png"
                alt=""
                className={styles.tools}
              />
              <p className="ex-para">Mongo DB</p>
            </div>
          </div>
        </div>
        <div className="container mt-5 ">
          <div className={styles.header}>
            <h1 className={styles.title}>Dev Tools </h1>
          </div>
          <div
            className={`${styles.tools_container} d-flex flex-wrap  justify-content-center  gap-5`}
          >
            <div className={`${styles.tools_card}    d-flex flex-column `}>
              <img
                src="/assets/images/git.png"
                alt=""
                className={styles.tools}
              />
              <p className="ex-para">Git</p>
            </div>
            <div className={`${styles.tools_card}    d-flex flex-column `}>
              <img
                src="/assets/images/github-mark-white.png"
                alt=""
                className={styles.tools}
              />
              <p className="ex-para">Github</p>
            </div>
            <div className={`${styles.tools_card}    d-flex flex-column `}>
              <img
                src="/assets/images/npm.png"
                alt=""
                className={styles.tools}
              />
              <p className="ex-para">NPM</p>
            </div>
            <div className={`${styles.tools_card}    d-flex flex-column `}>
              <img
                src="/assets/images/vs.png"
                alt=""
                className={styles.tools}
              />
              <p className="ex-para">VS Code</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Skill;
