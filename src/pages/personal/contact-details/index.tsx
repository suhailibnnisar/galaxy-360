import React from "react";
import FormFooter from "../../components/students/FormFooter";

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
        <p className="text-3xl font-bold leading-9 mt-3">Contact Details</p>
        <p className="text-gray-500 text-sm font-medium">
          Enim et eros, enim lacus, magna pretium, commodo sit.
        </p>
      </div>
      <div className=" pb-0 px-md bg-bgPrim">
        <div className="w-1056px px-4 py-8 bg-white rounded-md shadow-md h-96">
          <form>
            <div className="flex flex-row items-center">
              <div className=" mr-4">
                <label
                  htmlFor="first-name"
                  className="block text-xs font-medium text-gray-600 ml-3"
                >
                  Contact Email
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-80 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className=" mr-4">
                <label
                  htmlFor="first-name"
                  className="block text-xs font-medium text-gray-600 ml-3"
                >
                  Alternate Email{" "}
                  <span className="text-gray-500">(optional)</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-80 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center my-6">
              <div className=" mr-4">
                <label
                  htmlFor="first-name"
                  className="block text-xs font-medium text-gray-600 ml-3"
                >
                  Mobile Number
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-80 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className=" mr-4">
                <label
                  htmlFor="first-name"
                  className="block text-xs font-medium text-gray-600 ml-3"
                >
                  Home Phone Number
                  <span className="text-gray-500">(optional)</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-80 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <span className="text-blue-500 text-xs font-medium underline cursor-pointer">
              Add another Phone
            </span>
          </form>
        </div>
      </div>
      <FormFooter />
    </div>
  );
};

export default index;
