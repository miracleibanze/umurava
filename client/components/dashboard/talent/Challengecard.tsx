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
        <div className="relative bg-primary py-12 flex items-center justify-center text-white rounded-lg">
          <Image 
          src={Umuravalogo} 
          alt="Umurava Logo"
          height={100}
          style={{fill: 'white'}}
          />
          <div className="absolute top-2 right-2 bg-Green py-1 px-6 rounded-r-full rounded-l-full text-lg font-semibold">Open</div>
        </div>
        <div className="my-4">
          <h3 className="font-bold text-lg text-gray-800 text-wrap">{title}</h3>
        </div>
      </div>

      <div className="">
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-Gray">Skills Needed:</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 text-sm border border-primary text-blue-600 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4 flex flex-row">
          <h4 className="text-sm font-semibold">Timeline:</h4>
          <p className="text-sm text-Gray">{timeline}</p>
        </div>
        <button onClick={onClick} className="w-fit bg-primary text-white py-2 px-4 rounded-lg hover:bg-darkBlue transition">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default ChallengeCard;
