import React from "react";
import Input from "../UI/Input";
import Checkbox from "../UI/Checkbox";
import SectionTitle from "./SectionTitle";

const ContactSection = () => {
  return (
    <div className="grid gap-4 mt-4 mb-8">
      <SectionTitle title="Contact" />
      <Input placeholder="Email" />
      <Checkbox label="Subscribe me to brand's offers and updates" />
    </div>
  );
};

export default ContactSection;
