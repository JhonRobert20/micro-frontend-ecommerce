import { cn } from "../../lib/utils";

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div className={cn(" mx-auto w-full px-12", className)}>{children}</div>
  );
};

export default MaxWidthWrapper;
