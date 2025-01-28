import React from 'react';
import ChallengeCard from './Challengecard';
import Image from 'next/image';
import ArrowRight from '../../../public/icons/chevron-right.svg';

interface ChallengeListProps {
  challenges: {
    id: number;
    title: string;
    status: string;
    skills: string[];
    timeline: string;
  }[];
  
  onSeeAll: () => void;
}

const ChallengeList: React.FC<ChallengeListProps> = ({ challenges, onSeeAll }) => {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Recent Challenges</h2>
        <button onClick={onSeeAll} className=" flex items-center gap-2 text-blue-600">
          See all
          <Image 
            src={ArrowRight} 
            alt="Arrow Right" 
            width={20} 
            height={20}
          />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {challenges.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            title={challenge.title}
            status={challenge.status}
            skills={challenge.skills}
            timeline={challenge.timeline}
            buttonLabel="View Challenge"
            onClick={() => alert(`Viewing challenge ${challenge.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default ChallengeList;
