import React from "react";

const SocialIcon = ({ Icon, link }) => (
  <a
    href={link}
    className="w-9 h-9 rounded-sm bg-skin-details flex justify-center items-center hover:bg-skin-decorative text-skin-base hover:text-skin-base-hover"
    aria-label={Icon.displayName || "social-icon"}
  >
    <Icon aria-hidden={link} />
  </a>
);

export default SocialIcon;
