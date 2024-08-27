import { X, ShoppingBag } from "lucide-react";
import { IconButton } from "../UI/Buttons";

// Componente para cerrar el modal
export const ModalClose = ({ onClick }) => (
  <IconButton
    icon={X}
    onClick={onClick}
    ariaLabel="Close"
    className="hover:text-[#1F1511] text-[#D1D9D6] m-8"
  />
);

// Componente para abrir el modal
export const ModalOpen = ({ onClick }) => (
  <IconButton
    icon={ShoppingBag}
    onClick={onClick}
    ariaLabel="Open"
    className="p-1 text-[#1F1511]"
  />
);
