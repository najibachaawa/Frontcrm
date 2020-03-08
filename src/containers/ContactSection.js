import React, { useState } from "react";

import { SectionWrapper, ButtonDiss, Img } from "./css/ContactSection.styles";
import ContactForm from "./ContactForm";
import Art from "./../img/artcontact.jpg";
import InterButton from "../components/ui/InterButton";

const ContactSection = () => {
  const [start, handleStart] = useState(false);
  return (
    <SectionWrapper start={start}>
      <ContactForm />
      <Img
        src={Art}
        alt="art"
      />
      <ButtonDiss onClick={() => handleStart(true)} start={start}>
        <InterButton />
      </ButtonDiss>
    </SectionWrapper>
  );
};

export default ContactSection;
