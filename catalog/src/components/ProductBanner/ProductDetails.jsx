import ProductBtn from "./ProductBtn";
import ProductInfo from "./ProductInfo";

const ProductDetails = () => (
  <div className="flex flex-col w-1/2 h-72 md:h-[40rem] gap-6 items-center justify-between">
    <ProductInfo />
    <ProductBtn />
  </div>
);

export default ProductDetails;
