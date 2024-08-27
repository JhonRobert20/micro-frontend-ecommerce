import { Button } from "../../UI/Buttons";
import { BUTTONS_MODAL } from "../../../lib/constants";

const FooterWithItems = ({ cartTotalPrice }) => {
  return (
    <div className="bg-[#f7f3ed] w-full flex flex-col items-start gap-4 pt-8 border-t-[#D1D9D6] border-[1px]">
      <div className="gap-0.5 px-8 flex flex-col items-start justify-start">
        <p className="text-blue-500 hover:underline">
          ¿Tienes un código promocional?
        </p>
        <p className="font-semibold">
          Total <span className="text-xs font-normal">IVA incluido</span>
        </p>
        <span>{cartTotalPrice}</span>
      </div>

      <div className="w-full flex justify-between gap-5 px-8 pb-8">
        {BUTTONS_MODAL.map((button, idx) => (
          <Button
            key={button.label}
            label={button.label}
            isPrimary={button.isPrimary}
            idx={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default FooterWithItems;
