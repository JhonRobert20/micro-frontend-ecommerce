import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "remixicon/fonts/remixicon.css";

import "./index.scss";
import SafeComponent from "./SafeComponent";

// const Widget = React.lazy(() => import("catalog/Widget"));
const App = () => (
  <div className="w-full h-full">
    <SafeComponent>
      <Suspense>
        <div>hosst page tendrá headers, etc.</div>
      </Suspense>
    </SafeComponent>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
