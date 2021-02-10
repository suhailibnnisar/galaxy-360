import React from "react";
import AddTaskForms from "../components/main/tasks/AddTaskForms";
import MainLayout from "../layouts/MainLayout";

const Test = () => {
  return (
    <MainLayout>
      <div className="h-full w-full flex flex-col items-center justify-center">
        <AddTaskForms />
      </div>
    </MainLayout>
  );
};

export default Test;
