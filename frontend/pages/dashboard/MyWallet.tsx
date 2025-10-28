import { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";

export default function MyWallet() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] pb-12 md:pb-16">
      {/* Top Navigation Bar */}
      <DashboardHeader
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isMenuOpen={isSidebarOpen}
      />

      <div className="px-4 md:px-6 lg:px-12 mt-4 md:mt-6 flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* Sidebar Navigation */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        {/* Main Content */}
        <div className="flex-1 space-y-4 md:space-y-6">
          <div className="bg-white rounded-lg p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">
              My Wallet
            </h1>
            <p className="text-gray-600">
              Your wallet page content will be added here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
