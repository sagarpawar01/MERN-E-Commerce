import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
// import store from "./redux/store";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import React from "react";

// import PrivateRoute from "./components/PrivateRoute";

// Auth
// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";

// import AdminRoute from "./pages/Admin/AdminRoute";
// import Profile from "./pages/User/Profile";
// import UserList from "./pages/Admin/UserList";

// import CategoryList from "./pages/Admin/CategoryList";

// import ProductList from "./pages/Admin/ProductList";
// import AllProducts from "./pages/Admin/AllProducts";
// import ProductUpdate from "./pages/Admin/ProductUpdate";

// import Home from "./pages/Home.jsx";
// import Favorites from "./pages/Products/Favorites.jsx";
// import ProductDetails from "./pages/Products/ProductDetails.jsx";

// import Cart from "./pages/Cart.jsx";
// import Shop from "./pages/Shop.jsx";

// import Shipping from "./pages/Orders/Shipping.jsx";
// import PlaceOrder from "./pages/Orders/PlaceOrder.jsx";
// import Order from "./pages/Orders/Order.jsx";
// import OrderList from "./pages/Admin/OrderList.jsx";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
// import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} />
  )
)
ReactDOM.createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
);
