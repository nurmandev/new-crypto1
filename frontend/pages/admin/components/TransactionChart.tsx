import React from 'react';

export const TransactionChart: React.FC = () => {
  const chartData = [
    { label: 'Deposits', crypto: 45, inr: 35 },
    { label: 'Trades', crypto: 90, inr: 65 },
    { label: 'Support', crypto: 12, inr: 7 },
    { label: 'KYC', crypto: 20, inr: 15 },
  ];

  const maxValue = 100;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-[15px] font-medium text-black mb-6">User Distribution</h3>

      <div className="flex items-end justify-around h-64 gap-8">
        {chartData.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1 h-full justify-end gap-2">
            <div className="flex items-end gap-1.5 h-full">
              {/* Crypto bar (Purple/Blue) */}
              <div
                className="w-12 bg-[#627EEA] rounded-t transition-all"
                style={{ height: `${(item.crypto / maxValue) * 100}%` }}
              />
              {/* INR bar (Green) */}
              <div
                className="w-12 bg-[#10B981] rounded-t transition-all"
                style={{ height: `${(item.inr / maxValue) * 100}%` }}
              />
            </div>
            <span className="text-sm text-gray-600 mt-2 font-medium">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#10B981]" />
          <span className="text-[13px] text-[#10B981]">Crypto Transactions</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#627EEA]" />
          <span className="text-[13px] text-[#627EEA]">INR Transactions</span>
        </div>
      </div>
    </div>
  );
};
