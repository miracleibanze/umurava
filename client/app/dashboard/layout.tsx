import React from 'react';
import Sidebar from '../../components/dashboard/layout/sidebar';
import Navbar from '../../components/dashboard/talent/Navbar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {

  const user = { name: 'Hilaire Sh', handle: 'uidesign' };

  return (
    <div className='flex'>
      <div className="min-h-screen">
        <Sidebar user={user}/>
      </div>
      <main className="flex-1">
        <Navbar/>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
