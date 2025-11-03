import React from 'react';
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const AreaChart: React.FC = () => {
  const data = [
    { name: 'Jan', value: 3000 },
    { name: 'Mar', value: 4500 },
    { name: 'May', value: 6000 },
    { name: 'Jul', value: 8000 },
    { name: 'Sep', value: 10000 },
    { name: 'Nov', value: 9500 },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-[15px] font-medium text-black mb-4">User Distribution</h3>

      <ResponsiveContainer width="100%" height={300}>
        <RechartsAreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#A78BFA" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#A78BFA" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="name"
            tick={{ fill: '#6B7280', fontSize: 12 }}
            axisLine={{ stroke: '#E5E7EB' }}
          />
          <YAxis
            tick={{ fill: '#6B7280', fontSize: 12 }}
            axisLine={{ stroke: '#E5E7EB' }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#7C3AED"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorValue)"
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
};
