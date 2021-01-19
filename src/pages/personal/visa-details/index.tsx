import React from "react";
import FormFooter from "../../../components/students/FormFooter";

const index = () => {
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
        <p className="text-3xl font-bold leading-9 mt-3">Visa Details</p>
        <p className="text-gray-500 text-sm font-medium">
          Consectetur a libero vitae pulvinar nunc.
        </p>
      </div>
      <div className=" pb-0 px-md bg-bgPrim">
        <div className="w-1056px px-8 py-4 bg-white rounded-md shadow-md">
          <form>
            <div>
              <p className="flex flex-row items-center">
                <span className=" text-lg font-bold leading-9 mr-2">
                  Visa type
                </span>
                <svg
                  width="16"
                  height="16"
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
              </p>
              <div className="flex flex-col">
                <div className="relative rounded-md  mx-0 my-2 flex  mr-4">
                  <div className="flex items-center h-5">
                    <input
                      id="visa-type-student"
                      name="student_title"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-900 cursor-pointer border-gray-300"
                      checked
                    />
                  </div>
                  <label
                    htmlFor="visa-type-student"
                    className="ml-3 flex flex-col cursor-pointer"
                  >
                    <span className="block text-sm font-normal text-gray-900">
                      Student Visa
                    </span>
                  </label>
                </div>
                <div className="relative rounded-md mx-0 my-2 flex  mr-4 ">
                  <div className="flex items-center h-5">
                    <input
                      id="visa-type-tourist"
                      name="student_title"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-900 cursor-pointer border-gray-300"
                      checked
                    />
                  </div>
                  <label
                    htmlFor="visa-type-tourist"
                    className="ml-3 flex flex-col cursor-pointer"
                  >
                    <span className="block text-sm font-normal text-gray-900">
                      Tourist visa
                    </span>
                  </label>
                </div>
                <div className="relative rounded-md mx-0 my-2 flex  mr-4 ">
                  <div className="flex items-center h-5">
                    <input
                      id="visa-type-workingHoliday"
                      name="student_title"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-900 cursor-pointer border-gray-300"
                      checked
                    />
                  </div>
                  <label
                    htmlFor="visa-type-workingHoliday"
                    className="ml-3 flex flex-col cursor-pointer"
                  >
                    <span className="block text-sm font-normal text-gray-900">
                      Working Holiday
                    </span>
                  </label>
                </div>
              </div>
              <p className="text-blue-900 text-sm underline mt-2 mb-8">
                Load more
              </p>
            </div>
            <div>
              <div className=" mr-3">
                <label
                  htmlFor="visa-number"
                  className="flex flex-row items-center ml-2"
                >
                  <span className="mr-2  text-xs font-normal text-gray-900 ">
                    Visa number
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
                    name="visa-number"
                    id="visa-number"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-80 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="my-4">
              <p className="flex flex-row items-center">
                <span className=" text-lg font-bold leading-9 mr-2">
                  Visa Expiry date
                </span>
                <svg
                  width="16"
                  height="16"
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
              </p>
              <div className="flex flex-row items-end my-2">
                <div className=" mr-4">
                  <label
                    htmlFor="day-expiry"
                    className="block text-xs font-medium text-gray-600"
                  >
                    Day
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="day-expiry"
                      id="day-expiry"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-16 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className=" mr-4">
                  <label
                    htmlFor="month-expiry"
                    className="block text-xs font-medium text-gray-600"
                  >
                    Month
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="month-expiry"
                      id="month-expiry"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-16 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className=" mr-4">
                  <label
                    htmlFor="year-expiry"
                    className="block text-xs font-medium text-gray-600"
                  >
                    Year
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="year-expiry"
                      id="year-expiry"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-28 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <svg
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="39" height="39" rx="4" fill="#F8FAFC" />
                    <path
                      d="M24.6667 6.58325V11.7499M14.3333 6.58325V11.7499M7.875 16.9166H31.125M10.4583 9.16659H28.5417C29.9684 9.16659 31.125 10.3232 31.125 11.7499V29.8333C31.125 31.26 29.9684 32.4166 28.5417 32.4166H10.4583C9.0316 32.4166 7.875 31.26 7.875 29.8333V11.7499C7.875 10.3232 9.0316 9.16659 10.4583 9.16659Z"
                      stroke="#066BDD"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <FormFooter
        forwardLink="/personal/residential-address"
        backLink="/personal/passport-details"
      />
    </div>
  );
};

export default index;
