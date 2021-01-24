import React from "react";
import FormFooter from "../../../components/students/FormFooter";
import { ResidentialForm } from "../residential-address";

interface Props {}

const index = (props: Props) => {
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
          Overseas/Permanent Address
        </p>
        <p className="text-gray-500 text-sm font-medium">
          Odio augue in nunc praesent in suspendisse tellus.
        </p>
      </div>
      <div className=" pb-0 px-md bg-bgPrim">
        <div className="w-1056px px-4 py-8 bg-white rounded-md shadow-md">
          <ResidentialForm />
        </div>
      </div>
      <FormFooter
        forwardLink="/personal/usi"
        backLink="/personal/postal-address"
      />
    </div>
  );
};

export default index;
