import React from 'react';
import DashboardHeader from '../../../components/dashboard/talent/DashboardHeader';
import StatsGrid from '../../../components/dashboard/talent/StatsGrid';
import ChallengeList from '../../../components/dashboard/talent/ChallengeList';
import ArrowRight from '../../../public/icons/chevron-right.svg';
import Image from 'next/image';

const TalentDashboard = () => {
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
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Welcome back Hilaire</h1>
          <p className="text-gray-600">Build Work Experience through Skills Challenges</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              View Profile
        </button>
      </div>
      <StatsGrid stats={stats} />
      <div className="flex justify-between items-center mb-2 mt-8">
        <h2 className="text-lg font-bold">Recent Challenges</h2>
        <button onClick={()=>{}} className=" flex items-center gap-2 text-blue-600">
          See all
          <Image 
            src={ArrowRight} 
            alt="Arrow Right" 
            width={20} 
            height={20}
          />
        </button>
      </div>
      <ChallengeList challenges={challenges} onSeeAll={() => alert('See all challenges')} />
    </div>
  );
};


export default TalentDashboard;
