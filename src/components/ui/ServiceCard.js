import React, { useState } from "react";
import classes from "./css/servicescard.module.scss";
import { Col } from "antd";
import { InterButtonOnHover } from "./Inter2Button";
import { TopRightTriangle, ImageIcon } from "./css/Shapes.styles";
import { relative } from "path";
import contentLoading from "../../hoc/contentLoading";
import codeicon from "../../img/codeicon.png";



const ServiceCard = ({ title, description }) => {
  const [display, setdisplay] = useState(false);
  const Front = () => {
    return (
      <div
        onMouseEnter={e => {
          setdisplay(true);
          e.preventDefault();
        }}
        className={classes.wrapper}
      >
        <TopRightTriangle>
          <ImageIcon src={codeicon} alt="web" />
        </TopRightTriangle>
        <div>
          <h1 className={classes.title}>{title}</h1>
          <p className={classes.description}>{description}</p>
        </div>

        <div style={{ display: "flex" }}>
          <InterButtonOnHover link="#contact">GET STARTED</InterButtonOnHover>
        </div>
      </div>
    );
  };

  const Back = () => {
    return (
      <div
        onMouseLeave={() => setdisplay(false)}
        className={classes.wrapperback}
      >
        <TopRightTriangle>
          <ImageIcon
            src="http://cdn.onlinewebfonts.com/svg/img_545326.png"
            alt="web"
          />
        </TopRightTriangle>
        <div>
          {" "}
          <h1 className={classes.title}>Valeurs:</h1>
          <p className={classes.description}>
          Nos Valeurs reposent sur le respect ,l'engagement,le bien étre
          </p>
          <p className={classes.description}>
          
          </p>
        </div>
        <div style={{ display: "flex" }}>
         
        </div>
      </div>
    );
  };
  return display ? <Back /> : <Front />;
};
export default contentLoading(false)(ServiceCard);
