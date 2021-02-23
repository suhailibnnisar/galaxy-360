import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Select from "../../components/includes/Select";

import AddTaskForm, {
  FilledTaskFormDetail,
} from "../../components/main/tasks/AddTaskForms";
import { RodalModal as Modal } from "../../components/includes/Modal";
import CustomizeTaskForm from "../../components/main/tasks/CustomizeTaskForm";
import Kanban from "../../components/tasks/kanban";
import { initialData } from "../../components/tasks/tasks";

const COLOR_DEPARTMENT_MAPPING = {
  Documentation: "bg-green-100",
  Finance: "bg-geekBlue-100",
  Admission: "bg-purple-100",
};

const COLOR_PRIORITY_MAPPING = {
  High: "bg-red-100",
  Medium: "bg-yellow-100",
  Low: "bg-geekBlue-100",
};

const data = [
  {
    id: 1,
    name: "Get student profile",
    department: "Documentation",
    priority: "Medium",
    assignee: {
      image:
        "https://pbs.twimg.com/profile_images/1100866378586714112/7C-Asgzb_400x400.jpg",
      name: "Jenny Wilson",
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    dueDate: new Date(),
    checked: false,
  },
  {
    id: 2,
    name: "Check for current investment",
    department: "Finance",
    priority: "High",
    assignee: {
      image:
        "https://www.planbconsult.net/wp-content/uploads/2017/10/Plan-B-11-7-18-Tom-Cook-Photo-114.jpg",
      name: "Tom Cook",
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    dueDate: new Date(),
    checked: false,
  },
];

const Tasks: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [tasks, setTasks] = useState(data);
  const [selectedTab, setSelectedTab] = useState<"LIST" | "BOARD" | "REPORTS">(
    "LIST"
  );
  const [customizeVisible, setCustomizeVisible] = useState(false);
  const [rowFormVisible, setRowFormVisible] = useState(false);

  return (
    <>
      <div className="absolute bottom-6 right-6 z-50">
        <button
          type="button"
          className="inline-flex items-center p-3 border border-transparent rounded-full shadow-xl transition-all duration-75 text-white bg-geekBlue-500 hover:bg-geekBlue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-geekBlue-500"
          onClick={() => setVisible(true)}
          style={{
            boxShadow: "10px 10px 41px -14px rgba(15,98,254,1)",
          }}
        >
          <svg
            className="h-10 w-10"
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
      <MainLayout>
        <Modal visible={visible} setVisible={setVisible}>
          <AddTaskForm handleModalClose={() => setVisible(false)} />
        </Modal>
        <Modal visible={rowFormVisible} setVisible={setRowFormVisible}>
          <FilledTaskFormDetail setVisible={setRowFormVisible} />
        </Modal>
        <Modal visible={customizeVisible} setVisible={setCustomizeVisible}>
          <CustomizeTaskForm setCustomizeVisible={setCustomizeVisible} />
        </Modal>

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
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-geekBlue-500 focus:border-geekBlue-500 sm:text-sm rounded-md"
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
                      className={`${
                        selectedTab === "LIST"
                          ? "border-geekBlue-500 text-geekBlue-500"
                          : "border-transparent text-gray-500"
                      } hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                      aria-current="page"
                      onClick={() => setSelectedTab("LIST")}
                    >
                      List
                    </a>
                    <a
                      href="#"
                      onClick={() => setSelectedTab("BOARD")}
                      className={`${
                        selectedTab === "BOARD"
                          ? "border-geekBlue-500 text-geekBlue-500"
                          : "border-transparent text-gray-500"
                      } hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                    >
                      Board
                    </a>
                    <a
                      href="#"
                      onClick={() => setSelectedTab("REPORTS")}
                      className={`${
                        selectedTab === "REPORTS"
                          ? "border-geekBlue-500 text-geekBlue-500"
                          : "border-transparent text-gray-500"
                      } hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
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
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-geekBlue-500"
                onClick={() => setCustomizeVisible(true)}
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
              <div className="flex items-center">
                <Select
                  width="w-40"
                  defaultValue="All Tasks"
                  customOptions={[
                    "Incomplete Tasks",
                    "Complete Tasks",
                    "All Tasks",
                  ]}
                />
                <Select
                  defaultValue="All Time"
                  className="ml-4"
                  customOptions={["Due This Week", "Due Next Week", "Custom"]}
                />
                <Select
                  defaultValue="Status"
                  customOptions={["Low", "Medium", "High"]}
                  className="ml-4"
                />
                <Select
                  defaultValue="Mike Henry"
                  className="ml-4"
                  width="w-48"
                  customOptions={[
                    {
                      value: "Jenny Wilson",
                      image:
                        "https://blogs.mcgill.ca/caps/files/2012/05/sheryl-sandberg-could-become-one-of-the-wealthiest-self-made-women-in-the-world.jpg",
                    },
                    {
                      value: "Devon Webb",
                      image:
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=mR7Mc7kSlc&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                    },
                    {
                      value: "Sheldon Cooper",
                      image:
                        "https://img.jakpost.net/c/2017/03/04/2017_03_04_22796_1488609941._large.jpg",
                    },
                    { value: "Hari Kumar Khati" },
                  ]}
                  showImage
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            {selectedTab === "LIST" ? (
              <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b border-gray-200">
                      <table className="min-w-full w-full divide-y divide-gray-200 ">
                        <thead className="">
                          <tr>
                            <th />
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              TASK NAME
                            </th>
                            <th
                              scope="col"
                              className="flex justify-center items-center px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              DEPARTMENT
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-4 w-4 ml-1"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                />
                              </svg>
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              <div className="flex justify-center items-center">
                                PRIORITY
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="h-4 w-4 ml-1"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                  />
                                </svg>
                              </div>
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              ASSIGNEE
                            </th>

                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              <div className="flex items-center">
                                DUE DATE
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="h-4 w-4 ml-1"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                  />
                                </svg>
                              </div>
                            </th>

                            <th
                              scope="col"
                              className="flex items-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              COLUMNS
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-4 w-4 ml-1"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                              </svg>
                            </th>
                          </tr>
                        </thead>
                        <tbody
                          className="bg-white divide-y divide-gray-200 overflow-y-hidden rounded-2xl"
                          id="__xeromi_task-tbody"
                        >
                          {initialData
                            .sort(() => 0.5 - Math.random())
                            .map((a) => ({ sort: Math.random(), value: a }))
                            .sort((a, b) => a.sort - b.sort)
                            .map((a) => a.value)
                            .map((item) => {
                              const month = item.dueDate.toLocaleString(
                                "default",
                                {
                                  month: "short",
                                }
                              );

                              const day = item.dueDate.getMonth();

                              const setChecked = () => {
                                setTasks(
                                  tasks.map((task) => {
                                    if (task.id === item.id) {
                                      return {
                                        ...task,
                                        checked: !item.checked,
                                      };
                                    } else {
                                      return task;
                                    }
                                  })
                                );
                              };

                              return (
                                <tr
                                  key={item.id}
                                  onClick={() => setRowFormVisible(true)}
                                  className="cursor-pointer hover:bg-gray-50 transition-all duration-100"
                                >
                                  <td className="pl-6 whitespace-nowrap">
                                    <input
                                      id="remember_me"
                                      name="remember_me"
                                      type="checkbox"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                      }}
                                      checked={item.checked}
                                      onChange={setChecked}
                                      className="focus:ring-geekBlue-500 h-4 w-4 text-geekBlue-600 cursor-pointer border-gray-300"
                                    />
                                  </td>
                                  <td className="px-6 whitespace-nowrap">
                                    <span
                                      className={`whitespace-nowrap text-sm text-gray-600 ${
                                        item.checked ? "line-through" : ""
                                      }`}
                                    >
                                      {item.name}
                                    </span>
                                  </td>
                                  <td className="px-6 flex justify-center py-4 whitespace-nowrap text-center">
                                    <span
                                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        COLOR_DEPARTMENT_MAPPING[
                                          item.department
                                        ]
                                      } ${COLOR_DEPARTMENT_MAPPING[
                                        item.department
                                      ]
                                        .replace("100", "800")
                                        .replace("bg", "text")}`}
                                    >
                                      {item.department}
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <span
                                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        COLOR_PRIORITY_MAPPING[item.priority]
                                      }  ${COLOR_PRIORITY_MAPPING[item.priority]
                                        .replace("100", "800")
                                        .replace("bg", "text")}`}
                                    >
                                      {item.priority}
                                    </span>
                                  </td>
                                  <td className="flex items-center py-4 whitespace-nowrap text-sm text-gray-500">
                                    <img
                                      className="inline-block h-6 w-6 rounded-full mr-2"
                                      src={item.assignee.image}
                                      alt=""
                                    />
                                    <span className="text-sm text-gray-600">
                                      {item.assignee.name}
                                    </span>
                                  </td>
                                  <td className="px-6 whitespace-nowrap">
                                    <td className="flex items-center whitespace-nowrap text-sm text-gray-600">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-gray-400 mr-2"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                      </svg>
                                      {month} {day}
                                    </td>
                                  </td>
                                  <td />
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : selectedTab === "BOARD" ? (
              <div
                className="flex pb-4 h-full overflow-x-scroll"
                style={{ height: "68vh" }}
              >
                {["Todo", "In Progress", "Review", "Done"].map((item) => (
                  <Kanban setRowFormVisible={setRowFormVisible} title={item} />
                ))}
              </div>
            ) : (
              <div>Reports</div>
            )}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Tasks;
