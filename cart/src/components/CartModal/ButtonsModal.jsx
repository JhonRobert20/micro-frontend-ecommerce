import { CircleX, ShoppingBag } from "lucide-react";

export const ModalClose = () => {
  return (
    <div
      className="z-30 absolute top-[10px] right-[10px]  rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
      aria-label="Close"
    >
      <CircleX />
    </div>
  );
};

export const ModalOpen = () => {
  return (
    <div className="relative rounded-full p-1 text-[#1C1C1C] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1C1C1C]">
      <ShoppingBag />{" "}
    </div>
  );
};
