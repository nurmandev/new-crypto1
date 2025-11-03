import React from "react";

export const UserDistributionChart: React.FC = () => {
  const stats = [
    { label: "Active Users 49%", color: "#10B981" },
    { label: "Suspended 2%", color: "#EF4444" },
    { label: "Pending Verification 20%", color: "#F59E0B" },
    { label: "Inactive Users 40%", color: "#6B7280" },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-[15px] font-medium text-black mb-4">
        User Distribution
      </h3>

      <div className="flex flex-col items-center">
        {/* Pie Chart Placeholder */}
        <div className="relative w-48 h-48 mb-6">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Green segment (49%) - Active Users */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#10B981"
              strokeWidth="40"
              strokeDasharray="245 500"
              transform="rotate(-90 100 100)"
            />
            {/* Red segment (2%) - Suspended */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#EF4444"
              strokeWidth="40"
              strokeDasharray="10 500"
              strokeDashoffset="-245"
              transform="rotate(-90 100 100)"
            />
            {/* Orange segment (20%) - Pending */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="40"
              strokeDasharray="100 500"
              strokeDashoffset="-255"
              transform="rotate(-90 100 100)"
            />
            {/* Gray segment (40%) - Inactive */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#6B7280"
              strokeWidth="40"
              strokeDasharray="200 500"
              strokeDashoffset="-355"
              transform="rotate(-90 100 100)"
            />
            {/* Center circle */}
            <circle cx="100" cy="100" r="60" fill="white" />
          </svg>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 w-full">
          {stats.map((stat, index) => (
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
