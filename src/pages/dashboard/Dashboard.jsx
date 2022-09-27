import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faUsers } from "@fortawesome/free-solid-svg-icons";

function Dashboard(props) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 bg-white flex rounded py-5 px-10 shadow mr-3 my-2">
          <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75 mr-3">
            <FontAwesomeIcon
              icon={faUsers}
              className="text-white text-xl p-2"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-semibold">8,451</p>
            <p>Users</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-white flex rounded py-5 px-10 shadow mr-3 my-2">
          <div className="p-3 rounded-full bg-pink-600 bg-opacity-75 mr-3">
            <FontAwesomeIcon icon={faBox} className="text-white text-xl p-2" />
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-semibold">2,451</p>
            <p>Products</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-white flex rounded py-5 px-10 shadow my-2">
          <div className="p-3 rounded-full bg-green-600 bg-opacity-75 mr-3">
            <FontAwesomeIcon
              icon={faUsers}
              className="text-white text-xl p-2"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-semibold">112</p>
            <p>Orders</p>
          </div>
        </div>
      </div>
      <div className="mt-5 overflow-y-auto rounded">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="leading-4 bg-gray-50 text-gray-500 border-gray-200 py-3 px-6 text-left">
                No
              </th>
              <th className="leading-4 bg-gray-50 text-gray-500 border-gray-200 py-3 px-6 text-left">
                Date
              </th>
              <th className="leading-4 bg-gray-50 text-gray-500 border-gray-200 py-3 px-6 text-left">
                Order ID
              </th>
              <th className="leading-4 bg-gray-50 text-gray-500 border-gray-200 py-3 px-6 text-left">
                Customer
              </th>
              <th className="leading-4 bg-gray-50 text-gray-500 border-gray-200 py-3 px-6 text-left">
                Total
              </th>
              <th className="leading-4 bg-gray-50 text-gray-500 border-gray-200 py-3 px-6 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="leading-4 bg-white border-gray-200 py-3 px-6">
                1
              </td>
              <td className="leading-4 bg-white border-gray-200 py-3 px-6">
                26 Mon, 2022
              </td>
              <td className="leading-4 bg-white border-gray-200 py-3 px-6">
                INV-00001020902022
              </td>
              <td className="leading-4 bg-white border-gray-200 py-3 px-6">
                Kian Santang
              </td>
              <td className="leading-4 bg-white border-gray-200 py-3 px-6">
                Rp. 305,030,00
              </td>
              <td className="leading-4 bg-white border-gray-200 py-3 px-6">
                <a href="" className="text-blue-500 font-semibold">
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;
