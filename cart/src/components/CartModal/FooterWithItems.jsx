import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const FooterWithItems = ({ cartTotalPrice }) => {
  const buttons = ["Seguir comprando", "Pasar por caja"];
  return (
    <div className="bg-[#f7f3ed] w-full  flex flex-col items-start gap-4 pt-8 border-t-[#D1D9D6] border-[1px]">
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
        {buttons.map((button, idx) => (
          <motion.div
            key={button}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.2 + idx / 5,
            }}
            className={cn(
              "w-1/2 py-1.5 px-2 font-medium ",
              idx === 1
                ? "bg-[#1F1511] text-[#f7f3ed] "
                : "border-2 border-[#1F1511]"
            )}
          >
            {button}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FooterWithItems;
