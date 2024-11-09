// src/components/ProgressBar.js
import React from "react";
import { useProgressData } from "../context/ProgressDataProvider";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = () => {
  const { selectedCourse } = useProgressData();
  const { completedQuizzes, totalQuizzes, completedVideos, totalVideos } =
    selectedCourse;
  const completionPercentage =
    ((completedQuizzes + completedVideos) / (totalQuizzes + totalVideos)) * 100;

  return (
    <div className="flex flex-col items-center p-4 md:w-1/3 w-full">
      <h3 className="text-xl font-semibold mb-4">
        {selectedCourse.courseName} Completion
      </h3>
      <div className="w-1/2">
        <CircularProgressbar
          value={completionPercentage}
          text={`${completionPercentage.toFixed(1)}%`}
          styles={buildStyles({
            textSize: "16px",
            pathColor: "#4F46E5",
            textColor: "#4F46E5",
          })}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
