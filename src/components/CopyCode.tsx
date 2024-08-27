import React from "react";
import { Icon } from "./Icon";

interface CopyCodeProps {
  width?: string;
}

const CopyCode = ({ width = "418px" }: CopyCodeProps) => {
  return (
    <div className="relative inline-block left-1/2 -translate-x-1/2">
      <input
        type="text"
        value="git clone https://github.com"
        className="rounded-xl bg-melon font-code text-black pl-6 pr-14 h-[60px] border-white border-2 outline-none mb-11"
        style={{ width }}
      />
      <button className="text-black absolute top-[14px] right-[14px]">
        <Icon id="copy" size={32} />
      </button>
    </div>
  );
};

export { CopyCode };
