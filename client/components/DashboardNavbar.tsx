"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store"; // Make sure this path is correct
import { FC, useEffect } from "react";
import { fetchUser } from "@redux/slices/userSlice"; // Assuming you have this action in your userSlice
import Image from "next/image";
import { usePathname } from "@node_modules/next/navigation";

const DashboardNavbar: FC = () => {
  const pathname = usePathname();

  const dispatch = useDispatch<AppDispatch>(); // Typing dispatch as AppDispatch
  const { user, status, error } = useSelector((state: RootState) => state.user); // Accessing user data

  // Fetch user data when the component mounts
  useEffect(() => {
    if (!user) {
      dispatch(fetchUser("userId12345")); // Replace with actual user ID logic
    }
  }, [dispatch, user]);

  return (
    <div
      className={`w-full flex justify-between py-2 px-4 ${
        pathname.startsWith("/dashboard/setting") && "hidden"
      }`}
    >
      <div className="w-full lg:max-w-md max-w-sm bg-zinc-100/60 rounded-md py-1.5 px-3 h-max flex items-center">
        <i className="fas fa-search text-zinc-400"></i>
        <input
          type="text"
          className="bg-transparent text-sm px-3 flex-1 w-full outline-none"
          placeholder="Search here..."
        />
      </div>

      <div className="flex gap-3 items-center">
        {/* Notification Bell */}
        <i className="far fa-bell bg-zinc-100 p-2 rounded-full flex-0 w-8"></i>

        {/* Display user profile image or default */}
        {user?.profile?.image ? (
          <Image
            src={user.profile.image}
            alt="profile img"
            width={32}
            height={32}
            className="w-8 aspect-square object-cover flex-0 rounded-full"
          />
        ) : (
          <i className="far fa-user bg-zinc-100 p-2 rounded-full flex-0 w-8"></i>
        )}
      </div>
    </div>
  );
};

export default DashboardNavbar;
