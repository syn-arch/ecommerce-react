import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faBox,
  faCartShopping,
  faBook,
  faRightFromBracket,
  faArrowRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar(props) {
  const [isOpenMaster, setIsOpenMaster] = useState(false);
  const togglingMaster = () => setIsOpenMaster(!isOpenMaster);

  const [isOpenOrder, setIsOpenOrder] = useState(false);
  const togglingOrder = () => setIsOpenOrder(!isOpenOrder);

  return (
    <aside className="w-full">
      <ul>
        <li>
          <a
            href=""
            className="text-lg block py-2 border-l-4 my-3 pl-10 hover:bg-gray-700 bg-gray-800"
          >
            <FontAwesomeIcon icon={faGauge} className="mr-3 text-xl" />
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-lg block py-2 flex justify-between pr-5 border-l-4 border-gray-900 mt-3 pl-10 hover:bg-gray-700 hover:border-gray-700"
            onClick={togglingMaster}
          >
            <div>
              <FontAwesomeIcon icon={faBox} className="mr-3 text-xl" />
              Data Master
            </div>
            <div>
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </div>
          </a>
          {isOpenMaster && (
            <ul>
              <li>
                <a href="" className="block hover:bg-gray-700 py-2 pl-16">
                  <FontAwesomeIcon icon={faCircle} className="text-xs mr-3" />
                  Data Slider
                </a>
              </li>
              <li>
                <a href="" className="block hover:bg-gray-700 py-2 pl-16">
                  <FontAwesomeIcon icon={faCircle} className="text-xs mr-3" />
                  Data Kategori
                </a>
              </li>
              <li>
                <a href="" className="block hover:bg-gray-700 py-2 pl-16">
                  <FontAwesomeIcon icon={faCircle} className="text-xs mr-3" />
                  Data Produk
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a
            href="#"
            className="text-lg block py-2 border-l-4 border-gray-900 mt-3 pl-10 hover:bg-gray-700 hover:border-gray-700 flex justify-between pr-5"
            onClick={togglingOrder}
          >
            <div>
              <FontAwesomeIcon icon={faCartShopping} className="mr-3 text-xl" />
              Data Order
            </div>
            <div>
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </div>
          </a>
          {isOpenOrder && (
            <ul>
              <li>
                <a href="" className="block hover:bg-gray-700 py-2 pl-16">
                  <FontAwesomeIcon icon={faCircle} className="text-xs mr-3" />
                  Data Order
                </a>
              </li>
              <li>
                <a href="" className="block hover:bg-gray-700 py-2 pl-16">
                  <FontAwesomeIcon icon={faCircle} className="text-xs mr-3" />
                  Data Kategori
                </a>
              </li>
              <li>
                <a href="" className="block hover:bg-gray-700 py-2 pl-16">
                  <FontAwesomeIcon icon={faCircle} className="text-xs mr-3" />
                  Data Produk
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a
            href=""
            className="text-lg block py-2 border-l-4 border-gray-900 my-3 pl-10 hover:bg-gray-700 hover:border-gray-700"
          >
            <FontAwesomeIcon icon={faBook} className="mr-3 text-xl" />
            Data Laporan
          </a>
        </li>
        <li>
          <a
            href=""
            className="text-lg block py-2 border-l-4 border-gray-900 my-3 pl-10 hover:bg-gray-700 hover:border-gray-700"
          >
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
