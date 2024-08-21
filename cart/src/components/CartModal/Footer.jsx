import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
const ModalFooter = () => {
  const buttons = ["Close", "Save"];
  return (
    <div className="bg-[#f7f3ed] w-full flex justify-between gap-5 px-8 pb-8 pt-12 border-t-[#D1D9D6] border-[1px]">
      {buttons.map((button, idx) => (
        <motion.div
          key={button.label}
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
  );
};

export default ModalFooter;
