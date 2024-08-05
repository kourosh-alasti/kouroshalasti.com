import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

interface Props {
  to: string;
  target?: string;
  children: React.ReactNode;
  className?: string;
}

export default function ActionButton({
  to,
  children,
  className,
  target,
}: Props) {
  return (
    <Link to={to} target={target || "_self"}>
      <button
        className={cn(
          "flex w-full justify-between gap-2 rounded-md border bg-[#2e2e2e] px-4 py-2 capitalize text-white hover:bg-[#3e3e3e] hover:text-gray-200  hover:opacity-80",
          className,
        )}
      >
        {children}
      </button>
    </Link>
  );
}
