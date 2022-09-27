import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faBox,
  faUsers,
  faCartShopping,
  faBook,
  faRightFromBracket,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar(props) {
  return (
    <aside className="w-full">
      <ul>
        <li className="bg-gray-800 py-2 border-l-4 my-8 pl-10">
          <a href="" className="text-lg block">
            <FontAwesomeIcon icon={faGauge} className="mr-3 text-xl" />
            Dashboard
          </a>
        </li>
        <li className="border-l-4 border-gray-900 my-8 pl-10">
          <a href="" className="text-lg block">
            <FontAwesomeIcon icon={faBox} className="mr-3 text-xl" />
            Data Master
          </a>
        </li>
        <li className="border-l-4 border-gray-900 my-8 pl-10">
          <a href="" className="text-lg block">
            <FontAwesomeIcon icon={faCartShopping} className="mr-3 text-xl" />
            Data Transaksi
          </a>
        </li>
        <li className="border-l-4 border-gray-900 my-8 pl-10">
          <a href="" className="text-lg block">
            <FontAwesomeIcon icon={faBook} className="mr-3 text-xl" />
            Data Laporan
          </a>
        </li>
        <li className="border-l-4 border-gray-900 my-8 pl-10">
          <a href="" className="text-lg block">
            <FontAwesomeIcon
              icon={faRightFromBracket}
              className="mr-3 text-xl"
            />
            Logout
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
