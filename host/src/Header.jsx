import React from "react";

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container mx-auto">
      <div className="flex">
        {/* <div className="flex-grow flex">
          <Link to="/">Fidget Spinner World</Link> /<Link id="cart" to="/cart">Cart</Link>
        </div> */}
        <div className="flex-end relative">
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  );
}
