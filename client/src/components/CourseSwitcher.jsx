// src/components/CourseSwitcher.js
import React from "react";
import { useProgressData } from "../context/ProgressDataProvider";

const CourseSwitcher = () => {
  const { courses, handleCourseSelect } = useProgressData();

  return (
    <div className="p-4">
      <label htmlFor="courseSelect" className="font-semibold mr-2">
        Select Course:
      </label>
      <select
        id="courseSelect"
        className="p-2 rounded border border-gray-300"
        onChange={(e) => handleCourseSelect(e.target.value)}
      >
        {courses.map((course, index) => (
          <option key={index} value={course.courseName}>
            {course.courseName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CourseSwitcher;
