import React from "react";

interface CryptoStatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor?: string;
}

export const CryptoStatsCard: React.FC<CryptoStatsCardProps> = ({
  title,
  value,
  icon,
  bgColor = "#BDFDDB",
}) => {
  return (
    <div className="flex items-center justify-between gap-8 px-[11px] py-2.5 bg-white rounded-[10px] border border-[#D4D4D4] h-[109px]">
      <div className="flex flex-col">
        <span className="text-sm font-normal leading-[33px] text-black font-inter">
          {title}
        </span>
        <span className="text-xl font-bold leading-[33px] text-black font-roboto">
          {value}
        </span>
      </div>
      <div
        className="flex items-center justify-center h-[35px] w-[35px] rounded-full p-2.5"
        style={{ backgroundColor: bgColor }}
      >
        {icon}
      </div>
    </div>
  );
};
