import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ViewParts from "./Pages/ViewParts";
import AddParts from "./Pages/AddParts";
import EditParts from "./Pages/EditParts";
import DeleteParts from "./Pages/DeleteParts";
import Profile from "./Pages/Profile";
import AutoParts from "./Pages/AutoParts";
import ShopParts from "./Pages/ShopParts";
import PartDetails from "./Pages/PartDetails";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProtectedRout from "./Pages/ProtectedRout";

const routerVariables = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/home",
        element: (
          <ProtectedRout>
            <Home />
          </ProtectedRout>
        ),
      },
      {
        path: "/viewparts",
        element: (
          <ProtectedRout>
            <ViewParts />
          </ProtectedRout>
        ),
      },
      {
        path: "/addparts",
        element: (
          <ProtectedRout>
            <AddParts />
          </ProtectedRout>
        ),
      },
      {
        path: "/editparts",
        element: (
          <ProtectedRout>
            <EditParts />
          </ProtectedRout>
        ),
      },
      {
        path: "/deleteparts",
        element: (
          <ProtectedRout>
            <DeleteParts />
          </ProtectedRout>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRout>
            <Profile />
          </ProtectedRout>
        ),
      },
      {
        path: "/autoparts/:resId",
        element: (
          <ProtectedRout>
            <AutoParts />
          </ProtectedRout>
        ),
      },
      {
        path: "/shop",
        element: (
          <ProtectedRout>
            <ShopParts />
          </ProtectedRout>
        ),
      },
      {
        path: "/part/:id",
        element: (
          <ProtectedRout>
            <PartDetails />
          </ProtectedRout>
        ),
      },
      {
        path: "/about",
        element: (
          <ProtectedRout>
            <About />
          </ProtectedRout>
        ),
      },
      {
        path: "/contact",
        element: (
          <ProtectedRout>
            <Contact />
          </ProtectedRout>
        ),
      },
      {
        path: "*",
        element: <h1>Page not found Please check your URL</h1>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerVariables} />
  </React.StrictMode>
);

reportWebVitals();
