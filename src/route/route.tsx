import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Bill from "../Pages/cart/Bill";
import Cart from "../Pages/cart/Cart";
import Contact from "../Pages/contact/Contact";
import HomePage from "../Pages/homepage/HomePage";
import Product from "../Pages/product/Product";
import ProductDetail from "../Pages/product/ProductDetail";

import { defaultRoute } from "./defaultroute";

interface IRoute {
  exact: Boolean;
  path: string;
  child: React.ReactChild | any;
}

const routes: Array<IRoute> = [
  {
    child: (
      <>
        <HomePage />
      </>
    ),
    path: defaultRoute.homepage,
    exact: true,
  },
  {
    child: (
      <>
        <Product />
      </>
    ),
    path: defaultRoute.product,
    exact: true,
  },
  {
    child: (
      <>
        <ProductDetail />
      </>
    ),
    path: defaultRoute.productDetail,
    exact: true,
  },
  {
    child: (
      <>
        <Contact />
      </>
    ),
    path: defaultRoute.contact,
    exact: true,
  },
  {
    child: (
      <>
        <Bill />
      </>
    ),
    path: defaultRoute.bill,
    exact: true,
  },
  {
    child: (
      <>
        <Cart />
      </>
    ),
    path: defaultRoute.cart,
    exact: true,
  },
];

// const renderPrivateRoute = (routes: Array<IPrivateRoute>) => {
//   return routes.map((r, i) => {
//     if (r.exact) {
//       return (
//         <PrivateRoute
//           path={r.path}
//           exact
//           key={i}
//           option={r.option}
//           roleRoute={r?.roleRoute}
//         >
//           {r.child}
//         </PrivateRoute>
//       );
//     } else {
//       return (
//         <PrivateRoute
//           path={r.path}
//           key={i}
//           option={r.option}
//           roleRoute={r?.roleRoute}
//         >
//           {r.child}
//         </PrivateRoute>
//       );
//     }
//   });
// };

const renderRoute = (routes: Array<IRoute>) => {
  return routes.map((r, i) => {
    if (r.exact) {
      return (
        <Route path={r.path} exact key={i}>
          {r.child}
        </Route>
      );
    } else {
      return (
        <Route path={r.path} key={i}>
          {r.child}
        </Route>
      );
    }
  });
};

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {renderRoute(routes)}
        <Route path="*"></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
