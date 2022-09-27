import React from "react";
import { Sidebar } from "./Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-200">
      <div className="hidden lg:block lg:w-1/5 bg-gray-900">
        <div className="w-full text-white">
          <a
            href=""
            className="font-bold text-lg flex justify-center my-10 text-center"
          >
            <FontAwesomeIcon icon={faReact} className="text-3xl mr-2" />
            NGADEMIN
          </a>
          <Sidebar />
        </div>
      </div>
      <div className="w-full lg:w-4/5">
        <div className="bg-white py-7 border-b-4 border-blue-700">
          <div className="flex justify-between px-10">
            <div className="button-expand"></div>
            <div className="flex">
              <FontAwesomeIcon icon={faUser} className="text-3xl mr-2" />
              Administrator
            </div>
          </div>
        </div>
        <div className="py-5 px-10">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
