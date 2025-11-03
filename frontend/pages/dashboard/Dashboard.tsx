import { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";
import BalanceCard from "./components/BalanceCard";
import StatsCards from "./components/StatsCards";
import CryptoHoldings from "./components/CryptoHoldings";
import LivePriceMarkets from "./components/LivePriceMarkets";
import MoreServices from "./components/MoreServices";
import RightSidebar from "./components/RightSidebar";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Manage body overflow on mobile when sidebar is open
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile && isSidebarOpen) {
      // Allow scrolling on body even when sidebar overlay is present
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen bg-[#F8F8F8] pb-12 md:pb-16">
      {/* Top Navigation Bar */}
      <DashboardHeader
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isMenuOpen={isSidebarOpen}
      />

      <div className="px-4 md:px-6 lg:px-12 mt-4 md:mt-6 flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* Sidebar Navigation */}
        <div className="flex-shrink-0">
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-4 md:space-y-6">
          {/* Balance Card */}
          <BalanceCard />

          {/* Stats Cards */}
          <StatsCards />

          {/* Your Crypto Holdings */}
          <CryptoHoldings />

          {/* Live Price Markets */}
          <LivePriceMarkets />

          {/* More Coming Soon */}
          <MoreServices />
        </div>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
}
