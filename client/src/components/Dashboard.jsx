// src/components/Dashboard.js
import React from "react";
import CourseSwitcher from "./CourseSwitcher";
import ProgressBar from "./ProgressBar";
import GraphRenderer from "./GraphRenderer";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <CourseSwitcher />
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <ProgressBar />
        <GraphRenderer />
      </div>
    </div>
  );
};

export default Dashboard;
