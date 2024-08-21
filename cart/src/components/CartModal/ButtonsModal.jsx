import { X, ShoppingBag } from "lucide-react";

export const ModalClose = () => {
  return (
    <X className="hover:text-[#1F1511] text-[#D1D9D6] m-8" aria-label="Close" />
  );
};

export const ModalOpen = () => {
  return (
    <div className="relative rounded-full p-1 text-[#1F1511] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1C1C1C]">
      <ShoppingBag />{" "}
    </div>
  );
};
