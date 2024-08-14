import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

import PDPContent from "pdp/ProductContent";
import HomeContent from "catalog/HomeContent";
import CartContent from "cart/CartContent";
import NavBar from "./components/NavBar";

export function MainLayout() {
  return (
    <Router>
      <NavBar />
      <div className="container mx-auto mb-4">
        <Routes>
          <Route exact path="/" Component={HomeContent} />
          <Route path="/products/:id" Component={PDPContent} />
          <Route path="/cart" Component={CartContent} />
        </Routes>
      </div>
    </Router>
  );
}
