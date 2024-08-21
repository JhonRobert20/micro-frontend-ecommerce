import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
const ModalFooter = () => {
  const buttons = [
    {
      label: "Close",
      className: "w-1/2 py-1.5 px-2 font-medium bg-red-500",
    },
    {
      label: "Save",
      className: "w-1/2 py-1.5 px-2 font-medium border-black border-2",
    },
  ];
  return (
    <div className="w-full flex justify-between gap-2">
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
            "focus:shadow-[0_0_0_2px] focus:outline-none",
            button.className
          )}
        >
          {button.label}
        </motion.div>
      ))}
    </div>
  );
};

export default ModalFooter;
