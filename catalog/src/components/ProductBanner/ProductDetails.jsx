import ProductInfo from "./ProductInfo";
import Button from "host/Button";

const ProductDetails = () => (
  <div className="flex flex-col w-1/2 h-72 md:h-[40rem] gap-6 items-center justify-between">
    <ProductInfo />
    <Button
      onClick={() => console.log("Clicked")}
      variant="primary"
      size="medium"
      ariaLabel={"Ver más"}
    >
      Ver más{" "}
    </Button>
  </div>
);

export default ProductDetails;
