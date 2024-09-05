import { MoveRight } from "lucide-react";

const CardInfoHovered = ({ title, isHovered }) => (
  <div className="p-7 flex flex-col absolute bottom-0 w-full text-xl tracking-widest">
    <div className="flex">
      <p>{title}</p>
    </div>
    {isHovered && (
      <div className="flex mt-2 justify-between w-full opacity-100">
        <p>Descubre más</p>
        <MoveRight strokeWidth={0.75} className="text-skin-decorative" />
      </div>
    )}
  </div>
);

export default CardInfoHovered;
