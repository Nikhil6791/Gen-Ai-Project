import React, { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const { loading, handleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLogin({ email, password });
  };

  if (loading) {
    return (
      <main>
        <h1>Loading....</h1>
      </main>
    );
  }
  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen w-screen">
        <h1 className="mb-2">Login</h1>

        <div className="form-container">
          <form
            onSubmit={handleSubmit}
            className="border gap-2 flex flex-col justify-center items-center rounded-2xl px-7 py-2 h-100 w-100"
          >
            <div className="input-group flex gap-1 flex-col w-full ">
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="bg-gray-800 px-4 py-3 rounded-xl outline-none w-full"
                type="email"
                name="email"
                placeholder="Enter registered email"
              />
            </div>

            <div className="input-group flex gap-1 flex-col w-full ">
              <label htmlFor="password">Password</label>
              <div className="flex justify-end items-center relative">
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="bg-gray-800 px-4 py-3 rounded-xl outline-none w-full"
                  type="password"
                  name="password"
                  placeholder="Enter registered password"
                />

                <button
                  className="absolute mr-3 cursor-pointer"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
            </div>

            <button className="cursor-pointer mt-3 bg-violet-500 px-8 py-2 text-white border-none font-semibold rounded-sm">
              Login
            </button>
          </form>
        </div>

        <p className="mt-2">
          Don't have an account?{" "}
          <Link className="text-blue-600" to={"/register"}>
            Register
          </Link>
        </p>
      </main>
    </>
  );
};

export default Login;
