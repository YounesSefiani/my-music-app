import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Home from "./components/home";
import Poets from "./components/poets";
import Sheena_Ringo from "./components/sheena_ringo";
import Rhymester from "./components/rhymester";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/poets_of_the_fall",
        element: <Poets />,
      },
      {
        path: "/sheena_ringo",
        element: <Sheena_Ringo />,
      },
      {
        path: "/rhymester",
        element: <Rhymester />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
