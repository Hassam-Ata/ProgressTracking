// src/components/GraphRenderer.js
import React from "react";
import { Bar } from "react-chartjs-2";
import { useProgressData } from "../context/ProgressDataProvider";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const GraphRenderer = () => {
  const { selectedCourse } = useProgressData();
  const { totalQuizzes, completedQuizzes, totalVideos, completedVideos } =
    selectedCourse;

  const data = {
    labels: ["Quizzes", "Videos"],
    datasets: [
      {
        label: "Total",
        data: [totalQuizzes, totalVideos],
        backgroundColor: "#E5E7EB",
      },
      {
        label: "Completed",
        data: [completedQuizzes, completedVideos],
        backgroundColor: "#4F46E5",
      },
    ],
  };

  return (
    <div className="flex flex-col items-center p-4 md:w-1/3 w-full">
      <h3 className="text-xl font-semibold mb-4">
        {selectedCourse.courseName} Progress
      </h3>
      <div className="w-full">
        <Bar data={data} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default GraphRenderer;
