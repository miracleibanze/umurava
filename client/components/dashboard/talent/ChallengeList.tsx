import React from 'react';
import ChallengeCard from './Challengecard';
import Image from 'next/image';


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
    <div className="">
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
