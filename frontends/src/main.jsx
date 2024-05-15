import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Login from "./pages/Auth/Login";

// import PrivateRoute from "./components/PrivateRoute";

// Auth
// import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import AdminRoute from "./pages/Admin/AdminRoute";
import Profile from "./pages/User/Profile";
import PrivateRoute from "./components/PrivateRoute";
import UserList from "./pages/Admin/UserList";
import CategoryList from "./pages/Admin/CategoryList";
import ProductList from "./pages/Admin/ProductList";
import ProductUpdate from "./pages/Admin/ProductUpdate";
import AllProducts from "./pages/Admin/AllProducts";
import Home from "./pages/Home";
// import Favourites from "./pages/products/Favourites";
import ProductDetails from "./pages/products/ProductDetails";
import Favourites from "./pages/products/Favourites";
import Cart from "./pages/Cart";

import Shop from "./pages/Shop";
import Shipping from "./pages/Orders/Shipping";
import PlaceOrder from "./pages/Orders/PlaceOrder";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Order from "./pages/Orders/Order";
import UserOrders from "./pages/User/UserOrders";
import OrderList from "./pages/Admin/OrderList";
import AdminDashboard from "./pages/Admin/AdminDashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<PrivateRoute />}>
      <Route path="/profile" element={<Profile />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/placeorder" element={<PlaceOrder />} />
      <Route path="/order/:id" element={<Order />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" index={true} element={<Home />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/user-orders" element={<UserOrders />} />
      <Route path="/admin" element={<AdminRoute />}>
      <Route path="userList" element={<UserList />} />
      <Route path="categoryList" element={<CategoryList />} />
      <Route path="productList" element={<ProductList />} />
      <Route path="allProductslist" element={<AllProducts />} />
      <Route path="orderlist" element={<OrderList />} />
      <Route path="product/update/:_id" element={<ProductUpdate />} />
      <Route path="dashboard" element={<AdminDashboard />} />
      </Route>
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PayPalScriptProvider>
    <RouterProvider router={router} />
    </PayPalScriptProvider>
  </Provider>
);
