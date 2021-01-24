import React from 'react';
import FormFooter from '../../../../components/students/FormFooter';
import StudentHeader from '../../../../components/students/StudentHeader';
import StudentsLayout from '../../../../layouts/StudentsLayout';

const index = () => {
  return (
    <StudentsLayout>
      <div className="flex flex-col w-screen overflow-y-scroll">
        <StudentHeader text="About-student" background="white" />
        <div className="py-sm px-md bg-bgPrim">
          <div className="w-1056px px-4 py-3 bg-white rounded-md shadow-sm">
            <div className="my-5">
              <div className="flex flex-row items-center">
                <p className="text-lg font-extrabold leading-6 text-gray-900 mb-1 mr-2">
                  Student Origin
                </p>
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
              </div>
              {/* Student origin radio buttons */}
              <div className="flex flex-col">
                <div className="relative border rounded-md  p-4 flex w-5/12 my-2 mr-4">
                  <div className="flex items-center h-5">
                    <input
                      id="origin-option-0"
                      name="student_origin"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-900 cursor-pointer border-gray-300"
                      checked
                    />
                  </div>
                  <label
                    htmlFor="origin-option-0"
                    className="ml-3 flex flex-col cursor-pointer"
                  >
                    <span className="block text-sm font-normal  text-black">
                      Overseas Student (Offshore)
                    </span>
                  </label>
                </div>

                <div className="relative border border-gray-200  rounded-md  my-2   p-4 flex w-5/12 mr-4">
                  <div className="flex items-center h-5">
                    <input
                      id="origin-option-1"
                      name="student_origin"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300"
                    />
                  </div>
                  <label
                    htmlFor="origin-option-1"
                    className="ml-3 flex flex-col cursor-pointer"
                  >
                    <span className="block text-sm font-normal text-black">
                      Overseas Student in Australia (Onshore)
                    </span>
                  </label>
                </div>

                <div className="relative border border-gray-200  rounded-md  my-2  p-4 flex  w-5/12 mr-4">
                  <div className="flex items-center h-5">
                    <input
                      id="origin-option-2"
                      name="student_origin"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300"
                    />
                  </div>
                  <label
                    htmlFor="origin-option-2"
                    className="ml-3 flex flex-col cursor-pointer"
                  >
                    <span className="block text-sm font-normal text-black">
                      Resident Student (Domestic)
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Student gender radio buttons */}
            <div className="my-5">
              <p className="text-lg font-extrabold leading-6 text-gray-900 mb-1">
                Title
              </p>
              <div className="flex flex-row">
                <div className="relative rounded-md p-4 flex w-20 mr-4">
                  <div className="flex items-center h-5">
                    <input
                      id="title-option-0"
                      name="student_title"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-900 cursor-pointer border-gray-300"
                      checked
                    />
                  </div>
                  <label
                    htmlFor="title-option-0"
                    className="ml-3 flex flex-col cursor-pointer"
                  >
                    <span className="block text-sm font-medium text-gray-900">
                      Mr
                    </span>
                  </label>
                </div>
                <div className="relative rounded-md p-4 flex w-20 mr-4 ">
                  <div className="flex items-center h-5">
                    <input
                      id="title-option-1"
                      name="student_title"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-900 cursor-pointer border-gray-300"
                      checked
                    />
                  </div>
                  <label
                    htmlFor="title-option-1"
                    className="ml-3 flex flex-col cursor-pointer"
                  >
                    <span className="block text-sm font-medium text-gray-900">
                      Mrs
                    </span>
                  </label>
                </div>
                <div className="relative rounded-md p-4 flex w-20 mr-4 ">
                  <div className="flex items-center h-5">
                    <input
                      id="title-option-2"
                      name="student_title"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-900 cursor-pointer border-gray-300"
                      checked
                    />
                  </div>
                  <label
                    htmlFor="title-option-2"
                    className="ml-3 flex flex-col cursor-pointer"
                  >
                    <span className="block text-sm font-medium text-gray-900">
                      Other
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="my-5">
              {/* Student name inputs */}
              <p className="text-lg font-extrabold leading-6 text-gray-900 mb-3">
                Full Name
              </p>
              <div className="flex flex-row">
                <div className=" mr-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-normal text-gray-900 ml-3"
                  >
                    First Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-52 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className=" mr-3">
                  <label
                    htmlFor="middle-name"
                    className="block text-sm font-normal text-gray-900 ml-3"
                  >
                    Middle Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="middle-name"
                      id="middle-name"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-52 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className=" mr-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-normal text-gray-900 ml-3"
                  >
                    Last Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-52 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="my-5">
              {/* Student gender radio buttons */}
              <p className="text-lg font-extrabold leading-6 text-gray-900 mb-1">
                Gender
              </p>
              <div className="flex flex-row">
                <div className="relative rounded-md p-4 flex w-20 mr-4">
                  <div className="flex items-center h-5">
                    <input
                      id="gender-option-0"
                      name="student_gender"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-900 cursor-pointer border-gray-300"
                      checked
                    />
                  </div>
                  <label
                    htmlFor="gender-option-0"
                    className="ml-3 flex flex-col cursor-pointer"
                  >
                    <span className="block text-sm font-medium text-indigo-900">
                      Male
                    </span>
                  </label>
                </div>
                <div className="relative rounded-md p-4 flex w-20 mr-4 ">
                  <div className="flex items-center h-5">
                    <input
                      id="gender-option-1"
                      name="student_gender"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-900 cursor-pointer border-gray-300"
                      checked
                    />
                  </div>
                  <label
                    htmlFor="gender-option-1"
                    className="ml-3 flex flex-col cursor-pointer"
                  >
                    <span className="block text-sm font-medium text-gray-900">
                      Female
                    </span>
                  </label>
                </div>
                <div className="relative rounded-md p-4 flex w-20 mr-4 ">
                  <div className="flex items-center h-5">
                    <input
                      id="gender-option-2"
                      name="student_gender"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-900 cursor-pointer border-gray-300"
                      checked
                    />
                  </div>
                  <label
                    htmlFor="gender-option-2"
                    className="ml-3 flex flex-col cursor-pointer"
                  >
                    <span className="block text-sm font-medium text-gray-900">
                      Other
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FormFooter
          forwardLink="/students/personal/contact-details"
          backLink="/"
        />
      </div>
    </StudentsLayout>
  );
};

export default index;
