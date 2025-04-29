/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import app from "../firebase";

const auth = getAuth(app);

function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const userDetails = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userDetails.user;
      setMessage({ type: "success", text: "Registration successful!" });
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    }
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form
          className="bg-white p-8 rounded shadow-md w-96"
          onSubmit={handleSubmit}
        >
          {message.text && (
            <div
              className={`mb-4 p-2 text-center rounded ${
                message.type === "success"
                  ? "bg-green-200 text-green-800"
                  : "bg-red-200 text-red-800"
              }`}
            >
              {message.text}
            </div>
          )}

          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Register;
