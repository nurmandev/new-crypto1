import { ArrowUpRight } from "lucide-react";

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
      <div className="bg-white rounded-lg border border-[#D4D4D4] p-4 md:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-3">
        <div className="flex-1">
          <p className="text-xs md:text-sm text-gray-700 mb-1">
            Available to Trade
          </p>
          <p className="text-base md:text-lg font-medium text-black">
            ₹25,430.00
          </p>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
          <span className="text-base md:text-lg">₹</span>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-[#D4D4D4] p-4 md:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-3">
        <div className="flex-1">
          <p className="text-xs md:text-sm text-gray-700 mb-1">Today's P&L</p>
          <p className="text-base md:text-lg font-medium text-[#3CC27B]">
            +₹2,340
          </p>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#3CC27B]/20 flex items-center justify-center flex-shrink-0">
          <ArrowUpRight className="w-4 h-4 text-[#3CC27B]" />
        </div>
      </div>

      <div className="bg-white rounded-lg border border-[#D4D4D4] p-4 md:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-3">
        <div className="flex-1">
          <p className="text-xs md:text-sm text-gray-700 mb-1">
            Crypto Holdings
          </p>
          <p className="text-base md:text-lg font-medium text-black">
            20 Coins
          </p>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle
              cx="8"
              cy="8"
              r="7"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
