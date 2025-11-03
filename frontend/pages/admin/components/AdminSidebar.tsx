import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  TrendingUp,
  Settings,
  FileText,
  Shield,
  X,
} from 'lucide-react';

interface AdminSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: Users, label: 'Users', path: '/admin/users' },
  { icon: TrendingUp, label: 'Analytics', path: '/admin/analytics' },
  { icon: FileText, label: 'Reports', path: '/admin/reports' },
  { icon: Shield, label: 'Security', path: '/admin/security' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' },
];

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ isOpen = true, onClose }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static left-0 top-0 h-screen w-64 bg-gray-900 text-white transition-all duration-300 z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          <div className="text-xl font-bold">Admin</div>
          <button onClick={onClose} className="lg:hidden">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map(({ icon: Icon, label, path }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === path
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};
