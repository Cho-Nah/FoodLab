import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "../src/app/store";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";

// import Auth from "./features/Auth";
import { AccountPage } from "./pages/AccountPage";

const router = createBrowserRouter([
  // { path: "/", element: <Auth /> },
  { path: "/", element: <HomePage /> },
  { path: "/account", element: <AccountPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
