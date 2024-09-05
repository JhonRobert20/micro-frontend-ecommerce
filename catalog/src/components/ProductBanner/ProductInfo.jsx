import ProductText from "./ProductText";
import ThreeDCardDemo from "../UI/3dCard";
import ActionButtons from "../UI/ActionButtons";

const ProductInfo = () => (
  <div className="flex flex-col gap-3 items-center">
    <div className="flex items-center">
      <div className="relative flex items-center justify-center h-full w-full">
        <ThreeDCardDemo />
      </div>
      <ActionButtons />
    </div>
    <ProductText />
  </div>
);

export default ProductInfo;
