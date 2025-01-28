import React from 'react';
import ChallengeList from '@/components/dashboard/talent/ChallengeList';
import ChallengeStatsCard from '@/components/dashboard/talent/challenges/challengeStats';


const TalentChallengesPage = () => {
  const stats = [
    { label: 'Completed Challenges', value: 5, icon: <div>📘</div> },
    { label: 'Open Challenges', value: 200, icon: <div>📘</div> },
    { label: 'Ongoing Challenges', value: 200, icon: <div>📘</div> },
  ];

  const challenges = [
    {
      id: 1,
      title: 'Design a Dashboard for SokoFund, Fintech Product',
      status: 'Open',
      skills: ['UI/UX Design', 'User Research'],
      timeline: '15 Days',
    },
    {
      id: 2,
      title: 'Develop a Backend API for a Health App',
      status: 'Open',
      skills: ['Node.js', 'TypeScript'],
      timeline: '30 Days',
    },
    {
      id: 3,
      title: 'Build an E-commerce Website',
      status: 'Open',
      skills: ['React', 'Next.js'],
      timeline: '20 Days',
    },
    {
        id: 4,
        title: 'Design a Dashboard for SokoFund, Fintech Product',
        status: 'Open',
        skills: ['UI/UX Design', 'User Research'],
        timeline: '15 Days',
      },
      {
        id: 5,
        title: 'Develop a Backend API for a Health App',
        status: 'Open',
        skills: ['Node.js', 'TypeScript'],
        timeline: '30 Days',
      },
      {
        id: 6,
        title: 'Build an E-commerce Website',
        status: 'Open',
        skills: ['React', 'Next.js'],
        timeline: '20 Days',
      },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Challenges</h1>
          <p className="text-gray-600">Join a challenge or a hackathon to gain valuable work experience.</p>
        </div>
      </div>
      <div className="flex flex-row gap-4 mb-8">
        <ChallengeStatsCard label="All Challenges" value={5} />
        <ChallengeStatsCard label="Completed Challenges" value={5} />
        <ChallengeStatsCard label="Open Challenges" value={5} />
        <ChallengeStatsCard label="Ongoing Challenges" value={5} />
      </div>
      <ChallengeList challenges={challenges} onSeeAll={() => alert('See all challenges')} />
      <div className="flex flex-row items-center justify-between mt-10 mb-8">
        <button className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700">Previous</button>
        <button className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700">Next</button>
      </div>
    </div>
  );
};


export default TalentChallengesPage;
