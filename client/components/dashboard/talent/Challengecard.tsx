import React from 'react';
import Umuravalogo from '../../../public/images/umurava-logo.svg';
import Image from "next/image";


interface ChallengeCardProps {
  title: string;
  status: string;
  skills: string[];
  timeline: string;
  buttonLabel: string;
  onClick: () => void;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ title, status, skills, timeline, buttonLabel, onClick }) => {
  return (
    <div className="w-full h-full bg-white border-2 border-gray-200 rounded-lg p-4">
      <div className="">
        <div className="bg-primary py-10 flex items-center justify-center text-white rounded-lg">
          <Image 
          src={Umuravalogo} 
          alt="Umurava Logo"
          height={100}
          style={{fill: 'white'}}
          />
        </div>
        <div className="my-4">
          <h3 className="font-bold text-lg text-gray-800 text-wrap">{title}</h3>
        </div>
      </div>

      <div className="">
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500">Skills Needed:</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 text-sm border border-primary text-blue-600 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500">Timeline:</h4>
          <p className="text-sm text-gray-700">{timeline}</p>
        </div>
        <button onClick={onClick} className="w-fit bg-primary text-white py-2 px-4 rounded-lg hover:bg-darkBlue transition">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default ChallengeCard;
