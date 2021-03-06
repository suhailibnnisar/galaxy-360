import React from "react";
import FormFooter from "../../../../components/students/FormFooter";
import StudentHeader from "../../../../components/students/StudentHeader";
import StudentsLayout from "../../../../layouts/StudentsLayout";

const index = () => {
  return (
    <StudentsLayout>
      <div className="flex flex-col w-screen overflow-y-scroll bg-bgPrim">
        <StudentHeader
          text="Passport Details"
          label="We need your passport details to Est massa habitant placerat a
        ultricies ridiculus fringilla mi id."
        />
        <div className="py-sm px-md bg-bgPrim">
          <div className="w-1056px px-4 py-8 bg-white rounded-md shadow-md h-96">
            <form>
              <div className="flex flex-row items-center">
                <div className=" mr-4">
                  <label
                    htmlFor="country"
                    className="block text-xs font-medium text-gray-600 ml-3"
                  >
                    Country of birth
                  </label>
                  <div className="mt-1">
                    <select
                      id="country"
                      name="country"
                      className="mt-1 block pl-3 pr-10 py-2 text-base text-gray-900 border-gray-300 focus:outline-none focus:ring-geekBlue-500 focus:border-geekBlue-500 sm:text-sm rounded-md w-96"
                      placeholder="Select country"
                    >
                      <option>USA</option>
                      <option>Canada</option>
                      <option>EU</option>
                    </select>
                  </div>
                </div>
                <div className=" mr-4">
                  <label
                    htmlFor="nationality"
                    className="block text-xs font-medium text-gray-600 ml-3"
                  >
                    Nationality
                  </label>
                  <div className="mt-1">
                    <select
                      id="nationality"
                      name="nationality"
                      className="mt-1 block pl-3 pr-10 py-2 text-base text-gray-900 border-gray-300 focus:outline-none focus:ring-geekBlue-500 focus:border-geekBlue-500 sm:text-sm rounded-md w-96"
                      placeholder="Select Nationality"
                    >
                      <option>American</option>
                      <option>Canadian</option>
                      <option>EU</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center my-6">
                <div className=" mr-4">
                  <label
                    htmlFor="passport-number"
                    className="flex flex-row items-center ml-3"
                  >
                    <span className="text-xs font-medium text-gray-600  mr-2">
                      Passport Number
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
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="passport-number"
                      id="passport-number"
                      className="shadow-sm focus:ring-geekBlue-500 focus:border-geekBlue-500 block w-96 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="flex flex-row items-center mt-3">
                  <span className=" text-lg font-bold leading-9 mr-2">
                    Expiry Date
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
                <div className="flex flex-row items-end my-6">
                  <div className=" mr-4">
                    <label
                      htmlFor="day-expiry"
                      className="block text-xs font-medium text-gray-600 ml-3"
                    >
                      Day
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="day-expiry"
                        id="day-expiry"
                        className="shadow-sm focus:ring-geekBlue-500 focus:border-geekBlue-500 block w-16 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className=" mr-4">
                    <label
                      htmlFor="month-expiry"
                      className="block text-xs font-medium text-gray-600 ml-3"
                    >
                      Month
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="month-expiry"
                        id="month-expiry"
                        className="shadow-sm focus:ring-geekBlue-500 focus:border-geekBlue-500 block w-16 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className=" mr-4">
                    <label
                      htmlFor="year-expiry"
                      className="block text-xs font-medium text-gray-600 ml-3"
                    >
                      Year
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="year-expiry"
                        id="year-expiry"
                        className="shadow-sm focus:ring-geekBlue-500 focus:border-geekBlue-500 block w-28 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
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
            </form>
          </div>
        </div>
        <FormFooter
          forwardLink="/students/personal/visa-details"
          backLink="/students/personal/contact-details"
        />
      </div>
    </StudentsLayout>
  );
};

export default index;
