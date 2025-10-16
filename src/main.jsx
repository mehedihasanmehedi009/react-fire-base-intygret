import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Root from "./componentes/Layout/Root.jsx";
import Home from "./componentes/Home.jsx";
import Login from "./componentes/Layout/LogIn/Login.jsx";
import Register from "./componentes/Layout/Registar/Register.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import Odears from "./componentes/Odears/Odears.jsx";
import PrivetRouter from "./componentes/PrivetRouter/PrivetRouter.jsx";
import Show from "./componentes/Show/Show.jsx";
import Dosbord from "./Dasbord/Dosbord.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/Log In",
        Component: Login,
      },
      {
        path: "/Registsr",
        Component: Register,
      },
      {
        path: "/odears",
        element: <PrivetRouter>
            <Odears></Odears>
        </PrivetRouter>
      },
      {
        path:"/show",
        element:
          <PrivetRouter>
           <Show></Show>
          </PrivetRouter>
      },
      {
        path:"/Dasbord",
        element:<PrivetRouter>
            <Dosbord></Dosbord>
        </PrivetRouter>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
