import React, { useState } from "react";
import classes from "./css/services.module.scss";
import ServiceCard from "../components/ui/ServiceCard";

const valeurs = [
  { title: "Nos Valeurs", description: "Notre modèle d’entreprise repose sur plusiers valeurs  : Respect - Engagement - Ambition" }
];

const Services = () => {
  const serviceGroup = valeurs.map((el, n) => {
    let animation = "fade-left";
    let classname = classes.card
    if (n % 2 === 0) {
      animation = "fade-right";
      classname= classes.cardLeft
    }
    return (
      <div data-aos={animation} className={classname} >
        <ServiceCard title={el.title} description={el.description} />
      </div>
    );
  });
  return (
    <div className={classes.wrapper}>
      <span className={classes.title}>Valeurs</span>
      <div className={classes.group}>{serviceGroup}</div>
    
    </div>
  );
};
export default Services;
