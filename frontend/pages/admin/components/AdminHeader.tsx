import React from 'react';
import { Menu, LogOut, Settings, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AdminHeaderProps {
  onMenuClick?: () => void;
  adminName?: string;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({
  onMenuClick,
  adminName = 'Admin',
}) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          <Settings className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">{adminName}</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
