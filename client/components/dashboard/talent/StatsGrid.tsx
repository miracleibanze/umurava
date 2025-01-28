import React from 'react';
import StatsCard from '../../../components/dashboard/talent/statcard';

interface StatsGridProps {
  stats: { label: string; value: string | number; icon: React.ReactNode }[];
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <StatsCard key={index} label={stat.label} value={stat.value} icon={stat.icon} />
      ))}
    </div>
  );
};

export default StatsGrid;
