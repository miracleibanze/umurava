import { FC } from "react";
import { umurava } from "@public";
import Image from "next/image";

interface Challenge {
  title: string;
  skills: string[];
  difficulty: string;
  deadline: string;
  className?: string;
}

const ChallengeCard: FC<Challenge> = ({
  title,
  skills,
  difficulty,
  deadline,
  className,
}) => (
  <div>
    <div
      className={`border border-blue-500/20 rounded-t-lg p-6 ${
        className && className
      }`}
    >
      <div className="flex justify-between items-center mb-4 w-full aspect-video rounded-lg overflow-hidden relative">
        <Image
          src={umurava}
          alt="Umurava Logo"
          className="absolute inset-0"
          width={500}
          height={500}
        />
      </div>
      <h3 className="body-2 font-semibold mb-2 leading-tight">{title}</h3>
      <p className="text-sm text-zinc-600 font-semibold">
        Skills Needed:
        <br />
        {skills.map((item, index) => (
          <button
            className="button m-1 border border-primary/60 !px-1 !py-0 !text-sm text-primary/70"
            key={index}
          >
            {item}
          </button>
        ))}
      </p>
      <p className="text-sm text-zinc-600">
        <b>Difficulty Level:</b> {difficulty}
      </p>
      <p className="text-sm text-zinc-600">
        <b>Deadline:</b> {deadline}
      </p>
    </div>
    <div className="bg-white text-blue-500 px-4 py-2 rounded-b-md border border-blue-500/20 border-t-none w-full">
      <button className="button bg-primary text-white">View Challenge</button>
    </div>
  </div>
);

export default ChallengeCard;
