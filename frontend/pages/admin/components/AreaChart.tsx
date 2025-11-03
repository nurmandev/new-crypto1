import React from 'react';

export const AreaChart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-[15px] font-medium text-black mb-4">User Distribution</h3>
      
      <div className="relative h-64 w-full">
        {/* Simple area chart visualization */}
        <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="0"
              y1={i * 50}
              x2="400"
              y2={i * 50}
              stroke="#E5E7EB"
              strokeWidth="1"
            />
          ))}
          
          {/* Area path */}
          <path
            d="M 0 150 L 50 120 L 100 100 L 150 80 L 200 60 L 250 50 L 300 70 L 350 90 L 400 100 L 400 200 L 0 200 Z"
            fill="#A78BFA"
            fillOpacity="0.6"
          />
          
          {/* Line path */}
          <path
            d="M 0 150 L 50 120 L 100 100 L 150 80 L 200 60 L 250 50 L 300 70 L 350 90 L 400 100"
            fill="none"
            stroke="#7C3AED"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Y-axis labels */}
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>Jan</span>
        <span>Mar</span>
        <span>May</span>
        <span>Jul</span>
        <span>Sep</span>
        <span>Nov</span>
      </div>
    </div>
  );
};
