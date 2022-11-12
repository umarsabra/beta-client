import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Items from "./pages/Stock/Stock";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import AddItem from "./pages/Items/AddItem";
import Page from "./layout/Page";
import Tab from "./layout/Tab";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="tabs" element={<Tab/>}>
            <Route path="" element={<Home />} />
            <Route path="stock" element={<Items />} />
            <Route path="orders" element={<Orders />} />
            <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="pages" element={<Page/>}>
          <Route path="items">
            <Route path="add" element={<AddItem/>}/>
          </Route>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
