import React, { useState } from "react";
import FormFooter from "../../../components/students/FormFooter";

const index = () => {
  const [toggleUSI, setToggleUSI] = useState(false);
  return (
    <div className="flex flex-col w-full overflow-y-scroll bg-bgPrim">
      <div className="py-5 px-md">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <div>
                <a
                  href="#"
                  className="ml-0 text-sm font-medium text-blue-500 hover:text-blue-700"
                >
                  Home
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  width="5"
                  height="12"
                  viewBox="0 0 5 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.1804 0.863636H3.04261L0.230114 11.3125H1.3679L4.1804 0.863636Z"
                    fill="#212121"
                  />
                </svg>
                <a
                  href="#"
                  className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  New Application
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  width="5"
                  height="12"
                  viewBox="0 0 5 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.1804 0.863636H3.04261L0.230114 11.3125H1.3679L4.1804 0.863636Z"
                    fill="#212121"
                  />
                </svg>
                <a
                  href="#"
                  aria-current="page"
                  className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Personal
                </a>
              </div>
            </li>
          </ol>
        </nav>
        <p className="text-3xl font-bold leading-9 mt-3">
          USI: Unique Student Identifier
        </p>
        <p className="text-gray-500 text-sm font-medium">
          Odio augue in nunc praesent in suspendisse tellus.
        </p>
      </div>
      <div className=" pb-0 px-md bg-bgPrim">
        <div className="w-1056px px-4 pt-6 py-8 bg-white rounded-md shadow-md">
          <form>
            <div className="flex flex-row items-start justify-between">
              <div className="flex flex-col">
                <p className="text-black font-black text-lg mb-2">
                  Do you already have a USI?
                </p>
                <div className="relative border rounded-md  p-3 flex w-80 my-2 mr-4">
                  <div className="flex items-center h-5">
                    <input
                      id="usi-yes"
                      name="usi-status"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-900 cursor-pointer border-gray-300"
                      onClick={() => setToggleUSI(true)}
                    />
                  </div>
                  <label
                    htmlFor="usi-yes"
                    className="ml-3 flex flex-col cursor-pointer"
                  >
                    <span className="block text-sm font-normal  text-black">
                      Yes
                    </span>
                  </label>
                </div>
                <div className="relative border border-gray-200  rounded-md  my-2   p-3 flex w-80 mr-4">
                  <div className="flex items-center h-5">
                    <input
                      id="usi-no"
                      name="usi-status"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300"
                      onClick={() => {
                        setToggleUSI(false);
                      }}
                    />
                  </div>
                  <label
                    htmlFor="usi-no"
                    className="ml-3 flex flex-col cursor-pointer"
                  >
                    <span className="block text-sm font-normal text-black">
                      No
                    </span>
                  </label>
                </div>
              </div>
              <div className="flex flex-col w-80 bg-blue-50 px-4 py-2 rounded-lg">
                <span className="font-medium text-blue-700 text-sm leading-8">
                  What is USI?
                </span>
                <span className="font-normal text-blue-700 text-sm leading-8">
                  Steps to Create your own USI
                </span>
              </div>
            </div>

            {toggleUSI && (
              <>
                <p className="text-black font-black text-lg mt-4 mb-2">
                  Enter your USI
                </p>
                <div className="mt-5 mr-4">
                  <label
                    htmlFor="flat-unit"
                    className="flex flex-row items-center ml-3"
                  >
                    <span className="text-xs font-medium text-gray-600  mr-2">
                      USI Number
                    </span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 11V8M8 5H8.0075M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8Z"
                        stroke="#6B7280"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="flat-unit"
                      id="flat-unit"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
                      style={{ width: "31rem" }}
                    />
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
      <FormFooter
        forwardLink="/personal/about-student"
        backLink="/personal/overseas-address"
      />
    </div>
  );
};

export default index;
