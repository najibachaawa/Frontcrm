import React, { useState } from "react";
import classes from "./css/navitem.module.scss";
import { Link } from "react-router-dom";



const NavItem = ({ path, content, activated }) => {
  var color = "black";

  if (activated == true) {
    color = "black";
  } else {
    color = "gray";
  }
  return (
    <div className={classes.link}>
      <Link
        to={path}
        style={{ textDecoration: "none", color: color, marginLeft: "60px" }}
      >
        {content}
      </Link>
    </div>
  );
};
export default NavItem;
