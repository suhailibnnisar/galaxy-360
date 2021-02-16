import Link from "next/link";
import React from "react";

interface Props {}

const SignIn = (props: Props) => {
  return (
    <div className="min-h-screen bg-white flex">
      <div className="min-h-screen flex flex-col py-12 px-0 mx-24">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img src="/logos/logoWithText.svg" alt="Workflow" />
          <h2 className="mt-6 text-left text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
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
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-geekBlue-500 focus:border-geekBlue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-geekBlue-600 focus:ring-geekBlue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-geekBlue-600 hover:text-geekBlue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className="text-sm">
              <Link href="/auth/signup">
                <span className="font-medium text-geekBlue-600 hover:text-geekBlue-500 cursor-pointer">
                  Don't have an account?
                </span>
              </Link>
            </div>
            <div>
              <Link href="/">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-geekBlue-600 hover:bg-geekBlue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-geekBlue-500"
                >
                  Sign in
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="h-screen w-screen object-fill">
        <img src="/images/login-image.png" alt="" />
      </div>
    </div>
  );
};

export default SignIn;
