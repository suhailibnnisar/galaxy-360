import React from "react";
import FormFooter from "../../../../components/students/FormFooter";
import StudentHeader from "../../../../components/students/StudentHeader";
import StudentsLayout from "../../../../layouts/StudentsLayout";

const index = () => {
  return (
    <StudentsLayout>
      <div className="flex flex-col w-screen overflow-y-scroll bg-bgPrim">
        <StudentHeader
          text="Contact Details"
          label="Enim et eros, enim lacus, magna pretium, commodo sit."
        />
        <div className="py-sm px-md bg-bgPrim">
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
                      className="shadow-sm focus:ring-geekBlue-500 focus:border-geekBlue-500 block w-80 sm:text-sm border-gray-300 rounded-md"
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
                      className="shadow-sm focus:ring-geekBlue-500 focus:border-geekBlue-500 block w-80 sm:text-sm border-gray-300 rounded-md"
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
                      className="shadow-sm focus:ring-geekBlue-500 focus:border-geekBlue-500 block w-80 sm:text-sm border-gray-300 rounded-md"
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
                      className="shadow-sm focus:ring-geekBlue-500 focus:border-geekBlue-500 block w-80 sm:text-sm border-gray-300 rounded-md"
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
        <FormFooter
          forwardLink="/students/personal/passport-details"
          backLink="/students/personal/about-student"
        />
      </div>
    </StudentsLayout>
  );
};

export default index;
