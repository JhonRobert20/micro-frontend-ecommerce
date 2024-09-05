import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const ProductsCardsInfo = ({ data }) => {
  const productsCard = () => {
    return data?.map((cardData, index) => (
      <ProductCard key={cardData.title} card={cardData} index={index} />
    ));
  };

  return (
    <div className="w-full">
      <div className="flex justify-center gap-4">
        {productsCard().map((cardComponent, index) => (
          <motion.div
            key={`card-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.2 * index,
                ease: "easeOut",
              },
            }}
            className="rounded-3xl"
          >
            {cardComponent}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCardsInfo;
