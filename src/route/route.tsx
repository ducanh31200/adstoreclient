import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { PrivateRoute } from "./privateRoute";
import HomePage from "../Pages/client/homepage/HomePage";
import Product from "../Pages/client/product/Product";
import ProductDetail from "../Pages/client/product/ProductDetail";
import Cart from "../Pages/client/cart/Cart";
import Bill from "../Pages/client/cart/Bill";
import Contact from "../Pages/client/contact/Contact";
import Dashboard from "../Pages/admin/dashboard/Dashboard";

function Router() {
  return (
    <Switch>
      <PrivateRoute path="/" component={HomePage} exact />
      <PrivateRoute path="/product" component={Product} exact />
      <PrivateRoute path="/product/:name" component={Product} exact />
      <PrivateRoute
        path="/product/:category/:id"
        component={ProductDetail}
        exact
      />
      <PrivateRoute path="/cart" component={Cart} exact />
      <PrivateRoute path="/bill" component={Bill} exact />
      <PrivateRoute path="/dashboard" component={Dashboard} exact />
      <PrivateRoute path="/contact" component={Contact} exact />
    </Switch>
  );
}

export default Router;
