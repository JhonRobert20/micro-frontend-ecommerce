import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../../lib/utils";

const LinkIcon = ({
  href,
  IconComponent,
  text = "",
  ariaLabel = "",
  size = "medium",
  ...rest
}) => {
  const sizes = {
    small: "w-4 h-4",
    medium: "w-6 h-6",
    large: "w-8 h-8",
  };

  const linkClass = cn(
    "flex items-center justify-center transition-colors duration-200 ease-in-out",
    IconComponent ? sizes[size] : null
  );

  const textClass = cn("hover:text-skin-details text-skin-decorative");

  const IconElement = IconComponent && (
    <IconComponent
      size={sizes[size]}
      className="hover:text-skin-details text-skin-decorative"
    />
  );

  const content = (
    <span className={linkClass} aria-label={ariaLabel}>
      {IconElement && IconElement}
      {text && <span className={textClass}>{text}</span>}
    </span>
  );

  return (
    <Link to={href} {...rest}>
      {content}
    </Link>
  );
};

export default LinkIcon;
