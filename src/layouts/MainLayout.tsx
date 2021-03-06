import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const MainLayout: React.FC = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <div>
      <div className="h-screen flex" style={{ backgroundColor: "#f1f5f9" }}>
        {/* Off-canvas menu for mobile, show/hide based on off-canvas menu state. */}
        <div className="md:hidden">
          <div className="fixed inset-0 flex z-40">
            <div className="fixed inset-0" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-600 opacity-75" />
            </div>
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Close sidebar</span>
                  {/* Heroicon name: outline/x */}
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <a
                    href="#"
                    className="bg-gray-900 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    {/* Current: "text-gray-300", Default: "text-gray-400 group-hover:text-gray-300" */}
                    {/* Heroicon name: outline/home */}
                    <svg
                      className="text-gray-300 mr-4 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    {/* Heroicon name: outline/users */}
                    <svg
                      className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    Candidates
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    {/* Heroicon name: outline/folder */}
                    <svg
                      className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                    Applications
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    {/* Heroicon name: outline/calendar */}
                    <svg
                      className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
                      viewBox="0 0 18 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.0481 0.351472C17.5168 0.820101 17.5168 1.5799 17.0481 2.04853L7.44814 11.6485C6.97951 12.1172 6.21971 12.1172 5.75108 11.6485L0.951081 6.84853C0.482452 6.3799 0.482452 5.6201 0.951081 5.15147C1.41971 4.68284 2.17951 4.68284 2.64814 5.15147L6.59961 9.10294L15.3511 0.351472C15.8197 -0.117157 16.5795 -0.117157 17.0481 0.351472Z"
                        fill="#A6C8FF"
                      />
                    </svg>
                    Tasks
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    {/* Heroicon name: outline/inbox */}
                    <svg
                      className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                    Communication
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    {/* Heroicon name: outline/chart-bar */}
                    <svg
                      className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    Providers
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    {/* Heroicon name: outline/chart-bar */}
                    <svg
                      className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    Course Finder
                  </a>
                </nav>
              </div>
            </div>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </div>
        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex flex-col h-0 flex-1">
              <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-800">
                <img
                  className="h-6 w-auto mr-2"
                  src="/Mark.png"
                  alt="Workflow"
                />
                <img className="h-4 w-auto" src="/Xeromi.png" alt="Workflow" />
              </div>
              <div className="flex-1 flex flex-col overflow-y-auto">
                <nav className="flex-1 px-2 py-4 bg-gray-800 space-y-1">
                  {/* Current: "bg-gray-200 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" */}
                  <Link href="/">
                    <a
                      className={`${
                        pathname === "/" && "bg-geekBlue-500"
                      } text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                    >
                      <svg
                        className="text-gray-300 mr-3 h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      Dashboard
                    </a>
                  </Link>
                  <Link href="/candidates">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                      <svg
                        className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      Candidates
                    </a>
                  </Link>
                  <Link href="/applications">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                      <svg
                        className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6"
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                      >
                        <path
                          d="M5 10H11M5 14H11M13 19H3C1.89543 19 1 18.1046 1 17V3C1 1.89543 1.89543 1 3 1H8.58579C8.851 1 9.10536 1.10536 9.29289 1.29289L14.7071 6.70711C14.8946 6.89464 15 7.149 15 7.41421V17C15 18.1046 14.1046 19 13 19Z"
                          // stroke="#A6C8FF"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Applications
                    </a>
                  </Link>

                  <Link href="/tasks">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                      {/* Heroicon name: outline/calendar */}
                      <svg
                        className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
                        viewBox="0 0 18 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.0481 0.351472C17.5168 0.820101 17.5168 1.5799 17.0481 2.04853L7.44814 11.6485C6.97951 12.1172 6.21971 12.1172 5.75108 11.6485L0.951081 6.84853C0.482452 6.3799 0.482452 5.6201 0.951081 5.15147C1.41971 4.68284 2.17951 4.68284 2.64814 5.15147L6.59961 9.10294L15.3511 0.351472C15.8197 -0.117157 16.5795 -0.117157 17.0481 0.351472Z"
                        />
                      </svg>
                      Tasks
                    </a>
                  </Link>

                  <Link href="/communication">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                      {/* Heroicon name: outline/inbox */}
                      <svg
                        className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 9H6.01M10 9H10.01M14 9H14.01M19 9C19 13.4183 14.9706 17 10 17C8.46073 17 7.01172 16.6565 5.74467 16.0511L1 17L2.39499 13.28C1.51156 12.0423 1 10.5743 1 9C1 4.58172 5.02944 1 10 1C14.9706 1 19 4.58172 19 9Z"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Communication
                    </a>
                  </Link>

                  <Link href="/providers">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                      {/* Heroicon name: outline/chart-bar */}
                      <svg
                        className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 19V3C17 1.89543 16.1046 1 15 1H5C3.89543 1 3 1.89543 3 3V19M17 19L19 19M17 19H12M3 19L1 19M3 19H8M7 4.99998H8M7 8.99998H8M12 4.99998H13M12 8.99998H13M8 19V14C8 13.4477 8.44772 13 9 13H11C11.5523 13 12 13.4477 12 14V19M8 19H12"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Providers
                    </a>
                  </Link>

                  <Link href="/course-finder">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                      {/* Heroicon name: outline/chart-bar */}
                      <svg
                        className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M10 2.25278V15.2528M10 2.25278C8.83211 1.47686 7.24649 1 5.5 1C3.75351 1 2.16789 1.47686 1 2.25278V15.2528C2.16789 14.4769 3.75351 14 5.5 14C7.24649 14 8.83211 14.4769 10 15.2528M10 2.25278C11.1679 1.47686 12.7535 1 14.5 1C16.2465 1 17.8321 1.47686 19 2.25278V15.2528C17.8321 14.4769 16.2465 14 14.5 14C12.7535 14 11.1679 14.4769 10 15.2528"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Course Finder
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
            <button className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-geekBlue-500 md:hidden">
              <span className="sr-only">Open sidebar</span>
              {/* Heroicon name: outline/menu-alt-2 */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
            <div className="flex-1 items-center px-4 flex justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-7 w-7 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <div className="flex-1 flex">
                <form className="w-full flex md:ml-0" action="#" method="GET">
                  <div className="flex-1 flex justify-center lg:justify-end">
                    <div className="w-full px-2 lg:px-6">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative text-gray-400 focus-within:text-gray-400">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-96 pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-300 bg-opacity-25 text-gray-400 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
                          placeholder="Search"
                          type="search"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-geekBlue-500">
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
                <div className="relative inline-block text-left mx-2">
                  <div>
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-geekBlue-500 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-geekBlue-500"
                      id="options-menu"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      New
                      <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  <div
                    className="hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Duplicate
                      </a>
                    </div>
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Archive
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Move
                      </a>
                    </div>
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Share
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Add to favorites
                      </a>
                    </div>
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </div>

                <div className="ml-3 relative">
                  <div>
                    <button
                      className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-geekBlue-500"
                      id="user-menu"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=mR7Mc7kSlc&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Image"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <main
            className="flex-1 relative overflow-y-auto focus:outline-none"
            tabIndex={0}
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
