// src/components/QuizTracker.js
import React from "react";
import { useProgressData } from "../context/ProgressDataProvider";

const QuizTracker = () => {
  const { quizScores } = useProgressData();

  return (
    <div className="flex flex-col items-center p-4 md:w-1/3 w-full">
      <h3 className="text-xl font-semibold mb-4">Quiz Scores</h3>
      <ul className="space-y-2">
        {quizScores.map((score, index) => (
          <li
            key={index}
            className="bg-indigo-100 rounded p-2 w-full text-center"
          >
            Quiz {index + 1}: {score}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizTracker;
