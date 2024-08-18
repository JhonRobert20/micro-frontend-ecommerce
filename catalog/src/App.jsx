import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "remixicon/fonts/remixicon.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import HomeContent from "./pages/HomeContent";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <HomeContent />
    </div>
  </QueryClientProvider>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
