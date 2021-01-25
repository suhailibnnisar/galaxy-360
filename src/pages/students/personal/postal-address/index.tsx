import React, { useState } from 'react';
import FormFooter from '../../../../components/students/FormFooter';
import StudentHeader from '../../../../components/students/StudentHeader';
import StudentsLayout from '../../../../layouts/StudentsLayout';
import { ResidentialForm } from '../residential-address';

const index = () => {
  const [toggleForm, setToggleForm] = useState(false);
  return (
    <StudentsLayout>
      <div className="flex flex-col w-screen overflow-y-scroll bg-bgPrim">
        <StudentHeader
          text="Postal Address"
          label="Ultrices sagittis justo vitae, rhoncus habitant fermentum cursus
        interdum sed."
        />
        <div className="py-sm px-md bg-bgPrim">
          <div className="w-1056px px-4 py-8 bg-white rounded-md shadow-md">
            <form>
              <p className="text-black font-extrabold text-lg mb-2">
                Is your Postal Address same as Residential Address?
              </p>
              <div className="flex flex-col">
                <div className="relative border rounded-md  p-3 flex w-80 my-2 mr-4">
                  <div className="flex items-center h-5">
                    <input
                      id="postal-yes"
                      name="postal-status"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-900 cursor-pointer border-gray-300"
                      onClick={() => setToggleForm(false)}
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
                <div className="relative border border-gray-200  rounded-md  my-2   p-3 flex w-80 mr-4">
                  <div className="flex items-center h-5">
                    <input
                      id="postal-no"
                      name="postal-status"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300"
                      onClick={() => {
                        setToggleForm(true);
                      }}
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
            {toggleForm && (
              <div className="mt-6">
                <ResidentialForm />
              </div>
            )}
          </div>
        </div>
        <FormFooter
          forwardLink="/students/personal/overseas-address"
          backLink="/students/personal/residential-address"
        />
      </div>
    </StudentsLayout>
  );
};

export default index;
