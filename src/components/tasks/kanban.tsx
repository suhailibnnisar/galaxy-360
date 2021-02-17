import React, { useState } from "react";
import Card from "./card";
import { initialData } from "./tasks";

interface Props {
  title: string;
  setRowFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Kanban: React.FC<Props> = (props) => {
  const { title, setRowFormVisible } = props;
  const [loadMore, setLoadMore] = useState(true);
  const [data, setData] = useState(
    initialData
      .filter(
        (item) => item.category.toLowerCase() === title.toLocaleLowerCase()
      )
      .slice(0, 6)
  );

  return (
    <div
      className="bg-gray-100 mr-4 border p-4 rounded-md border-gray-300"
      style={{ height: "fit-content" }}
    >
      <div className="flex justify-between">
        <span className="font-semibold">{title}</span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-200 text-gray-800">
          {
            initialData.filter(
              (item) =>
                item.category.toLocaleLowerCase() === title.toLocaleLowerCase()
            ).length
          }{" "}
          Tasks
        </span>
      </div>

      {data.map((item) => {
        return (
          <div onClick={() => setRowFormVisible(true)}>
            <Card task={item} key={`${item.id}`} />
          </div>
        );
      })}

      {data.length > 5 && loadMore && (
        <div className="text-center">
          <a
            onClick={() => {
              setLoadMore(false);
              setData(
                initialData.filter(
                  (item) =>
                    item.category.toLocaleLowerCase() ===
                    title.toLocaleLowerCase()
                )
              );
            }}
            className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md justify-center mt-4"
          >
            <span className="truncate text-center">Load More</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Kanban;
