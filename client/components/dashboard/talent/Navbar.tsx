import React from 'react';

interface NavbarProps {
  showSearch?: boolean;
  actionButton?: React.ReactNode;
}

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white">
      <div className="relative w-1/3">
        <input type="text" placeholder="Search here..." className="border outline-none rounded-md p-2 pl-10 w-full"/> 
        <img src="/icons/search.svg" alt="Search" className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5" />
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <div className="bg-lightGray flex items-center justify-center border w-10 h-10 rounded-full">
          <img src="/icons/bell.svg" alt="Notifications" className="h-5" />
        </div>
        <div className="w-10 h-10 rounded-full">
          <img src="/images/Image.png" alt="User" className="h-full w-full" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
