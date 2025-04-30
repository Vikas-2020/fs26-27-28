import { createBrowserRouter, RouterProvider } from "react-router-dom";
import First from "./pages/First";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Singleproduct from "./pages/Singleproduct";
import CartProvider from "./contexts/CartContext";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AuthProvider from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/wishlist",
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/product/:id",
        element: <Singleproduct />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      // {
      //   path: "/my-orders",
      //   element: (
      //     <ProtectedRoute>
      //       <MyOrders />
      //     </ProtectedRoute>
      //   ),
      // },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function Main() {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
}

export default Main;
