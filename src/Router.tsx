import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AppContainer from "./views/AppContainer";
import Products from "./views/products/Products";
import Product from "./views/products/Product";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="app" element={<AppContainer/>}>
          <Route index element={<Navigate to="products"/>}/>
          <Route path="products">
            <Route index element={<Products/>}/>
            <Route path=":product" element={<Product/>}/>
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="app"/>}/>
      </Routes>
    </BrowserRouter>
  );
}