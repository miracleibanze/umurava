import React from "react";

const KeyInstructions: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Key Instructions:</h3>
      
      <p className="text-gray-600 mb-4">
        You are free to schedule a clarification call with the team via this email.
      </p>
      <div className="flex items-center gap-3 mb-4">
        <img src="/icons/Message.svg" alt="Email" className="h-6 w-6" />
        <span className="text-blue-600 font-medium">talent@umurava.africa</span>
      </div>
      <div className="flex items-center gap-3 mb-4">
        <img src="/icons/Case.svg" alt="Web Design" className="h-6 w-6" />
        <span className="text-gray-700">Web Design</span>
      </div>
      <div className="flex items-center gap-3 mb-4">
        <img src="/icons/calendar.svg" alt="Duration" className="h-6 w-6" />
        <span className="text-gray-700">7 Days</span>
      </div>
      <div className="flex items-center gap-3 mb-4">
        <img src="/icons/Dollar.svg" alt="Prize" className="h-6 w-6" />
        <span className="text-gray-700">$150 - $400</span>
      </div>
      <button className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition">
        Submit your work
      </button>
    </div>
  );
};

export default KeyInstructions;
