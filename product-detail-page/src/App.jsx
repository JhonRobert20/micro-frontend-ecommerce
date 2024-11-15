import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

import "./index.scss";
import PDPContent from "./ProductContent";
import ProductsContent from "./ProductsContent";

const App = () => (
  <Router>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>
        <Routes>
          <Route path="/products" Component={ProductsContent} />
          <Route path="/products/:id" Component={PDPContent} />
        </Routes>
      </div>
    </div>
  </Router>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
