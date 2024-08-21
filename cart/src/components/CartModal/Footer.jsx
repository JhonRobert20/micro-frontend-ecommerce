import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
const ModalFooter = () => {
  const buttons = ["Close", "Save"];
  return (
    <div className="w-full flex justify-between gap-5">
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
              ? "border-[#f7f3ed] border-2 "
              : "bg-[#f7f3ed]  border-2 border-[#1C1C1C]"
          )}
        >
          {button}
        </motion.div>
      ))}
    </div>
  );
};

export default ModalFooter;
