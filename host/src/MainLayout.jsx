import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

import "./index.scss";
import Header from "./Header";
import PDPContent from "pdp/ProductContent";
import HomeContent from "catalog/HomeContent";
import CartContent from "cart/CartContent";

export default function MainLayout() {
  return (
    <>
      <Router>
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
          <div>
            <Routes>
              <Route exact path="/" Component={HomeContent} />
              <Route path="/products/:id" Component={PDPContent} />
              <Route path="/cart" Component={CartContent} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}
