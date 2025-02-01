import React from "react";
import Image from "next/image";
import { umurava } from "@public";

const ChallengeDetails: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Project Header */}
      <div className="mb-6">
        <div className="w-full h-auto mb-2">
          <Image
            src={umurava}
            alt="umurava"
            className="w-full aspect-[15/8] rounded-md object-cover object-center"
          />
        </div>
        <h2 className="text-xl font-bold text-gray-800">Project Brief: Payroll and HR Management System</h2>
        <p className="text-gray-600 mt-2">
          A fintech company developing a digital financial platform for businesses and their workforce in Africa is partnering 
          with Umurava to run a Skills Challenge for Product Design. This fintech company offers Payroll Management Systems 
          to Employers and Embedded Financial services for Employees and Gig Workers across Africa.
        </p>
      </div>

      {/* Tasks Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Tasks:</h3>
        
        {/* Product Requirements */}
        <h4 className="text-lg font-semibold text-gray-900 mt-4">Product Requirements</h4>
        <ul className="list-disc pl-6 text-gray-600">
          <li>UX research to understand project requirements</li>
          <li>Understanding User Needs</li>
          <li>Understanding Business Goals</li>
          <li>Determine interaction between users</li>
          <li>Requirements Catalog</li>
        </ul>

        {/* Product Design */}
        <h4 className="text-lg font-semibold text-gray-900 mt-4">Product Design</h4>
        <ul className="list-disc pl-6 text-gray-600">
          <li>User Interface Design for each step</li>
          <li>Creating wireframes to outline the basic structure and layout</li>
          <li>Designing visually appealing and user-friendly interfaces</li>
          <li>Ensuring web app works seamlessly across devices</li>
          <li>Providing feedback session for in-development guidance</li>
        </ul>
      </div>

      {/* Deliverables Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900">Deliverables:</h3>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Requirements Catalog and User Interaction Diagram</li>
          <li>User Interface Mockups</li>
          <li>Payroll and HR System Design Completed</li>
        </ul>
      </div>

      {/* Note section */}
      <div className="">
        <h3 className="text-xl font-semibold text-gray-900 mt-4">Note:</h3>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Find Product Requirements Summary and Features Description for Saway Pay <a className="hover:underline">HERE</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ChallengeDetails;