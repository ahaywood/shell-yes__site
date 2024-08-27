import React from "react";
import { Icon } from "./Icon";

interface TerminalProps {
  children: React.ReactNode;
}

const Terminal = ({ children }: TerminalProps) => {
  return <div className="border-2 border-maiTai rounded-xl">
    <div className="border-b-1 border-maiTai flex gap-2 p-3">
      <div className="rounded-full border-1 border-maiTai size-3" />
      <div className="rounded-full border-1 border-maiTai size-3" />
      <div className="rounded-full border-1 border-maiTai size-3" />
    </div>
    <div className="terminal py-5 px-8 pr-[72px] relative text-left font-code font-medium">
      <div>{children}</div>
      <button className="size-[42px] text-[#b3ada3] center rounded-lg border-1 border-[#b3ada3] hover:bg-[#b3ada3] hover:text-white absolute bottom-5 right-5">
        <Icon id="copy" size={24} />
      </button>
    </div>
  </div>;
};

export { Terminal };
