import React from "react";

export const PlatformCryptoPortfolio: React.FC = () => {
  const cryptoStats = [
    { label: "Active Users 49%", color: "#10B981" },
    { label: "Cardano 6.8%", color: "#0033AD" },
    { label: "Ethereum 28.5%", color: "#627EEA" },
    { label: "Bitcoin 45.2%", color: "#F59E0B" },
    { label: "Others 4.2%", color: "#6B7280" },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-[15px] font-medium text-black mb-4">
        Platform Crypto Portfolio
      </h3>

      <div className="flex flex-col items-center">
        {/* Donut Chart Placeholder */}
        <div className="relative w-48 h-48 mb-6">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Outer ring segments */}
            <circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="#10B981"
              strokeWidth="30"
              strokeDasharray="216 500"
              transform="rotate(-90 100 100)"
            />
            <circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="30"
              strokeDasharray="199 500"
              strokeDashoffset="-216"
              transform="rotate(-90 100 100)"
            />
            <circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="#627EEA"
              strokeWidth="30"
              strokeDasharray="125 500"
              strokeDashoffset="-415"
              transform="rotate(-90 100 100)"
            />
            <circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="#0033AD"
              strokeWidth="30"
              strokeDasharray="30 500"
              strokeDashoffset="-540"
              transform="rotate(-90 100 100)"
            />
            {/* Inner circle for donut effect */}
            <circle cx="100" cy="100" r="55" fill="white" />
          </svg>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 w-full">
          {cryptoStats.map((stat, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 flex-shrink-0"
                style={{ backgroundColor: stat.color }}
              />
              <span className="text-[13px]" style={{ color: stat.color }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
