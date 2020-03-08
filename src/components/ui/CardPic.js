import React from "react";
import classes from "./css/cardpic.module.scss";



const CardPic = ({ width, reswidth, img, title }) => {
  let cardwidth = width;
  if (window.innerWidth < 768) {
    cardwidth = reswidth;
  }
  return (
    <div style={{ width: cardwidth }} className={classes.wrapper}>
    
          <img src={img} alt="img"  className={classes.img} />  
       
      
      <span>{title}</span>
    </div>
  );
};
export default CardPic;
