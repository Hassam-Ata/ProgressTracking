// src/context/ProgressDataProvider.js
import React, { createContext, useState, useContext, useEffect } from "react";
import userData from "../data/userData";

const ProgressDataContext = createContext();

export const ProgressDataProvider = ({ children }) => {
  const [courses] = useState(userData.courses);
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  const handleCourseSelect = (courseName) => {
    const course = courses.find((course) => course.courseName === courseName);
    setSelectedCourse(course);
  };

  return (
    <ProgressDataContext.Provider
      value={{ courses, selectedCourse, handleCourseSelect }}
    >
      {children}
    </ProgressDataContext.Provider>
  );
};

export const useProgressData = () => useContext(ProgressDataContext);
