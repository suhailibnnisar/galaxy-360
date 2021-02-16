import React from "react";
import Card from "./card";

const data = [
  {
    id: 1,
    name: "Get student profile",
    department: "Documentation",
    priority: "Medium",
    assignee: {
      image:
        "https://pbs.twimg.com/profile_images/1100866378586714112/7C-Asgzb_400x400.jpg",
      name: "Jenny Wilson",
    },
    description:
      "The student profile shows the student information your institution allows, such as information on their academic load and scholarship eligibility, as well as course performance, including probability of passing and course activity",
    dueDate: new Date(),
    checked: false,
  },
  {
    id: 2,
    name: "Check for current investment",
    department: "Finance",
    priority: "High",
    assignee: {
      image:
        "https://www.planbconsult.net/wp-content/uploads/2017/10/Plan-B-11-7-18-Tom-Cook-Photo-114.jpg",
      name: "Tom Cook",
    },
    description:
      "An investment is an asset or item that is purchased with the hope that it will generate income or appreciate in value at some point in the future.",
    dueDate: new Date(),
    checked: false,
  },
  {
    id: 3,
    name: "Marketing related post creation",
    department: "Finance",
    priority: "High",
    assignee: {
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=mR7Mc7kSlc&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Devon Webb",
    },
    description:
      " Marketing refers to activities a company undertakes to promote the buying or selling of a product or service",
    dueDate: new Date(),
    checked: false,
  },
];

interface Props {
  title: string;
  setRowFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Kanban: React.FC<Props> = (props) => {
  const { title, setRowFormVisible } = props;
  const randomVal = Math.ceil(Math.random() * 3);

  return (
    <div
      className="bg-gray-100 mr-4 border p-4 rounded-md border-gray-300"
      style={{ height: "fit-content" }}
    >
      <div className="flex justify-between">
        <span className="font-semibold">{title}</span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-200 text-gray-800">
          {randomVal} Tasks
        </span>
      </div>

      {data.slice(0, randomVal).map((item) => {
        return (
          <div onClick={() => setRowFormVisible(true)}>
            <Card task={item} key={`${item.id}`} />
          </div>
        );
      })}
    </div>
  );
};

export default Kanban;
