import React from "react";
import SidebarStudentDetail from "../components/navigation/SidebarStudentDetail";

const StudentsLayout: React.FC = ({ children }) => {
  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <SidebarStudentDetail />
      {children}
    </div>
  );
};

export default StudentsLayout;
