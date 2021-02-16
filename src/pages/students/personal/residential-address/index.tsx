import React from "react";
import FormFooter from "../../../../components/students/FormFooter";
import StudentHeader from "../../../../components/students/StudentHeader";
import StudentsLayout from "../../../../layouts/StudentsLayout";

export const ResidentialForm = () => {
  return (
    <form>
      <div className="flex flex-row items-center mb-6">
        <div className=" mr-4">
          <label
            htmlFor="flat-unit"
            className="flex flex-row items-center ml-3"
          >
            <span className="text-xs font-medium text-gray-600  mr-2">
              Flat/Unit
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
              className="shadow-sm focus:ring-geekBlue-500 focus:border-geekBlue-500 block w-60 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className=" mr-4">
          <label
            htmlFor="building-property"
            className="flex flex-row items-center ml-3"
          >
            <span className="text-xs font-medium text-gray-600  mr-2">
              Building/Property
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
              name="building-property"
              id="building-property"
              className="shadow-sm focus:ring-geekBlue-500 focus:border-geekBlue-500 block w-60 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center mb-6">
        <div className=" mr-4">
          <label
            htmlFor="street-number"
            className="flex flex-row items-center ml-3"
          >
            <span className="text-xs font-medium text-gray-600  mr-2">
              Street Number
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
              name="street-number"
              id="street-number"
              className="shadow-sm focus:ring-geekBlue-500 focus:border-geekBlue-500 block w-60 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="mr-4">
          <label
            htmlFor="street-name"
            className="flex flex-row items-center ml-3"
          >
            <span className="text-xs font-medium text-gray-600  mr-2">
              Street Name
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
              name="street-name"
              id="street-name"
              className="shadow-sm focus:ring-geekBlue-500 focus:border-geekBlue-500 block w-60 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center mb-6">
        <div className=" mr-4">
          <label
            htmlFor="city-town-suburb"
            className="flex flex-row items-center ml-3"
          >
            <span className="text-xs font-medium text-gray-600  mr-2">
              City/Town/Suburb
            </span>
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="city-town-suburb"
              id="city-town-suburb"
              className="shadow-sm focus:ring-geekBlue-500 focus:border-geekBlue-500 block  sm:text-sm border-gray-300 rounded-md"
              style={{ width: "31rem" }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center mb-6">
        <div className=" mr-4">
          <label
            htmlFor="state-province"
            className="flex flex-row items-center ml-3"
          >
            <span className="text-xs font-medium text-gray-600  mr-2">
              State/Province
            </span>
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="state-province"
              id="state-province"
              className="shadow-sm focus:ring-geekBlue-500 focus:border-geekBlue-500 block w-96 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="mr-4">
          <label htmlFor="postcode" className="flex flex-row items-center ml-3">
            <span className="text-xs font-medium text-gray-600  mr-2">
              Postcode
            </span>
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="postcode"
              id="postcode"
              className="shadow-sm focus:ring-geekBlue-500 focus:border-geekBlue-500 block w-24 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row items-center mb-6">
        <div className=" mr-4">
          <label htmlFor="country" className="flex flex-row items-center ml-3">
            <span className="text-xs font-medium text-gray-600  mr-2">
              Country
            </span>
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="country"
              id="country"
              className="shadow-sm focus:ring-geekBlue-500 focus:border-geekBlue-500 block  sm:text-sm border-gray-300 rounded-md"
              style={{ width: "31rem" }}
              placeholder="Select country"
            />
          </div>
        </div>
      </div> */}
      <div>
        <label htmlFor="country" className="flex flex-row items-center ml-3">
          <span className="text-xs font-medium text-gray-600  mr-2">
            Country
          </span>
        </label>
        <select
          id="country"
          name="country"
          className="mt-1 block pl-3 pr-10 py-2 text-base text-gray-900 border-gray-300 focus:outline-none focus:ring-geekBlue-500 focus:border-geekBlue-500 sm:text-sm rounded-md"
          style={{ width: "31rem" }}
          placeholder="Select country"
        >
          <option>USA</option>
          <option>Canada</option>
          <option>EU</option>
        </select>
      </div>
    </form>
  );
};

const index = () => {
  return (
    <StudentsLayout>
      <div className="flex flex-col w-screen overflow-y-scroll bg-bgPrim">
        <StudentHeader
          text="Residential Address"
          label="Ultrices sagittis justo vitae, rhoncus habitant fermentum cursus
        interdum sed."
        />
        <div className="py-sm px-md bg-bgPrim">
          <div className="w-1056px px-4 py-8 bg-white rounded-md shadow-md">
            <ResidentialForm />
          </div>
        </div>
        <FormFooter
          forwardLink="/students/personal/postal-address"
          backLink="/students/personal/visa-details"
        />
      </div>
    </StudentsLayout>
  );
};

export default index;
