import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

import PDPContent from "pdp/ProductContent";
import HomeContent from "catalog/HomeContent";
import CartContent from "cart/CartContent";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./pages/NotFound";
import UploadFile from "./pages/UploadFile";
import Home from "./pages/Home";

export function MainLayout({ children }) {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/products/:id" Component={PDPContent} />
        <Route path="/cart" Component={CartContent} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </Router>

    // <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
    //   <div className="flex-1 flex flex-col h-full">
    //     <Router>
    //       <Routes>
    //         <Route exact path="/" Component={UploadFile} />
    //       </Routes>
    //     </Router>
    //   </div>
    // </main>
  );
}
