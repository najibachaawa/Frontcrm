import React, { useState } from "react";
import classes from "./css/contacthome.module.scss";
import { Link } from "react-router-dom";
import Button from "./Button"
// const [bo, changebo] = useState(false);
// let width = "100px";
// let height = "50px"
// if ( window.innerWidth > 768) {
//   width = "500px";
// }

// window.onresize = () => changebo(!bo);

const ContactHome =() =>{
    return(
        <div className={classes.wrapper}>
      <div className={classes.row}>
      <div className={classes.colmun}>
     <p className={classes.title} style={{fontWeight:"bolder",color:"#2A878F"}}>Email</p>
     <p className={classes.email}>najiba@gmail.com</p>
      </div>
      <Button content="Contact me"  path="/contact" width="100px" height="50px"  executed={false}/>
      </div>
        </div>
    )
}

export default ContactHome