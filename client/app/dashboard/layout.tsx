import React from 'react';
import Sidebar from '../../components/dashboard/layout/sidebar';
import Navbar from '../../components/dashboard/talent/Navbar';
import home from "../../public/icons/home.svg";
import logout from "../../public/icons/sign-out.svg";
import profile from "../../public/icons/User Plus.svg";
import settings from "../../public/icons/settings.svg";
import file from "../../public/icons/file.svg";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {

  const user = { name: 'Hilaire Sh', handle: 'uidesign' };

  return (
    <div className="flex">
      <Sidebar user={user} />
      <main className="flex-1">
        <Navbar/>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
