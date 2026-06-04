import React from "react";

const Login = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen w-screen">
        <h1 className="mb-2">Login</h1>

        <div className="form-container">
          <form className="border gap-2 flex flex-col justify-center items-center rounded-2xl px-7 py-2 h-100 w-100">
            <div className="input-group flex gap-1 flex-col w-full ">
              <label htmlFor="email">Email</label>
              <input
                className="bg-gray-800 px-4 py-3 rounded-xl outline-none w-full"
                type="email"
                name="email"
                placeholder="Enter registered email"
              />
            </div>

            <div className="input-group flex gap-1 flex-col w-full ">
              <label htmlFor="password">Password</label>
              <input
                className="bg-gray-800 px-4 py-3 rounded-xl outline-none w-full"
                type="password"
                name="password"
                placeholder="Enter registered password"
              />
            </div>

            <button className="cursor-pointer mt-3 bg-violet-500 px-8 py-2 text-white border-none font-semibold rounded-sm">
              Login
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
