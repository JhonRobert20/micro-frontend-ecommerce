import React, { useState, useEffect } from "react";

import { cart, clearCart } from "./cart";
import { currency } from "catalog/products";
import DialogDemo from "./components/Modal/CartModal";

export default function MiniCart() {
  const [items, setItems] = useState(undefined);
  const [showCart, setShowCart] = useState(false);

  //Use a custom hook later
  useEffect(() => {
    setItems(cart.value?.cartItems);
    return cart.subscribe((c) => {
      setItems(c?.cartItems);
    });
  }, []);

  if (!items) return null;

  return (
    <>
      <button
        type="button"
        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        onClick={() => setShowCart(!showCart)}
      >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">Cart</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path>
        </svg>
        <div className="w-5 rounded-full text-white  text-sm aspect-square bg-red-500 flex justify-center items-center absolute bottom-0 right-0 translate-x-[25%] translate-y-[25%] ">
          {items.length}
        </div>
      </button>
      {showCart && (
        // <>
        //   <div
        //     className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
        //     style={{
        //       width: 300,
        //       top: "2rem",
        //     }}
        //   >
        //     <div
        //       className="grid gap-3 text-sm"
        //       style={{
        //         gridTemplateColumns: "1fr 3fr 10fr 2fr",
        //       }}
        //     >
        //       {items.map((item) => (
        //         <React.Fragment key={item.id}>
        //           <div>{item.quantity}</div>
        //           <img src={item.image} alt={item.name} className="max-h-6" />
        //           <div>{item.name}</div>
        //           <div className="text-right">
        //             {currency.format(item.quantity * item.price)}
        //           </div>
        //         </React.Fragment>
        //       ))}
        //       <div></div>
        //       <div></div>
        //       <div></div>
        //       <div>
        //         {currency.format(
        //           items.reduce((a, v) => a + v.quantity * v.price, 0)
        //         )}
        //       </div>
        //     </div>
        //     <div className="flex">
        //       <div className="flex-grow">
        //         <button
        //           id="clearcart"
        //           className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm"
        //           onClick={clearCart}
        //         >
        //           Clear Cart
        //         </button>
        //       </div>
        //       <div className="flex-end">
        //         <button
        //           className="bg-green-900 text-white py-2 px-5 rounded-md text-sm"
        //           onClick={clearCart}
        //         >
        //           Checkout
        //         </button>
        //       </div>
        //     </div>
        //   </div>
        // </>
        <div className="container relative">
          <DialogDemo items={items.length} />
        </div>
      )}
    </>
  );
}
