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
        <p className="text-3xl font-bold leading-9 mt-3">Postal Address</p>
        <p className="text-gray-500 text-sm font-medium">
          Ultrices sagittis justo vitae, rhoncus habitant fermentum cursus
          interdum sed.
        </p>
      </div>
      <div className=" pb-0 px-md bg-bgPrim">
        <div className="w-1056px px-4 py-8 bg-white rounded-md shadow-md">
          <form>
            <p className="text-black font-black text-lg mb-2">
              Is your Postal Address same as Residential Address?
            </p>
            <div className="flex flex-col">
              <div className="relative border rounded-md  p-4 flex w-80 my-2 mr-4">
                <div className="flex items-center h-5">
                  <input
                    id="postal-yes"
                    name="postal-status"
                    type="radio"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-900 cursor-pointer border-gray-300"
                    checked
                  />
                </div>
                <label
                  htmlFor="postal-yes"
                  className="ml-3 flex flex-col cursor-pointer"
                >
                  <span className="block text-sm font-normal  text-black">
                    Yes
                  </span>
                </label>
              </div>
              <div className="relative border border-gray-200  rounded-md  my-2   p-4 flex w-80 mr-4">
                <div className="flex items-center h-5">
                  <input
                    id="postal-no"
                    name="postal-status"
                    type="radio"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300"
                  />
                </div>
                <label
                  htmlFor="postal-no"
                  className="ml-3 flex flex-col cursor-pointer"
                >
                  <span className="block text-sm font-normal text-black">
                    No
                  </span>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <FormFooter />
    </div>
  );
};

export default index;
