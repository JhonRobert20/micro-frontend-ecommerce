import React from "react";
import { SOCIAL_LINKS } from "../../lib/constants";
import SocialIcon from "./SocialIcon";

const FooterBottom = () => (
  <div className="mb-12 mt-8 lg:mt-12 flex flex-col lg:flex-row items-center justify-between max-lg:border-t max-lg:border-skin-details">
    <span className="text-sm">Logo</span>
    <span className="text-sm">
      © <a href="https://pagedone.io/">silvia.kenaan@gmail.com</a> 2024, All
      rights reserved.
    </span>
    <div className="flex max-lg:mt-4 gap-4">
      {SOCIAL_LINKS.map((social) => (
        <SocialIcon key={social.name} Icon={social.Icon} link={social.link} />
      ))}
    </div>
  </div>
);

export default FooterBottom;
