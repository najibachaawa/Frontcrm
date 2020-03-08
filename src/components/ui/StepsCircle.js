import React from "react";
import classes from "./css/stepscircle.module.scss";


const StepsCircle = ({ number, step, activated,done }) => {
  let background = "";
  let border = "gray"
  let color = "black";
  let colortitle= "gray"
  if (activated === true && done === false) {
    background = "#2A878F";
    color = "white";
    border = "1px solid rgb(189, 189, 189)";
    colortitle= "black"
  } else if(activated === false && done === false){
    background = "";
    color = "black";
    border = "1px solid rgb(189, 189, 189)";
    colortitle= "gray"
  }
  else if(activated === false && done === true){
    background = "";
    color = "#2A878F";
    colortitle= "gray"
    border = "3px solid #2A878F"
    number="✔"
  }

  return (
    <div className={classes.row}>
      <span className={classes.cirlce} style={{ backgroundColor: background,color:color ,border: border }}>
        {number}
      </span>
      <span style={{ color: colortitle,fontSize:"1.5em",padding:"10px" }}>{step}</span>
    </div>
  );
};

export default StepsCircle;
