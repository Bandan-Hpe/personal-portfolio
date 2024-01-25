import React, { Fragment, useRef, useState } from "react";
import styles from "../styles/Contact.module.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {


  const [buttonText, setButtonText] = useState("Submit");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Submiting...");

    emailjs
      .sendForm(
        "service_yqbwuyq",
        "template_y5rxgv9",
        form.current,
        "Jx4iBaGzWieX0UanH"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Requirement Submitted Successfully!",
            text: "Thank you for Contacting me .",
          });
          form.current.reset();
          setButtonText("Submit");
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <Fragment>
      <div className={styles.contact}>
        <div className={styles.header}>
          <h1 className={styles.title}>Get in touch</h1>
          <p className={styles.sub_title}>
            Let's collaborate to build something great ,
          </p>
        </div>
        <div className={`${styles.Form_section} container mb-5`}>
            <div className="d-flex gap-5 align-items-center ">
              <div className={`${styles.btn} d-flex  `}>
              <span className={styles.color_point}> </span>
              <span className={styles.color_point}></span>
              <span className={styles.color_point}></span>

              </div>
              <p className="mb-0 text-center w-75">Send Your Requirement</p>
          
            </div>
            <div className={styles.form}>

            <form class="row g-3" ref={form} onSubmit={sendEmail}>
                <div class="col-md-6">
                  <label className={`${styles.label} form-label`}>Full Name</label>
                  <input
                    type="text"
                    className={`${styles.form_control} form-control`}
                    placeholder="Full Name"
                    name="user_name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className={`${styles.label} form-label`}>Mobile</label>
                  <input
                    type="text"
                    className={`${styles.form_control} form-control spinner`}
                    placeholder="Mobile"
                    name="user_mobile"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label htmlFor="inputAddress" className={`${styles.label} form-label`}>
                    Email
                  </label>
                  <input
                    type="mail"
                    className={`${styles.form_control} form-control`}
                    id="email"
                    placeholder="Email"
                    name="user_email"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label htmlFor="inputAddress2" className={`${styles.label} form-label`}>
                    Services
                  </label>
                  <select
                    id="inputState"
                    className={`${styles.form_control} form-select`}
                    name="position"
                    required
                  >
                    <option defaultValue>Choose...</option>
                    <option value="Web Design & Development">
                      Web Design & Development
                    </option>
                    <option value="Application Development">
                      Application Development
                    </option>
                    <option value="Product Development">
                      Product Development
                    </option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Graphics Designing">
                      Graphics Designing
                    </option>
                  </select>
                </div>
                <div class="col-md-12">
                  <label htmlFor="inputAddress" className={`${styles.label} form-label`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    className={`${styles.form_control} form-control`}
                    id="subject"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </div>

                <div class="col-md-12">
                  <label htmlFor="inputAddress" className={`${styles.label} form-label`}>
                    Message
                  </label>
                  <textarea
                    type="text"
                    className={`${styles.form_control} form-control`}
                    id="message"
                    placeholder="Message"
                    name="message"
                  ></textarea>
                </div>

                <div class="col-12">
                  <button type="submit " className={`${styles.Button_styls} float-end`}>
                    {buttonText}
                  </button>
                </div>
              </form>



            </div>
          
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
