import React from "react";
import FooterBottom from "./FooterBottom";
import MaxWidthWrapper from "../UI/MaxWidthWrapper";
import NewsLetter from "./NewsLetter";
import FooterLinks from "./FooterLinks";

const Footer = () => (
  <footer className="w-full border-t-[1px] border-skin-details">
    <MaxWidthWrapper className={"pt-16 lg:px-12"}>
      <div className="flex justify-between flex-col lg:flex-row">
        <NewsLetter />
        <FooterLinks />
      </div>
      <FooterBottom />
    </MaxWidthWrapper>
  </footer>
);

export default Footer;
