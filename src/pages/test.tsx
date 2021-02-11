import React, { useState } from "react";
import Dropdown from "../components/includes/Dropdown";
import Modal from "../components/includes/Modal";
import SelectComponent from "../components/includes/Select";
import AddTaskForms from "../components/main/tasks/AddTaskForms";
import MainLayout from "../layouts/MainLayout";

const Test = () => {
  const [visible, setVisible] = useState(true);
  return (
    <MainLayout>
      <div className=" w-full flex flex-col items-center justify-center py-10">
        <Modal visible={visible} setVisible={setVisible}>
          <AddTaskForms />
        </Modal>
      </div>
    </MainLayout>
  );
};

export default Test;
