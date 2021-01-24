import Link from "next/link";

export const BackIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 19L3 12M3 12L10 5M3 12L21 12"
      stroke="#9CA3AF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const SidebarStudentDetail = () => {
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col  w-64">
        <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-gray-100">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4 cursor-pointer">
              <BackIcon />
              <span className="text-gray-400 ml-4">Back</span>
            </div>
            <nav aria-label="Progress" className="mt-6 ml-2">
              <ol className="overflow-hidden">
                <li className="relative pb-10">
                  <div
                    className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600"
                    aria-hidden="true"
                  ></div>
                  <a href="#" className="relative flex items-start group">
                    <span className="h-9 flex items-center">
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                        <span
                          className="h-9 flex items-center"
                          aria-hidden="true"
                        >
                          <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full">
                            <span className="h-2.5 w-2.5 bg-indigo-600 rounded-full"></span>
                          </span>
                        </span>
                      </span>
                    </span>
                    <div>
                      <span className="ml-4 mt-2 min-w-0 flex flex-col mb-12">
                        <span className="text-sm tracking-wide">
                          Personal Information
                        </span>
                      </span>
                    </div>
                  </a>
                  <div className="ml-12">
                    <ol className="space-y-6">
                      <li>
                        <a href="#" className="group">
                          <span className="flex items-start">
                            <span
                              className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                              aria-hidden="true"
                            >
                              <span className="absolute h-4 w-4 rounded-full bg-indigo-200"></span>
                              <span className="relative block w-2 h-2 bg-geekBlue-600 rounded-full"></span>
                            </span>
                            <Link href="/personal/about-student">
                              <span className="ml-3 text-sm text-geekBlue-600 group-hover:text-gray-900">
                                Personal detail
                              </span>
                            </Link>
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="flex items-start"
                          aria-current="step"
                        >
                          <div
                            className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                            aria-hidden="true"
                          >
                            <div className="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400"></div>
                          </div>
                          <span className="ml-3 text-sm font-medium text-gray-500">
                            Address
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-start"
                          aria-current="step"
                        >
                          <div
                            className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                            aria-hidden="true"
                          >
                            <div className="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400"></div>
                          </div>
                          <span className="ml-3 text-sm font-medium text-gray-500">
                            USI
                          </span>
                        </a>
                      </li>
                    </ol>
                  </div>
                </li>
                <li className="relative pb-0">
                  <div
                    className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                    aria-hidden="true"
                  ></div>
                  <a href="#" className="relative flex items-start group">
                    <span className="h-9 flex items-center">
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                        <span
                          className="h-9 flex items-center"
                          aria-hidden="true"
                        >
                          <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full"></span>
                        </span>
                      </span>
                    </span>
                    <span className="ml-4 mt-2 min-w-0 flex flex-col mb-12">
                      <span className="text-sm tracking-wide">
                        Language and culture
                      </span>
                    </span>
                  </a>
                </li>
                <li className="relative pb-0">
                  <div
                    className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                    aria-hidden="true"
                  ></div>
                  <a href="#" className="relative flex items-start group">
                    <span className="h-9 flex items-center">
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                        <span
                          className="h-9 flex items-center"
                          aria-hidden="true"
                        >
                          <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full"></span>
                        </span>
                      </span>
                    </span>
                    <span className="ml-4 mt-2 min-w-0 flex flex-col mb-12">
                      <span className="text-sm tracking-wide">Education</span>
                    </span>
                  </a>
                </li>
                <li className="relative pb-0">
                  <div
                    className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                    aria-hidden="true"
                  ></div>
                  <a href="#" className="relative flex items-start group">
                    <span className="h-9 flex items-center">
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                        <span
                          className="h-9 flex items-center"
                          aria-hidden="true"
                        >
                          <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full"></span>
                        </span>
                      </span>
                    </span>
                    <span className="ml-4 mt-2 min-w-0 flex flex-col mb-12">
                      <span className="text-sm tracking-wide">Employment</span>
                    </span>
                  </a>
                </li>

                <li className="relative pb-0">
                  <div
                    className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                    aria-hidden="true"
                  ></div>
                  <a href="#" className="relative flex items-start group">
                    <span className="h-9 flex items-center">
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                        <span
                          className="h-9 flex items-center"
                          aria-hidden="true"
                        >
                          <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full"></span>
                        </span>
                      </span>
                    </span>
                    <span className="ml-4 mt-2 min-w-0 flex flex-col mb-12">
                      <span className="text-sm tracking-wide">Enrollment</span>
                    </span>
                  </a>
                </li>

                <li className="relative pb-0">
                  <div
                    className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                    aria-hidden="true"
                  ></div>
                  <a href="#" className="relative flex items-start group">
                    <span className="h-9 flex items-center">
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                        <span
                          className="h-9 flex items-center"
                          aria-hidden="true"
                        >
                          <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full"></span>
                        </span>
                      </span>
                    </span>
                    <span className="ml-4 mt-2 min-w-0 flex flex-col mb-12">
                      <span className="text-sm tracking-wide">
                        Additional Services
                      </span>
                    </span>
                  </a>
                </li>
                <li className="relative pb-0">
                  <a href="#" className="relative flex items-start group">
                    <span className="h-9 flex items-center">
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                        <span
                          className="h-9 flex items-center"
                          aria-hidden="true"
                        >
                          <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full"></span>
                        </span>
                      </span>
                    </span>
                    <span className="ml-4 mt-2 min-w-0 flex flex-col mb-12">
                      <span className="text-sm tracking-wide">Documents</span>
                    </span>
                  </a>
                </li>
              </ol>
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <a href="#" className="flex-shrink-0 w-full group block">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-9 w-9 rounded-full"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    Whitney Francis
                  </p>
                  <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                    View profile
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarStudentDetail;
