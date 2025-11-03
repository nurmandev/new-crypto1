import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const TransactionChart: React.FC = () => {
  const data = [
    {
      name: 'Deposits',
      'Crypto Transactions': 45,
      'INR Transactions': 35,
    },
    {
      name: 'Trades',
      'Crypto Transactions': 90,
      'INR Transactions': 65,
    },
    {
      name: 'Support',
      'Crypto Transactions': 12,
      'INR Transactions': 7,
    },
    {
      name: 'KYC',
      'Crypto Transactions': 20,
      'INR Transactions': 15,
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-[15px] font-medium text-black mb-6">User Distribution</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="name"
            tick={{ fill: '#6B7280', fontSize: 14 }}
            axisLine={{ stroke: '#E5E7EB' }}
          />
          <YAxis
            tick={{ fill: '#6B7280', fontSize: 12 }}
            axisLine={{ stroke: '#E5E7EB' }}
          />
          <Tooltip />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="square"
            iconSize={12}
          />
          <Bar dataKey="Crypto Transactions" fill="#10B981" radius={[4, 4, 0, 0]} />
          <Bar dataKey="INR Transactions" fill="#627EEA" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
