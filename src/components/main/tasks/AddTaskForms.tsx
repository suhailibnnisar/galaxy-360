import React, { useState } from "react";

const closeIcon = (
  <div className="cursor-pointer">
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 13L13 1M1 1L13 13"
        stroke="#9ca3af"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
);

interface Props {
  changePage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const TaskFormInitialize: React.FC<Props> = ({ changePage }) => {
  return (
    <div
      className="bg-white flex flex-col w-full items-center p-6 rounded-md m-3.5"
      style={{ width: "30rem" }}
    >
      <div className="flex flex-row w-96 items-center justify-between mb-6">
        <span className="text-lg leading-6 font-medium">Add Task</span>
        {closeIcon}
      </div>
      <div className="mb-6 w-96">
        <input
          type="text"
          name="task"
          id="task"
          className="shadow-sm focus:ring-gray-300 focus:border-gray-300 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Task Name"
        />
      </div>
      <div className="mb-6 w-96 flex flex-row items-center justify-between">
        <select
          id="assign-to"
          name="assign-to"
          className="mt-1 block w-44 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-300 focus:border-gray-300 sm:text-sm rounded-md"
          placeholder="Assign to"
        >
          <option>USA</option>
          <option>Canada</option>
          <option>EU</option>
        </select>
        <select
          id="department"
          name="department"
          className="mt-1 block w-44 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-300 focus:border-gray-300 sm:text-sm rounded-md"
          placeholder="Department"
        >
          <option>USA</option>
          <option>Canada</option>
          <option>EU</option>
        </select>
      </div>
      <div className="w-96 flex flex-row justify-end">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
          onClick={changePage}
        >
          Create task
        </button>
      </div>
    </div>
  );
};

const TaskFormDetail: React.FC<Props> = ({ changePage }) => {
  return (
    <div
      className="bg-white flex flex-col w-full items-center p-6 rounded-md m-3.5"
      style={{ width: "30rem" }}
    >
      <div className="flex flex-row items-center justify-between mb-6">
        <div>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
            onClick={changePage}
          >
            Complete
          </button>
          <div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true"></span>
                <p className="text-sm font-medium text-gray-900">
                  Leslie Alexander
                </p>
                <p className="text-sm text-gray-500 truncate">
                  Co-Founder / CEO
                </p>
              </a>
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true"></span>
                <p className="text-sm font-medium text-gray-900">
                  Leslie Alexander
                </p>
                <p className="text-sm text-gray-500 truncate">
                  Co-Founder / CEO
                </p>
              </a>
            </div>
          </div>
        </div>
        {closeIcon}
      </div>
    </div>
  );
};

const index: React.FC = () => {
  const [page, setPage] = useState<"FIRST" | "LAST">("FIRST");
  return (
    <>
      {page === "FIRST" ? (
        <TaskFormInitialize changePage={() => setPage("LAST")} />
      ) : (
        <TaskFormDetail changePage={() => setPage("FIRST")} />
      )}
    </>
  );
};

export default index;
