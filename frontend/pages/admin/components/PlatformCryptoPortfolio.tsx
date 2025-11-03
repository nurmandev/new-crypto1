import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

export const PlatformCryptoPortfolio: React.FC = () => {
  const data = [
    { name: 'Active Users 49%', value: 49, color: '#10B981' },
    { name: 'Bitcoin 45.2%', value: 45.2, color: '#F59E0B' },
    { name: 'Ethereum 28.5%', value: 28.5, color: '#627EEA' },
    { name: 'Cardano 6.8%', value: 6.8, color: '#0033AD' },
    { name: 'Others 4.2%', value: 4.2, color: '#6B7280' },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-[15px] font-medium text-black mb-4">Platform Crypto Portfolio</h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            innerRadius={50}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="square"
            iconSize={11}
            formatter={(value, entry: any) => (
              <span className="text-[13px]" style={{ color: entry.color }}>
                {value}
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
