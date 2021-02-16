import Link from "next/link";
import React from "react";

interface Props {}

const TickIcon = () => (
  <svg
    className="flex-shrink-0 mr-2 text-green-400"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.58579L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z"
      fill="#34D399"
    />
  </svg>
);

const CrossIcon = () => (
  <svg
    className="flex-shrink-0 mr-2 text-green-400"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L6.58579 8L5.29289 9.29289C4.90237 9.68342 4.90237 10.3166 5.29289 10.7071C5.68342 11.0976 6.31658 11.0976 6.70711 10.7071L8 9.41421L9.29289 10.7071C9.68342 11.0976 10.3166 11.0976 10.7071 10.7071C11.0976 10.3166 11.0976 9.68342 10.7071 9.29289L9.41421 8L10.7071 6.70711C11.0976 6.31658 11.0976 5.68342 10.7071 5.29289C10.3166 4.90237 9.68342 4.90237 9.29289 5.29289L8 6.58579L6.70711 5.29289Z"
      fill="#F87171"
    />
  </svg>
);

const SignUp = (props: Props) => {
  return (
    <div className="min-h-screen h-full bg-white flex flex-1 pb-24 overflow-y-auto overflow-x-hidden">
      <div className="min-h-screen h-full flex flex-col py-12 px-0 mx-24">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img src="/logos/logoWithText.svg" alt="Workflow" />
          <h2 className="mt-6 text-left text-3xl font-extrabold text-gray-900">
            Sign up to Galaxy360
          </h2>
        </div>

        <div className="mt-14 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="agency"
                className="block text-sm font-medium text-gray-700"
              >
                Agency Name
              </label>
              <div className="mt-1">
                <input
                  id="agency"
                  name="agency"
                  type="agency"
                  autoComplete="agency"
                  className="appearance-none block w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-geekBlue-500 focus:border-geekBlue-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="first-name"
                    className="appearance-none block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-geekBlue-500 focus:border-geekBlue-500 sm:text-sm"
                    style={{ width: "11.5rem" }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="last-name"
                    className="appearance-none block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-geekBlue-500 focus:border-geekBlue-500 sm:text-sm"
                    style={{ width: "11.5rem" }}
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="appearance-none block w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-geekBlue-500 focus:border-geekBlue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  className="appearance-none block w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-geekBlue-500 focus:border-geekBlue-500 sm:text-sm"
                />
              </div>
              <div className="flex flex-row mt-1">
                <div className="w-24 h-2 bg-yellow-500 rounded-lg mr-1"></div>
                <div className="w-24 h-2 bg-yellow-500 rounded-lg mr-1"></div>
                <div className="w-24 h-2 bg-gray-200 rounded-lg mr-1"></div>
              </div>
              <div className="text-sm mt-4">
                <span className="text-gray-500">Strength: </span>
                <span className="text-yellow-500">Medium</span>
              </div>
              <div>
                <p className="mt-2 flex items-center text-sm text-gray-900">
                  <TickIcon />8 or more characters
                </p>
                <p className="mt-2 flex items-center text-sm text-red-400">
                  <CrossIcon />
                  At least one capital letter
                </p>
                <p className="mt-2 flex items-center text-sm text-red-400">
                  <CrossIcon />
                  At least one number
                </p>
                <p className="mt-2 flex items-center text-sm text-gray-900">
                  <TickIcon />
                  {"At least one of the following -().&*$%+_"}
                </p>
              </div>
            </div>

            <div>
              <Link href="/auth/email-confirmation">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-geekBlue-600 hover:bg-geekBlue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-geekBlue-500"
                >
                  Sign up
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="h-screen w-screen object-fill">
        <img src="/images/signup-image.png" alt="" />
      </div>
    </div>
  );
};

export default SignUp;
