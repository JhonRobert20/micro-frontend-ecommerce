import React from "react";
import { Loader } from "lucide-react"; // O cualquier ícono que uses para el estado de carga
import { cn } from "../../../lib/utils";

const BUTTON_SIZES = {
  small: "px-4 py-2 text-sm",
  medium: "px-6 py-3 text-base",
  large: "px-8 py-4 text-lg",
};

const BUTTON_VARIANTS = {
  primary:
    "bg-skin-button-acent text-skin-base-hover hover:bg-skin-button-acent-hover",
  outline: "border border-skin-decorative hover:border-skin-details",
};

const Button = React.memo(
  ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    size = "medium",
    disabled = false,
    loading = false,
    iconLeft = null,
    iconRight = null,
    ariaLabel = "",
    className = "",
    ...rest
  }) => {
    const buttonClass = cn(
      "inline-flex items-center justify-center rounded-xs transition-colors duration-200 ease-in-out",
      BUTTON_VARIANTS[variant],
      BUTTON_SIZES[size],
      {
        "cursor-not-allowed opacity-50": disabled || loading,
        "gap-2": iconLeft || iconRight,
      },
      className
    );

    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        className={buttonClass}
        aria-label={ariaLabel}
        {...rest}
      >
        {/* Icono de la izquierda */}
        {iconLeft && !loading && <span className="icon-left">{iconLeft}</span>}

        {/* Mostrar el estado de carga */}
        {loading ? <Loader className="animate-spin w-5 h-5" /> : children}

        {/* Icono de la derecha */}
        {iconRight && !loading && (
          <span className="icon-right">{iconRight}</span>
        )}
      </button>
    );
  }
);

export default Button;
