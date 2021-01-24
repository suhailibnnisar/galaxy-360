import React from 'react';

interface Props {
  text: string;
  background?: string;
  label?: string;
}

const StudentHeader: React.FC<Props> = ({ text, background, label }) => {
  return (
    <div className={`pt-4 pb-6 px-md bg-${background ? background : 'prim'}`}>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li>
            <div>
              <a
                href="#"
                className="ml-0 text-sm font-medium text-blue-500 hover:text-blue-700"
              >
                Home
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                width="5"
                height="12"
                viewBox="0 0 5 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.1804 0.863636H3.04261L0.230114 11.3125H1.3679L4.1804 0.863636Z"
                  fill="#0F62FE"
                />
              </svg>
              <a
                href="#"
                className="ml-2 text-sm font-medium text-blue-500 hover:text-blue-700"
              >
                New Application
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                width="5"
                height="12"
                viewBox="0 0 5 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.1804 0.863636H3.04261L0.230114 11.3125H1.3679L4.1804 0.863636Z"
                  fill="#0F62FE"
                />
              </svg>
              <a
                href="#"
                aria-current="page"
                className="ml-2 text-sm font-medium text-blue-500 hover:text-blue-700"
              >
                Personal
              </a>
            </div>
          </li>
        </ol>
      </nav>
      <p className="text-3xl font-bold leading-9 mt-0.5">{text}</p>
      {label && (
        <p className="text-gray-500 text-sm font-medium mt-2">{label}</p>
      )}
    </div>
  );
};

export default StudentHeader;
