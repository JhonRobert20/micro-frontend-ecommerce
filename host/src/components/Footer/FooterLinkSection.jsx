import React from "react";

const FooterLinkSection = ({ title, links }) => (
  <div className="flex flex-col mb-8 lg:mb-0">
    <h4 className="mb-4 lg:mb-6 tracking-widest	">{title}</h4>
    <ul>
      {links.map((link, index) => (
        <li key={index} className="mb-2">
          <a
            href="#"
            className="hover:text-skin-decorative transition-colors duration-100"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterLinkSection;
