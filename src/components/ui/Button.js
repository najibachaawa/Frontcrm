import React, { useState } from "react";
import classes from "./css/button.module.scss";
import { Link } from "react-router-dom";


const Button = ({ path, content, width, height, executed }) => {
  if (executed === false) {
    return (
      <Link to={path} style={{ textDecoration: "none", marginLeft: "60px" }}>
        <div
          className={classes.button}
          style={{ width: width, height: height }}
        >
          <h3 className={classes.content}>{content}</h3>
        </div>
      </Link>
    );
  } else {
    return (
      <div className={classes.button} style={{ width: width, height: height }}>
        <h3 className={classes.content}>{content}</h3>
      </div>
    );
  }
};

export default Button;
