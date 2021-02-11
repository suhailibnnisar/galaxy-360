import React, { useState } from "react";

interface Props {
  changePage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const downIcon = (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.293015 0.292893C0.683538 -0.097631 1.3167 -0.097631 1.70723 0.292893L5.00011 3.58579L8.293 0.292893C8.68353 -0.0976311 9.31669 -0.0976311 9.70721 0.292893C10.0977 0.683417 10.0977 1.31658 9.70721 1.70711L5.70722 5.70711C5.3167 6.09763 4.68353 6.09763 4.29301 5.70711L0.293015 1.70711C-0.0975089 1.31658 -0.0975089 0.683417 0.293015 0.292893Z"
      fill="#9ca3af"
    />
  </svg>
);

const Label = ({ icon, text, htmlFor }) => {
  return (
    <label className="inline-flex flex-row items-center mb-2" htmlFor={htmlFor}>
      {icon}
      <p className="text-sm leading-5 font-medium ml-2 text-gray-900">{text}</p>
    </label>
  );
};

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
  const [addCheckList, setAddCheckList] = useState<boolean>(false);
  const [addAttachment, setAddAttachment] = useState<boolean>(false);

  return (
    <div
      className="bg-white pt-6 w-full rounded-lg overflow-hidden"
      style={{ width: "50.5rem" }}
    >
      <div className="flex flex-row items-center justify-between pb-6 px-6 shadow-sm">
        <div className="flex flex-row items-center">
          <div>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400  mr-6"
              onClick={changePage}
            >
              Complete
            </button>
          </div>
          <div className="flex flex-row items-center  mr-6">
            <div className=" mr-1">
              <img
                className="h-7 w-7 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=mR7Mc7kSlc&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 min-w-0 mr-4">
              <a href="#" className="focus:outline-none">
                <p className="text-xs font-normal leading-4 text-gray-400">
                  Assigned to
                </p>
                <p className="text-xs font-medium leading-4 text-gray-500 truncate">
                  Deve Webb
                </p>
              </a>
            </div>
            {downIcon}
          </div>
          <div className="flex flex-row items-center  mr-6">
            <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-gray-500 mr-1">
              <span className="text-xs font-medium leading-none text-white">
                F
              </span>
            </span>
            <div className="flex-1 min-w-0 mr-4">
              <a href="#" className="focus:outline-none">
                <p className="text-xs font-medium leading-4 text-gray-500 truncate">
                  Finance
                </p>
              </a>
            </div>
            {downIcon}
          </div>
        </div>
        {closeIcon}
      </div>

      <div className="flex flex-row">
        {/* Left side */}
        <div className="p-6">
          <p className="text-lg leading-6 font-medium">
            Send Documents to Steve
          </p>
          <div className="mt-6">
            <Label
              htmlFor="description"
              text="Description"
              icon={
                <svg
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 0.833008H16.5M1.5 5.41634H11.8846M1.5 9.99967H8.55128"
                    stroke="#111827"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
            <textarea
              id="description"
              name="description"
              rows={3}
              style={{ width: "29.5rem" }}
              className="bg-gray-200 shadow-sm focus:ring-gray-300 focus:border-gray-300 mt-1 block w-full sm:text-sm border-transparent rounded-md placeholder-gray-400 text-xs leading-4 font-normal h-full"
              placeholder="Add more detailed description"
            ></textarea>
          </div>
          <div className="mt-6">
            <Label
              htmlFor="checklist"
              text="Checklist"
              icon={
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.24967 7L6.63856 8.38889L9.41634 5.61111M13.583 7C13.583 10.4518 10.7848 13.25 7.33301 13.25C3.88123 13.25 1.08301 10.4518 1.08301 7C1.08301 3.54822 3.88123 0.75 7.33301 0.75C10.7848 0.75 13.583 3.54822 13.583 7Z"
                    stroke="#111827"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
            {!addCheckList ? (
              <div className="flex flex-row items-center mt-1">
                <div className="mr-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99967 1.33301V14.6663M14.6663 7.99967L1.33301 7.99967"
                      stroke="#9CA3AF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className="text-gray-400 text-sm leading-5 font-medium cursor-pointer"
                  onClick={() => setAddCheckList(true)}
                >
                  Add checklist item
                </p>
              </div>
            ) : (
              <div className="mt-1">
                <input
                  type="text"
                  name="checklist"
                  id="checklist"
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Add an item"
                />
                <div className="flex flex-row items-center mt-2">
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mr-4"
                  >
                    Add
                  </button>
                  <div
                    className="inline-block cursor-pointer"
                    onClick={() => setAddCheckList(false)}
                  >
                    {closeIcon}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="mt-6">
            <Label
              htmlFor="attachments"
              text="Attachments"
              icon={
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.53538 3.52778L3.96192 8.10124C3.41952 8.64364 3.41952 9.52303 3.96192 10.0654C4.50431 10.6078 5.38371 10.6078 5.9261 10.0654L10.3804 5.49196C11.4652 4.40717 11.4652 2.64838 10.3804 1.56359C9.29563 0.478803 7.53684 0.478803 6.45205 1.56359L1.99773 6.13706C0.370548 7.76424 0.370548 10.4024 1.99773 12.0296C3.62492 13.6568 6.2631 13.6568 7.89029 12.0296L12.2357 7.69444"
                    stroke="#111827"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            />
            {!addAttachment ? (
              <div className="flex flex-row items-center mt-1">
                <div className="mr-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99967 1.33301V14.6663M14.6663 7.99967L1.33301 7.99967"
                      stroke="#9CA3AF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className="text-gray-400 text-sm leading-5 font-medium cursor-pointer"
                  onClick={() => setAddAttachment(true)}
                >
                  Add attachment
                </p>
              </div>
            ) : (
              <div
                className="relative rounded-lg border bg-white px-2 py-2 shadow-sm flex items-center space-x-3 hover:border-blue-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 mt-1"
                style={{ backgroundColor: "#f1f5f9" }}
                onClick={() => setAddAttachment(false)}
              >
                <div className="flex-shrink-0">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="36" height="36" rx="18" fill="#FEE2E2" />
                    <path
                      d="M17.4424 18.5C17.3903 18.3177 17.3512 18.0833 17.3252 17.7969C17.2992 17.4844 17.2861 17.224 17.2861 17.0156C17.2861 16.7812 17.3122 16.6641 17.3643 16.6641C17.5205 16.6641 17.5986 16.9245 17.5986 17.4453C17.5986 17.9661 17.5465 18.3177 17.4424 18.5ZM17.3643 20.3359C17.7288 21.013 18.1846 21.5469 18.7314 21.9375C18.4189 21.9896 17.5986 22.276 16.2705 22.7969C16.609 22.1719 16.9736 21.3516 17.3643 20.3359ZM13.6924 25.2188C13.7965 24.9323 14.2523 24.4115 15.0596 23.6562C14.9033 23.9167 14.7471 24.151 14.5908 24.3594C14.4346 24.5417 14.3044 24.6979 14.2002 24.8281C14.096 24.9323 14.0049 25.0234 13.9268 25.1016C13.8486 25.1536 13.7835 25.1927 13.7314 25.2188C13.7054 25.2188 13.6924 25.2188 13.6924 25.2188ZM20.0205 14.75H25.333V27.5625C25.333 27.8229 25.2419 28.0443 25.0596 28.2266C24.8773 28.4089 24.6559 28.5 24.3955 28.5H11.2705C11.0101 28.5 10.7887 28.4089 10.6064 28.2266C10.4242 28.0443 10.333 27.8229 10.333 27.5625V9.4375C10.333 9.17708 10.4242 8.95573 10.6064 8.77344C10.7887 8.59115 11.0101 8.5 11.2705 8.5H19.083V13.8125C19.083 14.0729 19.1742 14.2943 19.3564 14.4766C19.5387 14.6589 19.7601 14.75 20.0205 14.75ZM19.708 21.4688C18.9528 21 18.3929 20.2969 18.0283 19.3594C18.3408 18.1354 18.432 17.3021 18.3018 16.8594C18.2236 16.4948 18.0413 16.2474 17.7549 16.1172C17.4945 15.9609 17.221 15.9349 16.9346 16.0391C16.6481 16.1432 16.4788 16.3255 16.4268 16.5859C16.2705 17.1589 16.3747 18.1615 16.7393 19.5938C16.1403 21 15.6064 22.1198 15.1377 22.9531C14.3825 23.3177 13.7575 23.7474 13.2627 24.2422C12.7679 24.737 12.6768 25.1927 12.9893 25.6094C13.1976 25.8698 13.484 26 13.8486 26C14.4997 26 15.2939 25.1927 16.2314 23.5781C17.846 23.0573 18.8747 22.7578 19.3174 22.6797C20.2549 23.1745 21.0882 23.4219 21.8174 23.4219C22.3382 23.4219 22.6637 23.2005 22.7939 22.7578C22.9242 22.3151 22.859 21.9766 22.5986 21.7422C22.182 21.3516 21.2184 21.2604 19.708 21.4688ZM25.0596 12.6016C25.2419 12.7839 25.333 13.0052 25.333 13.2656V13.5H20.333V8.5H20.5674C20.8278 8.5 21.0492 8.59115 21.2314 8.77344L25.0596 12.6016ZM22.1689 22.5625C22.0127 22.7448 21.4528 22.6276 20.4893 22.2109C21.609 22.1849 22.1689 22.3021 22.1689 22.5625Z"
                      fill="#EF4444"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <a href="#" className="focus:outline-none">
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                    <p className="text-sm font-medium text-gray-900">
                      InternationalStudent.pdf
                    </p>
                    <p className="text-sm text-gray-500 truncate flex flex-row items-center">
                      3.45 MB{" "}
                      <span
                        style={{
                          display: "inline-block",
                          height: "5px",
                          width: "5px",
                          backgroundColor: "#cfcfcf",
                          borderRadius: "50%",
                          margin: "0 5px",
                        }}
                      ></span>
                      May 16, 2020, 4:46 PM
                    </p>
                  </a>
                </div>
                <div>{downIcon}</div>
              </div>
            )}
          </div>
          <div className="mt-6">
            <label
              className="flex flex-row items-center mb-2"
              htmlFor="conversations"
            >
              <p className="text-base leading-6 font-medium font-gray-900 mr-2">
                Conversations
              </p>
              {downIcon}
            </label>
            <div>
              <textarea
                id="conversations"
                name="conversations"
                rows={3}
                style={{ width: "29.5rem" }}
                className="shadow-sm focus:ring-gray-500 focus:border-gray-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md text-xs leading-4 font-normal placeholder-gray-400"
                placeholder="Write a comment..."
              ></textarea>
            </div>
          </div>
          <div className="mt-6 flex flex-row items-center">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9H6.01M10 9H10.01M14 9H14.01M19 9C19 13.4183 14.9706 17 10 17C8.46073 17 7.01172 16.6565 5.74467 16.0511L1 17L2.39499 13.28C1.51156 12.0423 1 10.5743 1 9C1 4.58172 5.02944 1 10 1C14.9706 1 19 4.58172 19 9Z"
                stroke="#9CA3AF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="ml-2 text-xs leading-4 font-normal text-gray-500">
              No comments yet
            </p>
          </div>
        </div>
        {/* Right side */}
        <div
          className="flex flex-col w-full border-solid border-r-0  border-b-0 border-gray-200"
          style={{ borderLeftWidth: "1px", borderTopWidth: "1px" }}
        >
          <div
            className="flex flex-row items-center w-full p-6 border-solid border-gray-200"
            style={{ background: "#f8fafc", borderBottomWidth: "1px" }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.66667 4.83333V1.5M12.3333 4.83333V1.5M4.83333 8.16667H13.1667M3.16667 16.5H14.8333C15.7538 16.5 16.5 15.7538 16.5 14.8333V4.83333C16.5 3.91286 15.7538 3.16667 14.8333 3.16667H3.16667C2.24619 3.16667 1.5 3.91286 1.5 4.83333V14.8333C1.5 15.7538 2.24619 16.5 3.16667 16.5Z"
                stroke="#9CA3AF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="ml-2 mr-auto text-sm leading-5 font-normal text-gray-500">
              Due date
            </p>
            {downIcon}
          </div>
          <div
            className="flex flex-row items-center w-full p-6 border-solid border-gray-200"
            style={{ background: "#f8fafc", borderBottomWidth: "1px" }}
          >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9414 6.26562C16.332 6.1875 16.625 6.31445 16.8203 6.64648C17.0156 6.95898 16.9961 7.26172 16.7617 7.55469C16.3125 8.12109 15.8145 8.62891 15.2676 9.07812C14.7402 9.52734 14.2617 9.87891 13.832 10.1328C13.4219 10.3672 12.9922 10.582 12.543 10.7773C12.0938 10.9531 11.791 11.0703 11.6348 11.1289C11.4785 11.168 11.3418 11.1973 11.2246 11.2168C9.7793 11.5293 8.46094 11.7148 7.26953 11.7734C5.53125 11.8711 3.91016 12.418 2.40625 13.4141V15.6406C2.40625 15.7969 2.32812 15.875 2.17188 15.875H1.23438C1.07812 15.875 1 15.7969 1 15.6406V3.98047C0.375 3.6875 0.0625 3.19922 0.0625 2.51562C0.0625 2.06641 0.21875 1.68555 0.53125 1.37305C0.863281 1.04102 1.25391 0.875 1.70312 0.875C2.23047 0.875 2.66016 1.08984 2.99219 1.51953C3.34375 1.94922 3.43164 2.44727 3.25586 3.01367C5.01367 2.91602 6.83984 3.38477 8.73438 4.41992C9.51562 4.83008 10.2773 5.18164 11.0195 5.47461C11.7617 5.76758 12.377 5.97266 12.8652 6.08984C13.373 6.20703 13.8516 6.28516 14.3008 6.32422C14.7695 6.34375 15.1113 6.34375 15.3262 6.32422C15.5605 6.30469 15.7656 6.28516 15.9414 6.26562ZM10.9316 9.83984C12.3379 9.44922 13.5879 8.74609 14.6816 7.73047C12.7285 7.67188 10.5215 6.97852 8.06055 5.65039C6.0293 4.55664 4.14453 4.17578 2.40625 4.50781V11.7734C3.89062 10.9336 5.48242 10.4648 7.18164 10.3672C8.33398 10.3086 9.58398 10.1328 10.9316 9.83984Z"
                fill="#9CA3AF"
              />
            </svg>

            <p className="ml-2 mr-auto text-sm leading-5 font-normal text-gray-500">
              Priority
            </p>
            {downIcon}
          </div>
          <div
            className="flex flex-row items-center w-full p-6 border-solid border-gray-200"
            style={{ background: "#f8fafc", borderBottomWidth: "1px" }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.23656 10.1183C6.40513 9.78179 6.5 9.40197 6.5 9C6.5 8.59803 6.40513 8.21821 6.23656 7.88172M6.23656 10.1183C5.82611 10.9376 4.97874 11.5 4 11.5C2.61929 11.5 1.5 10.3807 1.5 9C1.5 7.61929 2.61929 6.5 4 6.5C4.97874 6.5 5.82611 7.06243 6.23656 7.88172M6.23656 10.1183L11.7634 12.8817M6.23656 7.88172L11.7634 5.11828M11.7634 5.11828C12.1739 5.93757 13.0213 6.5 14 6.5C15.3807 6.5 16.5 5.38071 16.5 4C16.5 2.61929 15.3807 1.5 14 1.5C12.6193 1.5 11.5 2.61929 11.5 4C11.5 4.40197 11.5949 4.78179 11.7634 5.11828ZM11.7634 12.8817C11.5949 13.2182 11.5 13.598 11.5 14C11.5 15.3807 12.6193 16.5 14 16.5C15.3807 16.5 16.5 15.3807 16.5 14C16.5 12.6193 15.3807 11.5 14 11.5C13.0213 11.5 12.1739 12.0624 11.7634 12.8817Z"
                stroke="#9CA3AF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="ml-2 mr-auto text-sm leading-5 font-normal text-gray-500">
              Related task
            </p>
            {downIcon}
          </div>
          <div
            className="flex flex-row items-center w-full p-6 border-solid border-gray-200"
            style={{ background: "#f8fafc", borderBottomWidth: "1px" }}
          >
            <svg
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3337 4.83333C10.3337 6.67428 8.84128 8.16667 7.00033 8.16667C5.15938 8.16667 3.66699 6.67428 3.66699 4.83333C3.66699 2.99238 5.15938 1.5 7.00033 1.5C8.84128 1.5 10.3337 2.99238 10.3337 4.83333Z"
                stroke="#9CA3AF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.00033 10.667C3.77866 10.667 1.16699 13.2787 1.16699 16.5003H12.8337C12.8337 13.2787 10.222 10.667 7.00033 10.667Z"
                stroke="#9CA3AF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="ml-2 mr-auto text-sm leading-5 font-normal text-gray-500">
              For student
            </p>
            {downIcon}
          </div>
          <div
            className="flex flex-row items-center w-full p-6 border-solid border-gray-200"
            style={{ background: "#f8fafc", borderBottomWidth: "1px" }}
          >
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7137 12.8807C11.9862 13.6083 10.5186 15.0758 9.41311 16.1813C8.63206 16.9624 7.36726 16.9623 6.58621 16.1813C5.5006 15.0957 4.06013 13.6552 3.28563 12.8807C0.682134 10.2772 0.682134 6.05612 3.28563 3.45262C5.88912 0.849126 10.1102 0.849126 12.7137 3.45262C15.3172 6.05612 15.3172 10.2772 12.7137 12.8807Z"
                stroke="#9CA3AF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.4997 8.16667C10.4997 9.54738 9.38039 10.6667 7.99967 10.6667C6.61896 10.6667 5.49967 9.54738 5.49967 8.16667C5.49967 6.78596 6.61896 5.66667 7.99967 5.66667C9.38039 5.66667 10.4997 6.78596 10.4997 8.16667Z"
                stroke="#9CA3AF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="ml-2 mr-auto text-sm leading-5 font-normal text-gray-500">
              Branch
            </p>
            {downIcon}
          </div>
          <div
            className="flex flex-col items-center w-full h-full p-6 border-solid border-gray-200"
            style={{ background: "#f8fafc", borderBottomWidth: "1px" }}
          >
            <div className="mb-2 ">
              <p className="text-xs leading-4 font-normal text-gray-400">
                Task created
              </p>
              <p className="text-xs leading-4 font-medium text-gray-500">
                Feb 4, 2021, 11:17 AM
              </p>
            </div>
            <div>
              <p className="text-xs leading-4 font-normal text-gray-400">
                Task updated
              </p>
              <p className="text-xs leading-4 font-medium text-gray-500">
                Feb 4, 2021, 11:21 AM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const index: React.FC = () => {
  const [page, setPage] = useState<"FIRST" | "LAST">("FIRST");

  return (
    <>
      {page === "FIRST" ? (
        <TaskFormInitialize
          changePage={() => {
            setPage("LAST");
          }}
        />
      ) : (
        <TaskFormDetail
          changePage={() => {
            setPage("FIRST");
          }}
        />
      )}
    </>
  );
};

export default index;
