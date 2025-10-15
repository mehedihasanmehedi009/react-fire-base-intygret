import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./componentes/Layout/Root.jsx";
import Home from "./componentes/Home.jsx";
import Login from "./componentes/Layout/LogIn/Login.jsx";
import Register from "./componentes/Layout/Registar/Register.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [{
     index:true,
     Component:Home
    },
    {
     path:"/Log In",
     Component:Login
    },{
      path:"/Registsr",
      Component:Register
    }
  ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
