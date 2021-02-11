import React from "react";
import Dropdown from "../components/includes/Dropdown";
import SelectComponent from "../components/includes/Select";
import AddTaskForms from "../components/main/tasks/AddTaskForms";
import MainLayout from "../layouts/MainLayout";

const Test = () => {
  return (
    <MainLayout>
      <div className=" w-full flex flex-col items-center justify-center py-10">
        <AddTaskForms />
        <SelectComponent />
      </div>
    </MainLayout>
  );
};

export default Test;
