import React from 'react';
import Image from 'next/image';
import Document from '@//public/icons/Document.svg'

interface StatsCardProps {
  label: string;
  value: string | number;
}

const ChallengeStatsCard: React.FC<StatsCardProps> = ({ label, value}) => {
  return (
    <div className="w-fit bg-white border-2 border-lightGray rounded-lg py-2 px-3">
        <div className="flex flex-row items-center justify-center">
            <Image
                src={Document}
                alt="Umurava Logo"
                width={30}
                height={30}
            />
            <div className="flex flex-row justify-center items-center gap-4">
                <p className="text-sm text-Gray">{label}</p>
                <div className="bg-lightGray px-5 py-1 rounded-full w-5 h-5 flex items-center justify-center">
                  {value}
                </div>  
            </div>
        </div>
    </div>
  );
};

export default ChallengeStatsCard;
