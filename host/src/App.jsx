import React from "react";
import ReactDOM from "react-dom/client";
import Widget from "catalog/Widget";

import "./index.scss";

const App = () => (
  <div className="bg-red-500 w-full h-full">
    <Widget />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
