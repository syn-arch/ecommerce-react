import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Login(props) {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col bg-gray-100 px-10 md:px-0">
      <FontAwesomeIcon icon={faUser} className="text-5xl mb-3" />
      <p className="text-center font-medium text-xl">WELCOME BACK!</p>
      <div className="w-full md:w-1/2 lg:w-1/3 bg-white shadow-lg p-10 rounded-md border-t-8 border-blue-500 mt-10">
        <form>
          <label htmlFor="email" className="text-gray-500">
            E-mail
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            className="w-full shadow-sm focus:outline-none p-2  mt-2 bg-gray-100 mb-5"
          />
          <label htmlFor="password" className="text-gray-500">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="w-full shadow-sm focus:outline-none p-2  mt-2 bg-gray-100"
          />
          <button
            type="submit"
            className="w-full mt-5 bg-blue-500 text-white py-3 "
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
