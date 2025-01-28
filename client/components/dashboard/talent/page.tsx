import React from 'react';
import DashboardHeader from '../../../components/dashboard/talent/DashboardHeader';
import StatsGrid from '../../../components/dashboard/talent/StatsGrid';
import ChallengeList from '../../../components/dashboard/talent/ChallengeList';
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
      <DashboardHeader
        title="Welcome back, Hilaire"
        subtitle="Build Work Experience through Skills Challenges"
        actionButton={
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            View Profile
          </button>
        }
      />
      <StatsGrid stats={stats} />
      <ChallengeList challenges={challenges} onSeeAll={() => alert('See all challenges')} />
    </div>
  );
};


export default TalentDashboard;
