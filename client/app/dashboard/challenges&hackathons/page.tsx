"use client";

import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/store";
import Link from "next/link";
import { fetchChallenges } from "@redux/slices/challengeSlice";
import ChallengeCard, {
  ChallengeCardSkeleton,
} from "@components/challengeCard";

const Page: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, status, error } = useSelector((state: RootState) => state.user);
  const { challenges, loadingChallenges } = useSelector((state: RootState) => state.challenge);

  const [filterIndex, setFilterIndex] = useState(0);

  const menu = [
    { name: "All Challenge", number: challenges?.length },
    {
      name: "Completed Challenge",
      number: challenges.filter((c) => c.status === "completed").length,
    },
    {
      name: "Open Challenge",
      number: challenges.filter((c) => c.status === "open").length,
    },
    {
      name: "Ongoing Challenge",
      number: challenges.filter((c) => c.status === "ongoing").length,
    },
  ];

  useEffect(() => {
    dispatch(fetchChallenges());
  }, [dispatch]);

  const handleFilter = (index: number) => {
    setFilterIndex(index);
  };

  const filteredChallenges = () => {
    switch (filterIndex) {
      case 1:
        return challenges.filter((c) => c.status === "completed");
      case 2:
        return challenges.filter((c) => c.status === "open");
      case 3:
        return challenges.filter((c) => c.status === "ongoing");
      default:
        return challenges;
    }
  };

  return (
    <section className="w-full p-3 bg-zinc-50 flex-1 h-full">
      <h4 className="w-full font-semibold flex gap-2">Challenges</h4>
      <p className="text-sm !text-zinc-400 mb-6">
        Join a challenge or a hackathon to gain valuable experience.
      </p>
      {user?.role !== 'admin' ? (
      <div className="w-full flex items-center gap-3 flex-wrap">
        {menu.map((item, index) => (
          <button
            className={`button border border-zinc-300 !py-1 !px-2 text-[11px] font-normal ${
              index === filterIndex ? "bg-blue-100/50" : " bg-zinc-200/50"
            }`}
            key={index}
            onClick={() => handleFilter(index)}
          >
            <i className="fas fa-book mr-2"></i>
            <span>{item.name}</span>
            <span
              className={`p-1 border border-zinc-300 rounded-full flex-0 h-10 w-10 aspect-square ml-3 ${
                index === filterIndex && "bg-primary text-white"
              }`}
            >
              {item.number}
            </span>
          </button>
        ))}
        <Link href="/dashboard/challenges&hackathons/create-new-challenge">
          <button className="button !bg-primary text-[11px] text-white">
            <i className="fas fa-plus mr-2"></i>
            Create new
          </button>
        </Link>
      </div>
      ):(
        <div className="flex flex-row gap-2">
          {menu.map((item, index)=>(
            <button 
            key={index}
            onClick={() => handleFilter(index)}
            className={`${index == filterIndex ? 'bg-primary/15' : ''} border text-Grey_light rounded-lg gap-2 border-primary/10 flex flex-row items-center justify-center px-3 py-2`}>
              <i className=""></i>
              <span className="text-sm">{item.name}</span>
              <div className={`${index == filterIndex ? 'bg-primary text-white' : 'bg-primary/10'} text-xs flex-1 items-center justify-center px-2 rounded-r-lg rounded-l-lg`}>
                {item.number}
              </div>
            </button>
          ))}
        </div>
      )}

      <div className="w-full flex flex-wrap gap-3 py-12 justify-items-center">
        {loadingChallenges ? (
          <div className="px-4 p-8 flex flex-wrap gap-3 justify-center">
            {Array(6)
              .fill("")
              .map((_, index) => (
                <ChallengeCardSkeleton key={index} />
              ))}
          </div>
        ) : filteredChallenges().length > 0 ? (
          <>
            {filteredChallenges().map((challenge, index) => (
              <ChallengeCard {...challenge} key={index} />
            ))}
            <div className="w-full flex justify-end md:px-12 px-6">
              <button className="button bg-primary text-white !px-8">
                Next
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">No challenges found.</p>
        )}
      </div>
    </section>
  );
};

export default Page;
