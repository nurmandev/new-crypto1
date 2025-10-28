import { Link } from "react-router-dom";
import { Bell, Plus, TrendingUp, TrendingDown } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Top Navigation Bar */}
      <div className="bg-white rounded-[10px] mx-4 lg:mx-12 mt-6 px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg"></div>
          <span className="text-2xl font-bold text-gray-900">USDTMPAY</span>
        </Link>

        <h1 className="text-3xl font-['Russo_One'] text-black hidden lg:block">
          Dashboard
        </h1>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="px-9 py-2 bg-[#161616] text-white text-[15px] font-medium rounded-md hover:bg-black/80 transition-colors"
          >
            Go to Home
          </Link>
          <div className="w-10 h-10 rounded-full bg-[#D9D9D9] cursor-pointer"></div>
          <div className="relative">
            <Bell className="w-5 h-5 text-[#C7C7C7]" />
            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#3CC27B] rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-12 mt-6 flex flex-col lg:flex-row gap-6">
        {/* Sidebar Navigation */}
        <div className="w-full lg:w-64 bg-white rounded-lg overflow-hidden">
          <div className="bg-[#3CC27B] px-6 py-4 flex items-center gap-3 text-white">
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 13.2857V5.57143C0 5.3 0.0621248 5.04286 0.186375 4.8C0.310625 4.55714 0.481833 4.35714 0.7 4.2L5.95 0.342857C6.25625 0.114286 6.60625 0 7 0C7.39375 0 7.74375 0.114286 8.05 0.342857L13.3 4.2C13.5187 4.35714 13.6902 4.55714 13.8145 4.8C13.9387 5.04286 14.0006 5.3 14 5.57143V13.2857C14 13.7571 13.8285 14.1609 13.4855 14.4969C13.1425 14.8329 12.7307 15.0006 12.25 15H9.625C9.37708 15 9.16941 14.9177 9.002 14.7531C8.83458 14.5886 8.75058 14.3851 8.75 14.1429V9.85714C8.75 9.61428 8.666 9.41086 8.498 9.24686C8.33 9.08286 8.12233 9.00057 7.875 9H6.125C5.87708 9 5.66942 9.08228 5.502 9.24686C5.33458 9.41143 5.25058 9.61486 5.25 9.85714V14.1429C5.25 14.3857 5.166 14.5894 4.998 14.754C4.83 14.9186 4.62233 15.0006 4.375 15H1.75C1.26875 15 0.856916 14.8323 0.5145 14.4969C0.172083 14.1614 0.000583333 13.7577 0 13.2857Z" fill="white"/>
            </svg>
            <span className="text-lg font-semibold">Dashboard</span>
          </div>

          <nav className="p-6 space-y-7">
            <Link to="/buy-crypto" className="flex items-center gap-3 text-black cursor-pointer hover:text-[#3CC27B] transition-colors">
              <TrendingUp className="w-[18px] h-[18px]" />
              <span className="text-lg">Buy / Sell Crypto</span>
            </Link>

            <div className="flex items-center gap-3 text-black cursor-pointer hover:text-[#3CC27B] transition-colors">
              <span className="text-lg">Deposit/Withdraw</span>
            </div>

            <div className="flex items-center gap-3 text-black cursor-pointer hover:text-[#3CC27B] transition-colors">
              <span className="text-lg">My Wallet</span>
            </div>

            <div className="flex items-center gap-3 text-black cursor-pointer hover:text-[#3CC27B] transition-colors">
              <span className="text-lg">Payment Methods</span>
            </div>

            <div className="flex items-center gap-3 text-black cursor-pointer hover:text-[#3CC27B] transition-colors">
              <span className="text-lg">History</span>
            </div>

            <div className="flex items-center gap-3 text-black cursor-pointer hover:text-[#3CC27B] transition-colors">
              <span className="text-lg">Wallet Security</span>
            </div>

            <div className="flex items-center gap-3 text-black cursor-pointer hover:text-[#3CC27B] transition-colors">
              <span className="text-lg">My Profile</span>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 bg-[#EBEBEB] rounded text-black text-[15px]">
              <span>Logout</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Balance Card */}
          <div className="bg-gradient-to-r from-[#3CC27B] to-[#00602D] rounded-[10px] p-8 text-white">
            <div className="mb-8">
              <p className="text-xl mb-2">Your Balance</p>
              <h2 className="text-5xl font-bold">₹5,656.6</h2>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="bg-white rounded-[10px] p-8">
            <h2 className="text-2xl font-bold text-black mb-4">Welcome to Dashboard!</h2>
            <p className="text-gray-600">Select an option from the sidebar to get started with your crypto trading journey.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
