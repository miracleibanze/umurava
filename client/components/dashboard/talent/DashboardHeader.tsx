import React from 'react';

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
  actionButton: React.ReactNode;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title, subtitle, actionButton }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      {actionButton}
    </div>
  );
};

export default DashboardHeader;
