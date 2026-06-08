// import React from "react";
import { useNavigate, Link } from "react-router";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen w-screen">
        <h1 className="mb-2">Register</h1>

        <div className="form-container">
          <form
            onSubmit={handleSubmit}
            className="border gap-2 flex flex-col justify-center items-center rounded-2xl px-7 py-2 h-100 w-100"
          >
            <div className="input-group flex gap-1 flex-col w-full ">
              <label htmlFor="email">UserName</label>
              <input
                className="bg-gray-800 px-4 py-3 rounded-xl outline-none w-full"
                type="text"
                name="username"
                placeholder="Enter username"
              />
            </div>

            <div className="input-group flex gap-1 flex-col w-full ">
              <label htmlFor="email">Email</label>
              <input
                className="bg-gray-800 px-4 py-3 rounded-xl outline-none w-full"
                type="email"
                name="email"
                placeholder="Enter email address"
              />
            </div>

            <div className="input-group flex gap-1 flex-col w-full ">
              <label htmlFor="password">Password</label>
              <input
                className="bg-gray-800 px-4 py-3 rounded-xl outline-none w-full"
                type="password"
                name="password"
                placeholder="Enter password"
              />
            </div>

            <button className="cursor-pointer mt-3 bg-violet-500 px-8 py-2 text-white border-none font-semibold rounded-sm">
              Register
            </button>
          </form>
        </div>

        <p className="mt-2">
          Already have an account?{" "}
          <Link className="text-blue-600" to={"/login"}>
            Login
          </Link>
        </p>
      </main>
    </>
  );
};

export default Register;
