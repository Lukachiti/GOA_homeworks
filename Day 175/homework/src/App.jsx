import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";

const Products = lazy(() => import("./Products"));
const Contact = lazy(() => import("./Contact"));

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/products">
          Products
        </Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
