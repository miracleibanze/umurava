import React from "react";

const ChallengeCard = ({ title, skills, difficulty, deadline }) => {
  return (
    <div className="bg-blue-50 rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <img src="/umurava-logo.svg" alt="Umurava Logo" className="w-12 h-12" />
        <span className="bg-white text-blue-500 px-3 py-1 rounded-full">
          Open
        </span>
      </div>
      <h3 className="text-sm font-semibold mb-2">{title}</h3>
      <p className="text-xs text-gray-500">
        Skills Needed: {skills.join(", ")}
      </p>
      <p className="text-xs text-gray-500">Difficulty Level: {difficulty}</p>
      <p className="text-xs text-gray-500">Deadline: {deadline}</p>
      <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100">
        View Challenge
      </button>
    </div>
  );
};

export default ChallengeCard;
