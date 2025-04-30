import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearInterval(timer);
  }, []); //mounting

  if (isLoading) return <h1>Loading...</h1>;

  if (!user) return navigate("/login");

  return children;
}

export default ProtectedRoute;
