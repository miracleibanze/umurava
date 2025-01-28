import React from 'react';
import Image from 'next/image';
import Document from '../../../public/icons/Document.svg'

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value, icon }) => {
  return (
    <div className="w-full h-full bg-white border-2 border-lightGray rounded-lg p-4">
      <div className="flex items-center justify-between border-l-4 border-primary pl-2">
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-xl text-gray-600 font-bold">{value}</p>
        </div>
        <div className="bg-lightBlue p-2 rounded-full">
          <Image
            src={Document}
            alt="Umurava Logo"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
