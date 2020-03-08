import React, { useState } from "react";
import classes from "./css/contact.module.scss";
import contactImg from "./../img/contact.jpg";
import ContactForm from "./ContactForm";

const ContactContainer = ({ match }) => {
  return (
    <div className={classes.wrapper}>
      <div>
        <img className={classes.img1} src={contactImg}  />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactContainer;
