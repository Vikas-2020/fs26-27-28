import { createBrowserRouter, RouterProvider } from "react-router-dom";
import First from "./pages/First";
import Home from "./pages/Home";
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
    ],
  },
]);

function Main() {
  return <RouterProvider router={router} />;
}

export default Main;
