import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleChange, handleSubmit } from "../slices/authSlice";
import { useEffect } from "react";

function Login() {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateTo =
    new URLSearchParams(window.location.search).get("referer") || "/";

  useEffect(() => {
    if (authState.isLoggedIn) {
      navigate(navigateTo);
    }
  }, [authState.isLoggedIn, navigate, navigateTo]);

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(handleSubmit(authState.form));
          }}
          className="bg-white p-8 rounded shadow-md w-96"
        >
          {authState.message.text && (
            <div
              className={`mb-4 p-2 text-center rounded ${
                authState.message.type === "success"
                  ? "bg-green-200 text-green-800"
                  : "bg-red-200 text-red-800"
              }`}
            >
              {authState.message.text}
            </div>
          )}
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={authState.form.email}
            onChange={(e) =>
              dispatch(
                handleChange({ name: e.target.name, value: e.target.value })
              )
            }
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={authState.form.password}
            onChange={(e) =>
              dispatch(
                handleChange({ name: e.target.name, value: e.target.value })
              )
            }
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            {authState.loading ? "Logging in..." : "Login"}
          </button>
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
