import React, { useState } from "react";
import Dropdown from "../components/includes/Dropdown";
import Modal from "../components/includes/Modal";
import SelectComponent from "../components/includes/Select";
import AddTaskForms from "../components/main/tasks/AddTaskForms";
import CustomizeTaskForm from "../components/main/tasks/CustomizeTaskForm";
import MainLayout from "../layouts/MainLayout";

const Test = () => {
  return (
    <MainLayout>
      <div className=" w-full flex flex-col items-center justify-center py-10">
        <CustomizeTaskForm />
      </div>
    </MainLayout>
  );
};

export default Test;
