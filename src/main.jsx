import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import IncomePage from "./pages/IncomePage";
import ExpensePage from "./pages/ExpensePage";
import Main from "./Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path : "/income",
        element : <IncomePage></IncomePage>
      },
      {
        path: "/expense",
        element: <ExpensePage></ExpensePage>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);