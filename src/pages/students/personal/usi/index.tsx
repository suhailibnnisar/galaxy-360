import React, { useState } from "react";
import FormFooter from "../../../../components/students/FormFooter";
import StudentHeader from "../../../../components/students/StudentHeader";
import StudentsLayout from "../../../../layouts/StudentsLayout";

const index = () => {
  const [toggleUSI, setToggleUSI] = useState(false);
  return (
    <StudentsLayout>
      <div className="flex flex-col w-screen overflow-y-scroll bg-bgPrim">
        <StudentHeader
          text="USI: Unique Student Identifier"
          label="Odio augue in nunc praesent in suspendisse tellus."
        />
        <div className="py-sm px-md bg-bgPrim">
          <div className="w-1056px px-4 pt-6 py-8 bg-white rounded-md shadow-md">
            <form>
              <div className="flex flex-row items-start justify-between">
                <div className="flex flex-col">
                  <p className="text-black font-extrabold text-lg mb-2">
                    Do you already have a USI?
                  </p>
                  <div className="relative border rounded-md  p-3 flex w-80 my-2 mr-4">
                    <div className="flex items-center h-5">
                      <input
                        id="usi-yes"
                        name="usi-status"
                        type="radio"
                        className="focus:ring-geekBlue-500 h-4 w-4 text-geekBlue-900 cursor-pointer border-gray-300"
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
                        className="focus:ring-geekBlue-500 h-4 w-4 text-geekBlue-600 cursor-pointer border-gray-300"
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
                  <p className="text-black font-extrabold text-lg mt-4 mb-2">
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
                        className="shadow-sm focus:ring-geekBlue-500 focus:border-geekBlue-500 block sm:text-sm border-gray-300 rounded-md"
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
          forwardLink="/students/personal/about-student"
          backLink="/students/personal/overseas-address"
        />
      </div>
    </StudentsLayout>
  );
};

export default index;
