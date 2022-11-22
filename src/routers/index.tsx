import React from "react";
import { Routes, Route } from "react-router-dom";
import Layuot from "components/layuot/index";
import HomePage from "pages/home/HomePage";
import AboutPage from "pages/about/AboutPage";
import ContactPage from "pages/contact/ContactPage";
import ProductPage from "pages/product/ProductPage";
import ProductsPage from "pages/products/ProductsPage";

function RouterMain() {
  return (
    <Routes>
      <Route path="/" element={<Layuot />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default RouterMain;
