import React from 'react';
import Link from 'next/link';


interface SidebarProps {
  user: { name: string; handle: string };
}

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const links = [
    { name: 'Dashboard', path: '/dashboard', icon: <img src="/icons/home.svg" alt="File" height={50} />},
    { name: 'Challenges & Hackathons', path: '/dashboard/challenges', icon: <img src="/icons/file.svg" alt="File" height={50} /> },
    { name: 'Community', path: '/dashboard/community', icon: <img src="/icons/User Plus.svg" alt="Settings" height={50} /> },
  ];

  const buttonlinks = [
    { name: 'Settings', path: '/dashboard/settings', icon: <img src="/icons/settings.svg" alt="Settings" height={50} /> },
    { name: 'Help Center', path: '/dashboard/settings', icon: <img src="/icons/headset.svg" alt="Settings" height={50} /> },
    { name: 'Refer family & friends', path: '/dashboard/settings', icon: <img src="/icons/gift.svg" alt="Settings" height={50} /> },
  ];

  return (
    <div className="max-w-75 bg-primary text-white flex flex-col justify-between h-screen pr-1 pl-4 py-4">
      <div>
        <div className="w-full flex items-center mb-5 mt-5 pl-6">
          <img 
            src="/icons/umurava-icon.svg" 
            alt="Umurava Logo" 
            height={50} 
            className="text-white"
          />
        </div>
        <div className="">
          <ul className=''>
            {links.map((link) => (
              <li key={link.name} className="mb-4">
                <Link href={link.path} className="flex items-center p-2 hover:bg-white rounded-md">
                  {link.icon}
                  <span className="ml-2">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center mb-10 gap-2">
        <ul className='w-full'>
          {buttonlinks.map((link) => (
            <li key={link.name} className="mb-4">
              <Link href={link.path} className="flex items-center p-2 hover:bg-white rounded-md">
                {link.icon}
                <span className="ml-2">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className='w-full flex flex-row items-center gap-2'>
          <div className="flex justify-start flex-row gap-2">
            <div className="w-10 aspect-square rounded-full bg-white"></div>
            <div className="">
              <p>{user.name}</p>
              <p className="text-sm text-gray-300">@{user.handle}</p>
            </div>
            <div className="">
              <img src="/icons/sign-out.svg" alt="Settings" height={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
