import { createBrowserRouter, RouterProvider } from "react-router-dom";
import First from "./pages/First";
import Home from "./pages/Home";
import Single from "./pages/Single";
import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <Single />,
      },
      {
        path: "/tv/:id",
        element: <Single />,
      },
    ],
  },
]);

function Main() {
  return <RouterProvider router={router} />;
}

export default Main;
