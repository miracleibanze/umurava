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
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md">View Profile</button>
    </nav>
  );
};

export default Navbar;
