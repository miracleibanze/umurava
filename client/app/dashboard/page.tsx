"use client";

import { useDispatch, useSelector } from "react-redux";
import ChallengeCard from "@components/challengeCard";
import { AppDispatch, RootState } from "@redux/store"; // Importing AppDispatch
import { FC, useEffect } from "react";
import { fetchChallenges } from "@redux/slices/challengeSlice";

const Page: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, status, error } = useSelector((state: RootState) => state.user); // Accessing user, status, and error

  const { challenges } = useSelector((state: RootState) => state.challenge);

  // Analytics data
  const analyticsData = [
    {
      title: "Total Challenges",
      count: 29405,
      percentage: 16,
      icon: "fa-book",
    },
    {
      title: "Total Participants",
      count: 29405,
      percentage: 16,
      icon: "fa-users",
    },
    {
      title: "Completed Challenges",
      count: 5837,
      percentage: 16,
      icon: "fa-book",
    },
    {
      title: "Open Challenges",
      count: 5837,
      percentage: 16,
      icon: "fa-book",
    },
    {
      title: "Ongoing Challenges",
      count: 5837,
      percentage: 16,
      icon: "fa-book",
    },
  ];

  // Challenges data
  const challengesData = [
    {
      title: "Design a Dashboard for SokoFund",
      difficulty: "Beginner",
      skills: ["UX Design", "Research", "User Flow", "Sketch", "Figma"],
      deadline: "10 Days",
    },
    {
      title: "Develop a Mobile App for SokoFund",
      difficulty: "Intermediate",
      skills: ["React Native", "Java", "Swift", "API Integration"],
      deadline: "15 Days",
    },
    {
      title: "Conduct Market Research for SokoFund",
      difficulty: "Beginner",
      skills: [
        "Data Analysis",
        "Market Research",
        "Survey Design",
        "Data Visualization",
      ],
      deadline: "7 Days",
    },
  ];

  useEffect(() => {
    dispatch(fetchChallenges());
  }, [dispatch]);

  return (
    <section className="w-full p-3 bg-zinc-50 flex-1 h-full">
      <h4 className="w-full font-semibold flex gap-2">
        Welcome back
        {status === "loading" ? (
          <div className="w-full max-w-24 !h-6 rounded-md bg-zinc-100 animate-pulse"></div>
        ) : user?.fullName ? (
          " " + user.fullName
        ) : (
          <span className="text-gray-500">User not found</span>
        )}
        ,
      </h4>
      <p className="text-sm !text-zinc-400 mb-4">
        Build Work Experience through Skills Challenges
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
        {analyticsData.map((data, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg p-6 border-2 border-zinc-100 flex items-center justify-start ${
              index === 0 || index === 1 ? "lg:col-span-3" : "lg:col-span-2"
            } ${index === 0 ? "md:col-span-2" : "md:col-span-1"} relative`}
          >
            <i
              className={`fas text-primary ${data.icon} p-3 rounded-full flex-0 bg-primary/10`}
            ></i>
            <div className="w-full pr-3 pl-5">
              <div className="text-zinc-500 text-[11px] w-full">
                {data.title}
              </div>
              <div className="text-md font-bold flex items-center">
                {data.count}
                <span className="text-primary px-1 ml-1 rounded-full bg-primary/10 text-[11px]">
                  {data.percentage}%
                </span>
              </div>
              <div className="text-xs absolute top-2 right-4">
                Last Week <i className="fas fa-angle-down"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3 justify-center">
        {Array(3)
          .fill("")
          .map((challenge, index) => (
            <ChallengeCard key={index} {...challenges[index]} />
          ))}
      </div>
    </section>
  );
};

export default Page;
