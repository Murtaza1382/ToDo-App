import React from "react";

function SignIn() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-purple-600">
        <form
          action=""
          className="flex items-center justify-center flex-col w-xl h-96 bg-gray-100 gap-7 text-xl pl-8 pr-8 rounded rounded-md"
        >
          <h1 className="text-3xl font-serif text-purple-600">Sing In</h1>
          <div className="w-full h-1 bg-purple-600 rounded rounded-full mb-2"></div>
          <div className="flex flex-col w-full relative">
            <label
              htmlFor="username"
              className="bg-gray-100 absolute bottom-5 left-1 text-purple-600"
            >
              Username:
            </label>
            <input
              type="text"
              name="username"
              required
              autoComplete="none"
              className="outline-none border border-purple-700 bg-gray-100 h-8 text-[1rem]"
            />
          </div>
          <div className="flex flex-col w-full relative">
            <label
              htmlFor="pssword"
              className="bg-gray-100  absolute bottom-5 left-1 text-purple-600"
            >
              Password:
            </label>
            <input
              type="text"
              name="password"
              required
              autoComplete="none"
              className="outline-none border border-purple-700 bg-gray-100 h-8 text-[1rem]"
            />
          </div>
          <div className="bg-purple-600 w-full flex items-center justify-center h-10 rounded rounded-full cursor-pointer">
            <button className="text-white w-full h-full">Submit</button>
          </div>
          <div className="w-full flex items-center justify-center flex-col text-[1rem]">
            <a href="#" className="text-blue-900 font-semibold">
              Forget Password
            </a>
            <p>
              Do not have an Account?
              <a href="#" className="ml-2 text-blue-900 font-semibold">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;
