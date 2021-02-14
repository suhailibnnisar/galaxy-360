import React, { useState } from "react";
import Draggable from "react-draggable";

const COLOR_DEPARTMENT_MAPPING = {
  Documentation: "bg-green-100",
  Finance: "bg-geekBlue-100",
  Admission: "bg-purple-100",
};

const COLOR_PRIORITY_MAPPING = {
  High: "bg-red-100",
  Medium: "bg-yellow-100",
  Low: "bg-geekBlue-100",
};

type Task = {
  id: number;
  name: string;
  department: string;
  priority: string;
  assignee: {
    image: string;
    name: string;
  };
  description: string;
  dueDate: Date;
  checked: boolean;
};

interface Props {
  task: Task;
}

const Card: React.FC<Props> = (props) => {
  const { task: item } = props;
  const [activeDrags, setActiveDrags] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const month = item.dueDate.toLocaleString("default", {
    month: "short",
  });

  const day = item.dueDate.getMonth();
  const year = item.dueDate.getFullYear();

  const onStart = () => {
    // setActiveDrags(activeDrags + 1);
  };

  const onStop = () => {
    // setActiveDrags(activeDrags - 1);
  };

  const dragHandlers = { onStart, onStop };

  const onControlledDrag = (e, position) => {
    const { x, y } = position;
    // setPosition(position);
  };

  const onControlledDragStop = (e, position) => {
    onControlledDrag(e, position);
    onStop();
  };

  return (
    <Draggable
      position={position}
      onDrag={onControlledDrag}
      {...dragHandlers}
      onStop={onControlledDragStop}
    >
      <div className="bg-white p-2 rounded-md mt-4 w-80 hover:shadow-md cursor-pointer">
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            COLOR_DEPARTMENT_MAPPING[item.department]
          } ${COLOR_DEPARTMENT_MAPPING[item.department]
            .replace("100", "800")
            .replace("bg", "text")}`}
        >
          {item.department}
        </span>

        <div className="mt-2 flex justify-between items-center">
          <span className="font-semibold text-base text-gray-900">
            {item.name}
          </span>
          <img
            className="inline-block h-8 w-8 rounded-full"
            src={item.assignee.image}
            alt="Assignee"
          />
        </div>

        <div className="mt-2 flex justify-between items-center">
          <span className="text-gray-400 text-sm font-medium">
            {item.description}
          </span>
          <img
            className="opacity-0 h-8 w-8 rounded-full"
            src={item.assignee.image}
            alt="Assignee"
          />
        </div>

        <div className="mt-3 flex justify-between items-center">
          <div className="flex justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>

            <span className="text-gray-400 mx-2">3</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5 text-gray-400 mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>

            <span className="text-gray-400 text-sm font-medium">
              {month} {day} {year}
            </span>
          </div>
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              COLOR_PRIORITY_MAPPING[item.priority]
            }  ${COLOR_PRIORITY_MAPPING[item.priority]
              .replace("100", "800")
              .replace("bg", "text")}`}
          >
            {item.priority}
          </span>
        </div>
      </div>
    </Draggable>
  );
};

export default Card;
