import { FC } from "react";
import Link from "next/link";

interface GoBackProps {
  path: string;
}

const GoBack: FC<GoBackProps> = ({ path }) => {
  return (
    <div className="flex gap-5 mb-5 items-center">
      <Link href="/">
        <span className="flex items-center gap-2 hover:bg-zinc-200 rounded-2xl px-2 py-1">
          <i className="fas fa-arrow-left"></i> Home
        </span>
      </Link>
      <span className="text-blue-600">/ {path}</span>
    </div>
  );
};

export default GoBack;
