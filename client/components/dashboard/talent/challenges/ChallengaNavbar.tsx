import React from "react";
import Link from "next/link";

const ChallengeNavbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center">
      {/* Back Button */}
      <Link href="/dashboard/challenges">
        <div className="flex items-center text-blue-600 cursor-pointer hover:underline">
          <img src="/icons/left-arrow.svg" alt="Back" className="h-5 w-5 mr-2" />
          <span className="text-Gray font-medium">Go Back</span>
        </div>
      </Link>

      {/* Breadcrumb Navigation */}
      <div className="ml-6 text-gray-600">
        <span className="text-gray-500">Challenges & Hackathons</span>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-blue-600 font-medium">Design a Dashboard for Sokofund</span>
      </div>
    </nav>
  );
};

export default ChallengeNavbar;
