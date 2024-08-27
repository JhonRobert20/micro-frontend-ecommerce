import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { buttonAnimation } from "../CartModal/Animation";

// Componente reutilizable para cualquier botón de icono
export function IconButton({ icon: Icon, ariaLabel, className, ...props }) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1C1C1C] ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      <Icon className="w-6 h-6" />
    </div>
  );
}

// Componente para un botón con Link
export const CartButton = ({ url, label }) => (
  <Link
    to={url}
    className="w-full py-2.5 px-4 font-medium bg-[#1F1511] text-[#f7f3ed] hover:bg-[#3b2f28] transition-colors"
  >
    {label}
  </Link>
);

// Componente de botón
export const Button = ({
  label,
  isPrimary,
  className,
  delay = 0,
  idx = 0,
  ...props
}) => (
  <motion.div
    {...buttonAnimation(delay, idx)}
    className={cn(
      "w-1/2 py-1.5 px-2 font-medium",
      isPrimary ? "bg-[#1F1511] text-[#f7f3ed]" : "border-2 border-[#1F1511]",
      className
    )}
    {...props}
  >
    {label}
  </motion.div>
);

export default Button;
