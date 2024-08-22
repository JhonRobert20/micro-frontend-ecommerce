import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login/Login";
import "./index.scss";

const App = () => <Login></Login>;
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
