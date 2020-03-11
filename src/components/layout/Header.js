import React, { useState } from "react";
import classes from "./css/header.module.scss";
import logo from "./../../img/logo.svg";
import { Link } from "react-router-dom";
//Components
import NavItem from "../ui/NavItem";
import Button from "../ui/Button";
import Logo from "./Logo";
import vneuron from '../../img/vneuron.PNG'
const Header = ({ match }) => {
  const [state, changestate] = useState(true);
  // console.log(match);
  let home = false;
  let work = false;
  let contact = false;
  let login=false

  
  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
         Vneuron  
        </div>
        <div className={classes.navigation}>
          <NavItem content="Acceuil" path={"/"} activated={home} />
          {/* <NavItem content="Work" path={"/work"} activated={work} /> */}
          <NavItem content="Contact" path={"/contact"} activated={contact} />
          
        </div>
        <div className={classes.button}>
        
        
        <div className={classes.button}>
          <Button path={"/login" }content="Connecter" width="100px" height="40px"  />
        </div>
        </div>
      </div> 
    </div>
  );
};
export default Header;
