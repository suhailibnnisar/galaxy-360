import React, { useState } from "react";
import { closeIcon } from "./AddTaskForms";
import { Transition } from "@tailwindui/react";

const Option = ({ text }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-white p-3 flex flex-row items-center rounded-lg w-72 mb-2 shadow-md">
      <svg
        width="10"
        height="14"
        viewBox="0 0 10 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <path
          d="M3.125 0.8125C3.37891 0.8125 3.59375 0.910156 3.76953 1.10547C3.96484 1.28125 4.0625 1.49609 4.0625 1.75V3.625C4.0625 3.87891 3.96484 4.10352 3.76953 4.29883C3.59375 4.47461 3.37891 4.5625 3.125 4.5625H1.25C0.996094 4.5625 0.771484 4.47461 0.576172 4.29883C0.400391 4.10352 0.3125 3.87891 0.3125 3.625V1.75C0.3125 1.49609 0.400391 1.28125 0.576172 1.10547C0.771484 0.910156 0.996094 0.8125 1.25 0.8125H3.125ZM3.125 5.5C3.37891 5.5 3.59375 5.59766 3.76953 5.79297C3.96484 5.96875 4.0625 6.18359 4.0625 6.4375V8.3125C4.0625 8.56641 3.96484 8.79102 3.76953 8.98633C3.59375 9.16211 3.37891 9.25 3.125 9.25H1.25C0.996094 9.25 0.771484 9.16211 0.576172 8.98633C0.400391 8.79102 0.3125 8.56641 0.3125 8.3125V6.4375C0.3125 6.18359 0.400391 5.96875 0.576172 5.79297C0.771484 5.59766 0.996094 5.5 1.25 5.5H3.125ZM3.125 10.1875C3.37891 10.1875 3.59375 10.2852 3.76953 10.4805C3.96484 10.6562 4.0625 10.8711 4.0625 11.125V13C4.0625 13.2539 3.96484 13.4688 3.76953 13.6445C3.59375 13.8398 3.37891 13.9375 3.125 13.9375H1.25C0.996094 13.9375 0.771484 13.8398 0.576172 13.6445C0.400391 13.4688 0.3125 13.2539 0.3125 13V11.125C0.3125 10.8711 0.400391 10.6562 0.576172 10.4805C0.771484 10.2852 0.996094 10.1875 1.25 10.1875H3.125ZM8.75 0.8125C9.00391 0.8125 9.21875 0.910156 9.39453 1.10547C9.58984 1.28125 9.6875 1.49609 9.6875 1.75V3.625C9.6875 3.87891 9.58984 4.10352 9.39453 4.29883C9.21875 4.47461 9.00391 4.5625 8.75 4.5625H6.875C6.62109 4.5625 6.39648 4.47461 6.20117 4.29883C6.02539 4.10352 5.9375 3.87891 5.9375 3.625V1.75C5.9375 1.49609 6.02539 1.28125 6.20117 1.10547C6.39648 0.910156 6.62109 0.8125 6.875 0.8125H8.75ZM8.75 5.5C9.00391 5.5 9.21875 5.59766 9.39453 5.79297C9.58984 5.96875 9.6875 6.18359 9.6875 6.4375V8.3125C9.6875 8.56641 9.58984 8.79102 9.39453 8.98633C9.21875 9.16211 9.00391 9.25 8.75 9.25H6.875C6.62109 9.25 6.39648 9.16211 6.20117 8.98633C6.02539 8.79102 5.9375 8.56641 5.9375 8.3125V6.4375C5.9375 6.18359 6.02539 5.96875 6.20117 5.79297C6.39648 5.59766 6.62109 5.5 6.875 5.5H8.75ZM8.75 10.1875C9.00391 10.1875 9.21875 10.2852 9.39453 10.4805C9.58984 10.6562 9.6875 10.8711 9.6875 11.125V13C9.6875 13.2539 9.58984 13.4688 9.39453 13.6445C9.21875 13.8398 9.00391 13.9375 8.75 13.9375H6.875C6.62109 13.9375 6.39648 13.8398 6.20117 13.6445C6.02539 13.4688 5.9375 13.2539 5.9375 13V11.125C5.9375 10.8711 6.02539 10.6562 6.20117 10.4805C6.39648 10.2852 6.62109 10.1875 6.875 10.1875H8.75Z"
          fill="#D1D5DB"
        />
      </svg>
      <p className="text-sm leading-5 font-medium text-gray-900">{text}</p>
      <div className="ml-auto relative">
        <div
          onClick={() => setToggle((prevState) => !prevState)}
          className="cursor-pointer"
        >
          <svg
            width="16"
            height="4"
            viewBox="0 0 16 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2Z"
              fill="#9CA3AF"
            />
            <path
              d="M10 2C10 3.10457 9.10457 4 8 4C6.89543 4 6 3.10457 6 2C6 0.895431 6.89543 0 8 0C9.10457 0 10 0.895431 10 2Z"
              fill="#9CA3AF"
            />
            <path
              d="M14 4C15.1046 4 16 3.10457 16 2C16 0.895431 15.1046 0 14 0C12.8954 0 12 0.895431 12 2C12 3.10457 12.8954 4 14 4Z"
              fill="#9CA3AF"
            />
          </svg>
        </div>

        <Transition
          show={toggle}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Rename
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Delete
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Disable
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
};

const CustomizeTaskForm = ({ setCustomizeVisible }) => {
  return (
    <div style={{ width: "63.75rem" }} className="bg-white py-6 p-4 rounded-lg">
      <div className="flex flex-row items-center justify-between mb-6">
        <p className="text-lg leading-6 font-medium text-gray-900">Customize</p>
        <div
          className="inline-block"
          onClick={() => setCustomizeVisible(false)}
        >
          {closeIcon}
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-80 bg-gray-100 flex flex-col items-start px-4 py-2 pb-4 rounded-lg mr-4">
          <p className="text-left block text-sm leading-5 font-medium my-3">
            Status
          </p>
          <Option text="To Do" />
          <Option text="Doing" />
          <Option text="To review" />
          <Option text="Done" />
          <div className="flex flex-row items-center mt-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99967 1.33398V14.6673M14.6663 8.00065L1.33301 8.00065"
                stroke="#0F62FE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-sm leading-5 font-medium text-geekBlue-500 ml-4">
              Add Status
            </p>
          </div>
        </div>
        <div className="w-80 bg-gray-100 flex flex-col items-start px-4 py-2 rounded-lg mr-4">
          <p className="text-left block text-sm leading-5 font-medium my-3">
            Department
          </p>
          <Option text="Admissions" />
          <Option text="Finance" />
          <Option text="Documentation" />
          <Option text="Administration" />
          <div className="flex flex-row items-center mt-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99967 1.33398V14.6673M14.6663 8.00065L1.33301 8.00065"
                stroke="#0F62FE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-sm leading-5 font-medium text-geekBlue-500 ml-4">
              Add Department
            </p>
          </div>
        </div>
        <div className="w-80 bg-gray-100 flex flex-col items-start px-4 py-2 rounded-lg mr-4">
          <p className="text-left block text-sm leading-5 font-medium my-3">
            Priority
          </p>
          <Option text="Low" />
          <Option text="Medium" />
          <Option text="High" />
          <div className="flex flex-row items-center mt-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99967 1.33398V14.6673M14.6663 8.00065L1.33301 8.00065"
                stroke="#0F62FE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-sm leading-5 font-medium text-geekBlue-500 ml-4">
              Add Priority
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeTaskForm;
