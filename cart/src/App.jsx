import React from "react";
import ReactDOM from "react-dom/client";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import PaymentPage from "./pages/PaymentPage";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <PaymentPage />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
