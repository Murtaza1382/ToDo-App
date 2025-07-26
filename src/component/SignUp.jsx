import React from "react";

function SignUp() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-purple-600">
        <form
          action=""
          className="flex items-center justify-center flex-col w-xl h-[30rem] bg-gray-100 gap-7 text-xl pl-8 pr-8 rounded rounded-md"
        >
          <h1 className="text-3xl font-serif text-purple-600">Sing Up</h1>
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
              autoComplete="new-username"
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
              type="password"
              name="password"
              required
              autoComplete="off"
              className="outline-none border border-purple-700 bg-gray-100 h-8 text-[1rem]"
            />
          </div>

          <div className="flex flex-col w-full relative">
            <label
              htmlFor="pssword"
              className="bg-gray-100  absolute bottom-5 left-1 text-purple-600"
            >
              Confirm Pasword:
            </label>
            <input
              type="password"
              name="password"
              required
              autoComplete="off"
              className="outline-none border border-purple-700 bg-gray-100 h-8 text-[1rem]"
            />
          </div>
          <div className="flex flex-col w-full relative">
            <label
              htmlFor="email"
              className="bg-gray-100  absolute bottom-5 left-1 text-purple-600"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              className="outline-none border border-purple-700 bg-gray-100 h-8 text-[1rem]"
            />
          </div>
          <div className="bg-purple-600 w-full flex items-center justify-center h-10 rounded rounded-full cursor-pointer">
            <button className="text-white w-full h-full">Submit</button>
          </div>
          <div className="w-full flex items-center justify-center flex-col text-[1rem]">
            <p>
              Already Have an Account?
              <a href="#" className="ml-2 text-blue-900 font-semibold">
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
