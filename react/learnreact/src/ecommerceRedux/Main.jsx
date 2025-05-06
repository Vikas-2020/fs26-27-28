import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";
import Home from "./pages/Home";
import First from "./pages/First";
import Login from "./pages/Login";

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
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function Main() {
  return <RouterProvider router={router} />;
}

export default Main;
