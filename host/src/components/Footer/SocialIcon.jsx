import React from "react";

const SocialIcon = ({ Icon, link }) => (
  <a
    href={link}
    className="w-9 h-9 rounded-sm bg-skin-details flex justify-center items-center hover:bg-skin-decorative text-skin-base hover:text-skin-base-hover transition-colors duration-200"
    aria-label={Icon.displayName || "social-icon"}
  >
    <Icon strokeWidth={1.3} aria-hidden={link} />
  </a>
);

export default SocialIcon;
