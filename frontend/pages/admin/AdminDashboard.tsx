import React, { useState } from 'react';
import { Users, TrendingUp, BarChart3, Activity } from 'lucide-react';
import { AdminHeader } from './components/AdminHeader';
import { AdminSidebar } from './components/AdminSidebar';
import { StatsCard } from './components/StatsCard';

export const AdminDashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    {
      title: 'Total Users',
      value: '12,543',
      icon: Users,
      trend: { percentage: 12, isPositive: true },
      color: 'blue' as const,
    },
    {
      title: 'Total Revenue',
      value: '$45,230',
      icon: TrendingUp,
      trend: { percentage: 8, isPositive: true },
      color: 'green' as const,
    },
    {
      title: 'Active Sessions',
      value: '892',
      icon: Activity,
      trend: { percentage: 5, isPositive: false },
      color: 'purple' as const,
    },
    {
      title: 'Total Transactions',
      value: '28,450',
      icon: BarChart3,
      trend: { percentage: 23, isPositive: true },
      color: 'orange' as const,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <AdminHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
              <p className="text-gray-600">Here's what's happening with your platform today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => (
                <StatsCard
                  key={stat.title}
                  title={stat.title}
                  value={stat.value}
                  icon={stat.icon}
                  trend={stat.trend}
                  color={stat.color}
                />
              ))}
            </div>

            {/* Recent Activity Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <div>
                      <p className="text-sm font-medium text-gray-900">User Activity #{i}</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      Active
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
