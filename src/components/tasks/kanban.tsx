import React from "react";
import Card from "./card";

const data = [
  {
    id: 1,
    name: "Lorem Ipsum dolar soto",
    department: "Documentation",
    priority: "Medium",
    assignee: {
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=mR7Mc7kSlc&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Sannani Awale",
    },
    description: "Lorem ipsum consectetur adipiscing elit",
    dueDate: new Date(),
    checked: false,
  },
  {
    id: 2,
    name: "Lorem Ipsum dolar soto",
    department: "Finance",
    priority: "High",
    assignee: {
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=mR7Mc7kSlc&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Sannani Awale",
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
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
  return (
    <div className="bg-gray-100 mr-4 border p-4 rounded-md border-gray-300">
      <div className="flex justify-between">
        <span className="font-semibold">{title}</span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-200 text-gray-800">
          4 Tasks
        </span>
      </div>

      {data.map((item) => {
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
