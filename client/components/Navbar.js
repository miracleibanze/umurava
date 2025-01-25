"use client";

import { usePathname } from "next/navigation";
import { Umuravalogo } from "@public";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Challenge & hackathons", link: "/challenges&Hackathons" },
    { name: "For Education Institution", link: "/education-institutions" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
  ];
  const pathname = usePathname();

  const content = (
    <>
      <div className="lg:hidden fixed inset-0 -z-1 pointer-events-auto backdrop-blur-sm"></div>
      <ul className="lg:hidden fixed top-[4.5rem] left-0 bottom-0 right-24 bg-primary text-white -z-1 flex flex-col pt-8 pl-6 gap-3 p-3">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={`${
              pathname === link.link && "bg-white/30"
            } py-2 px-4 rounded-md hover:bg-white/30`}
          >
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <>
      <div className="container mx-auto w-full flex sticky top-0 bg-white items-center justify-between py-3 md:px-6 px-12 z-[9999]">
        <div onClick={toggleNavigation} className="lg:hidden">
          <i
            className={`fas ${
              openNavigation ? "fa-times" : "fa-bars"
            } text-3xl text-black`}
          ></i>
        </div>
        <Image src={Umuravalogo} alt="logo" width={150} className="w-[10rem]" />
        <ul className="w-full flex-1 lg:flex items-center justify-center gap-4 text-sm font-semibold text-zinc-800/90 hidden">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`${
                pathname === link.link && "text-primary"
              } hover:text-primary`}
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
        <button className="button bg-darkBlue text-white">
          Join<span className="max-md:hidden"> the Program</span>
        </button>
      </div>
      {openNavigation && content}
    </>
  );
};

export default Navbar;
