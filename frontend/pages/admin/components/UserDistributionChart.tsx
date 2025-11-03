import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

export const UserDistributionChart: React.FC = () => {
  const data = [
    { name: 'Active Users 49%', value: 49, color: '#10B981' },
    { name: 'Pending Verification 20%', value: 20, color: '#F59E0B' },
    { name: 'Inactive Users 40%', value: 40, color: '#6B7280' },
    { name: 'Suspended 2%', value: 2, color: '#EF4444' },
  ];

  const renderCustomizedLabel = () => null;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-[15px] font-medium text-black mb-4">User Distribution</h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            innerRadius={40}
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
