import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Para navegación
import { getProducts } from "catalog/products";
import placeAddToCart from "addtocart/placeAddToCart";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const addToCartRefs = useRef({});
  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);

      const refs = {};
      products.forEach((product) => {
        refs[product.id] = React.createRef();
      });
      addToCartRefs.current = refs;
    });
  }, []);

  useEffect(() => {
    products.forEach((product) => {
      if (addToCartRefs.current[product.id]?.current) {
        placeAddToCart(addToCartRefs.current[product.id].current, product.id);
      }
    });
  }, [products]);

  if (!products.length) return <div>Loading products...</div>;

  const handleViewDetails = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <div key={product.id} className="border p-5 rounded shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover mb-3"
          />
          <h2 className="font-bold text-xl">{product.name}</h2>
          <p className="text-gray-700">{product.price}</p>
          <div ref={addToCartRefs.current[product.id]} className="mt-3">
            <button className="bg-blue-500 text-black px-3 py-2 rounded mt-2">
              Agregar al carrito
            </button>
          </div>
          <p className="mt-3 text-gray-500">{product.description}</p>
          <button
            onClick={() => handleViewDetails(product.id)}
            className="bg-red-500 text-black px-3 py-2 rounded mt-3"
          >
            Ver detalles
          </button>
        </div>
      ))}
    </div>
  );
}
