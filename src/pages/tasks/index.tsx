import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

import AddTaskForm from "../../components/main/tasks/AddTaskForms";

const data = [
  {
    name: "Lorem Ipsum dolar soto",
    department: "Documentation",
    priority: "Medium",
    assignee: {
      image: <img src="" />,
      name: "Sannani Awale",
    },
    dueDate: new Date(),
  },
  {
    name: "Lorem Ipsum dolar soto",
    department: "Documentation",
    priority: "Medium",
    assignee: {
      image: <img src="" />,
      name: "Sannani Awale",
    },
    dueDate: new Date(),
  },
];

const Tasks: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <MainLayout>
      <Rodal width="808" visible={visible} onClose={() => setVisible(false)}>
        <AddTaskForm />
      </Rodal>

      <div className="absolute bottom-6 right-6">
        <button
          type="button"
          className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-geekBlue-500  hover:bg-geekBlue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setVisible(true)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>

      <div className="px-8 py-3">
        <div className="flex justify-between items-center">
          <div>
            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">
                Select a tab
              </label>
              <select
                id="tabs"
                name="tabs"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option selected>List</option>
                <option>Board</option>
                <option>Reports</option>
              </select>
            </div>
            <div className="hidden sm:block">
              <div className="">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  <a
                    href="#"
                    className="border-geekBlue-500 text-geekBlue-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                    aria-current="page"
                  >
                    List
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  >
                    Board
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  >
                    Reports
                  </a>
                </nav>
              </div>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-400 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                />
              </svg>
              <span className="font-semibold">Customize</span>
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <div>
            <label htmlFor="search" className="sr-only">
              Search Task
            </label>
            <div className="relative text-gray-400 focus-within:text-gray-400 bg-white">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search"
                name="search"
                className="block w-96 pl-10 pr-3 py-2 border-gray-300 border-2 shadow-sm rounded-md leading-5 bg-white bg-opacity-25 text-gray-400 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
                placeholder="Search Task"
                type="search"
              />
            </div>
          </div>
          <div>
            <div>
              <label
                id="listbox-label"
                className="block text-sm font-medium text-gray-700"
              >
                Assigned to
              </label>
              <div className="mt-1 relative">
                <button
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded="true"
                  aria-labelledby="listbox-label"
                  className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <span className="block truncate">Tom Cook</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </button>

                <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
                  <ul
                    tabIndex={-1}
                    role="listbox"
                    aria-labelledby="listbox-label"
                    aria-activedescendant="listbox-item-3"
                    className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                  >
                    <li
                      id="listbox-option-0"
                      role="option"
                      className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                    >
                      <span className="font-normal block truncate">
                        Wade Cooper
                      </span>

                      <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                        <path
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </path>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          TASK NAME
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Role
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                Jane Cooper
                              </div>
                              <div className="text-sm text-gray-500">
                                jane.cooper@example.com
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            Regional Paradigm Technician
                          </div>
                          <div className="text-sm text-gray-500">
                            Optimization
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Admin
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Tasks;
