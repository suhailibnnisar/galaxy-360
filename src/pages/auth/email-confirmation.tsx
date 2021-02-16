import Link from "next/link";
import React from "react";

const EmailConfirmation = (props) => {
  return (
    <div className="min-h-screen flex w-screen bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-screen space-y-8">
        <div>
          <img
            className="mx-auto w-auto"
            src="/logos/logoWithText.svg"
            alt="Workflow"
          />
          <h2 className="mt-16 text-center text-3xl font-extrabold leading-9 text-gray-900">
            Please check your Email
          </h2>
          <p className="mt-2 text-center text-sm text-gray-500">
            A verification code has been sent to your email at{" "}
            <a
              href="#"
              className="font-medium text-geekBlue-500 hover:text-geekBlue-400"
            >
              xyzmailaddress@company.com
            </a>
          </p>
        </div>
        <form className="space-y-6" action="#" method="POST">
          <div className="flex flex-col justify-center items-center mt-40">
            <div>
              <div>
                <label
                  htmlFor="verification"
                  className="block text-sm font-medium text-gray-700"
                >
                  Verification Code
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="verification"
                    name="verification"
                    autoComplete="verification"
                    placeholder="Enter verification code"
                    className="appearance-none block w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-geekBlue-500 focus:border-geekBlue-500 sm:text-sm"
                    style={{ width: "37.5rem" }}
                  />
                </div>
              </div>
              <div className="my-6">
                <span className="text-geekBlue-600 text-sm leading-5 font-normal">
                  Resend email
                </span>
              </div>
              <div>
                <Link href="/students/personal/about-student">
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-geekBlue-600 hover:bg-geekBlue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-geekBlue-500"
                    style={{ width: "37.5rem" }}
                  >
                    Verify
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailConfirmation;
