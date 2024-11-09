// src/App.js
import React from "react";
import { ProgressDataProvider } from "./context/ProgressDataProvider";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <ProgressDataProvider>
      <Dashboard />
    </ProgressDataProvider>
  );
};

export default App;
