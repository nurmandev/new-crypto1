import { Link } from "react-router-dom";
import {
  Bell,
  TrendingUp,
  Wallet,
  CreditCard,
  History,
  Shield,
  User,
  LogOut,
  Plus,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  EyeOff,
} from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="min-h-screen bg-[#F8F8F8] pb-12">
      {/* Top Navigation Bar */}
      <div className="bg-white rounded-[10px] mx-4 lg:mx-12 mt-6 px-6 py-4 flex items-center justify-between shadow-sm">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-white font-bold">
            U
          </div>
          <span className="text-xl lg:text-2xl font-bold text-gray-900">
            USDTMPAY
          </span>
        </Link>

        <h1 className="text-2xl lg:text-3xl font-['Russo_One'] text-black hidden md:block">
          Dashboard
        </h1>

        <div className="flex items-center gap-3 lg:gap-4">
          <Link
            to="/"
            className="px-6 lg:px-9 py-2 bg-[#161616] text-white text-sm lg:text-[15px] font-medium rounded-md hover:bg-black/80 transition-colors"
          >
            Go to Home
          </Link>
          <div className="w-10 h-10 rounded-full bg-[#D9D9D9] cursor-pointer flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </div>
          <div className="relative cursor-pointer">
            <Bell className="w-5 h-5 text-[#C7C7C7]" />
            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#3CC27B] rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-12 mt-6 flex flex-col lg:flex-row gap-6">
        {/* Sidebar Navigation */}
        <div className="w-full lg:w-64 bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="bg-[#3CC27B] px-6 py-4 flex items-center gap-3 text-white">
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <path
                d="M0 13.2857V5.57143C0 5.3 0.0621248 5.04286 0.186375 4.8C0.310625 4.55714 0.481833 4.35714 0.7 4.2L5.95 0.342857C6.25625 0.114286 6.60625 0 7 0C7.39375 0 7.74375 0.114286 8.05 0.342857L13.3 4.2C13.5187 4.35714 13.6902 4.55714 13.8145 4.8C13.9387 5.04286 14.0006 5.3 14 5.57143V13.2857C14 13.7571 13.8285 14.1609 13.4855 14.4969C13.1425 14.8329 12.7307 15.0006 12.25 15H9.625C9.37708 15 9.16941 14.9177 9.002 14.7531C8.83458 14.5886 8.75058 14.3851 8.75 14.1429V9.85714C8.75 9.61428 8.666 9.41086 8.498 9.24686C8.33 9.08286 8.12233 9.00057 7.875 9H6.125C5.87708 9 5.66942 9.08228 5.502 9.24686C5.33458 9.41143 5.25058 9.61486 5.25 9.85714V14.1429C5.25 14.3857 5.166 14.5894 4.998 14.754C4.83 14.9186 4.62233 15.0006 4.375 15H1.75C1.26875 15 0.856916 14.8323 0.5145 14.4969C0.172083 14.1614 0.000583333 13.7577 0 13.2857Z"
                fill="white"
              />
            </svg>
            <span className="text-lg font-semibold">Dashboard</span>
          </div>

          <nav className="p-6 space-y-7">
            <Link
              to="/buy-crypto"
              className="flex items-center gap-3 text-black hover:text-[#3CC27B] transition-colors"
            >
              <TrendingUp className="w-[18px] h-[18px] flex-shrink-0" />
              <span className="text-lg">Buy / Sell Crypto</span>
            </Link>

            <div className="flex items-center gap-3 text-black hover:text-[#3CC27B] transition-colors cursor-pointer">
              <Wallet className="w-[18px] h-[18px] flex-shrink-0" />
              <span className="text-lg">Deposit/Withdraw</span>
            </div>

            <div className="flex items-center gap-3 text-black hover:text-[#3CC27B] transition-colors cursor-pointer">
              <Wallet className="w-[18px] h-[18px] flex-shrink-0" />
              <span className="text-lg">My Wallet</span>
            </div>

            <div className="flex items-center gap-3 text-black hover:text-[#3CC27B] transition-colors cursor-pointer">
              <CreditCard className="w-[18px] h-[18px] flex-shrink-0" />
              <span className="text-lg">Payment Methods</span>
            </div>

            <div className="flex items-center gap-3 text-black hover:text-[#3CC27B] transition-colors cursor-pointer">
              <History className="w-[18px] h-[18px] flex-shrink-0" />
              <span className="text-lg">History</span>
            </div>

            <div className="flex items-center gap-3 text-black hover:text-[#3CC27B] transition-colors cursor-pointer">
              <Shield className="w-[18px] h-[18px] flex-shrink-0" />
              <span className="text-lg">Wallet Security</span>
            </div>

            <div className="flex items-center gap-3 text-black hover:text-[#3CC27B] transition-colors cursor-pointer">
              <User className="w-[18px] h-[18px] flex-shrink-0" />
              <span className="text-lg">My Profile</span>
            </div>

            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 bg-[#EBEBEB] rounded text-black text-[15px] hover:bg-gray-300 transition-colors"
            >
              <span>Logout</span>
              <LogOut className="w-4 h-4" />
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Balance Card */}
          <div className="bg-gradient-to-r from-[#3CC27B] to-[#00602D] rounded-[10px] p-6 lg:p-8 text-white shadow-lg">
            <div className="mb-6">
              <p className="text-xl mb-2">Your Balance</p>
              <div className="flex items-center gap-3">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  {showBalance ? "₹5,656.6" : "₹••••••"}
                </h2>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  {showBalance ? (
                    <Eye className="w-5 h-5" />
                  ) : (
                    <EyeOff className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-24 rounded-full border-[7px] border-[#3CC27B] bg-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                  <Plus className="w-10 h-10 text-[#3CC27B]" strokeWidth={3} />
                </div>
                <span className="text-white font-medium text-center">
                  Add Balance
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-24 rounded-full border-[7px] border-[#3CC27B] bg-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                  <DollarSign
                    className="w-10 h-10 text-[#3CC27B]"
                    strokeWidth={3}
                  />
                </div>
                <span className="text-white font-medium text-center">
                  Cashout
                </span>
              </div>

              <Link
                to="/buy-crypto"
                className="flex flex-col items-center gap-2"
              >
                <div className="w-24 h-24 rounded-full border-[7px] border-[#3CC27B] bg-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                  <TrendingUp
                    className="w-10 h-10 text-[#3CC27B]"
                    strokeWidth={2.5}
                  />
                </div>
                <span className="text-white font-medium text-center">Buy</span>
              </Link>

              <Link
                to="/sell-crypto"
                className="flex flex-col items-center gap-2"
              >
                <div className="w-24 h-24 rounded-full border-[7px] border-[#3CC27B] bg-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                  <TrendingUp
                    className="w-10 h-10 text-[#3CC27B] rotate-180"
                    strokeWidth={2.5}
                  />
                </div>
                <span className="text-white font-medium text-center">Sell</span>
              </Link>

              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-24 rounded-full border-[7px] border-[#3CC27B] bg-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                  <Wallet
                    className="w-10 h-10 text-[#3CC27B]"
                    strokeWidth={2}
                  />
                </div>
                <span className="text-white font-medium text-center">
                  Wallet
                </span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg border border-[#D4D4D4] p-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-700 mb-1">Available to Trade</p>
                <p className="text-lg font-medium text-black">₹25,430.00</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-xl">₹</span>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-[#D4D4D4] p-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-700 mb-1">Today's P&L</p>
                <p className="text-lg font-medium text-[#3CC27B]">+₹2,340</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#3CC27B]/20 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-[#3CC27B]" />
              </div>
            </div>

            <div className="bg-white rounded-lg border border-[#D4D4D4] p-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-700 mb-1">Crypto Holdings</p>
                <p className="text-lg font-medium text-black">20 Coins</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Your Crypto Holdings */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-medium text-black">
                Your Crypto Holdings
              </h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded text-sm hover:bg-gray-900 transition-colors">
                <Plus className="w-4 h-4" />
                <span>Add Crypto</span>
              </button>
            </div>

            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between p-4 rounded-lg border border-[#D4D4D4] hover:border-[#3CC27B] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                      Đ
                    </div>
                    <div>
                      <p className="font-bold text-lg text-black">Doge</p>
                      <p className="text-sm text-gray-600">Doge</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-lg text-black">₹4,123,456</p>
                    <div className="inline-flex items-center px-2 py-1 bg-[#BDFDDB] rounded text-xs">
                      <span className="text-black">+3.14%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Price Markets */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-medium text-black">
                Live Price Markets
              </h2>
              <button className="px-4 py-2 bg-black text-white rounded text-sm hover:bg-gray-900 transition-colors">
                See All Charts
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* ETH Chart */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold">
                      E
                    </div>
                    <div>
                      <p className="font-bold text-lg text-black">ETH</p>
                      <p className="text-sm text-gray-600">Ethereum</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-lg text-black">₹234,567</p>
                    <div className="inline-flex items-center px-2 py-1 bg-[#FDBDBD] rounded text-xs">
                      <span className="text-black">-3.14%</span>
                    </div>
                  </div>
                </div>
                <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200">
                  <svg
                    className="w-full h-full p-4"
                    viewBox="0 0 300 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,50 Q75,10 150,40 T300,30"
                      fill="none"
                      stroke="#FA1818"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>9:00</span>
                  <span>10:00</span>
                  <span>11:00</span>
                  <span>12:00</span>
                  <span>1:00</span>
                  <span>2:00</span>
                  <span>3:00</span>
                </div>
              </div>

              {/* SOL Chart */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                      S
                    </div>
                    <div>
                      <p className="font-bold text-lg text-black">Sol</p>
                      <p className="text-sm text-gray-600">Solana</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-lg text-black">₹4,123,456</p>
                    <div className="inline-flex items-center px-2 py-1 bg-[#BDFDDB] rounded text-xs">
                      <span className="text-black">+3.14%</span>
                    </div>
                  </div>
                </div>
                <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200">
                  <svg
                    className="w-full h-full p-4"
                    viewBox="0 0 300 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,80 Q75,60 150,70 T300,40"
                      fill="none"
                      stroke="#3CC27B"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>9:00</span>
                  <span>10:00</span>
                  <span>11:00</span>
                  <span>12:00</span>
                  <span>1:00</span>
                  <span>2:00</span>
                  <span>3:00</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-[#3CC27B]"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            </div>
          </div>

          {/* More Coming Soon */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-medium text-black mb-6">
              More Coming Soon
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: "Recharge", subtitle: "Mobile & DTH", icon: "📱" },
                { name: "Bill Pay", subtitle: "Utility Bills", icon: "📄" },
                {
                  name: "Bank Transfer",
                  subtitle: "Direct Transfer",
                  icon: "🏦",
                },
                { name: "Savings", subtitle: "Investment Plans", icon: "💰" },
                {
                  name: "Online Transfer",
                  subtitle: "P2P Payments",
                  icon: "🔄",
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 rounded-full border-[7px] border-[#3CC27B] bg-white flex items-center justify-center shadow-lg mb-3">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <p className="font-medium text-gray-400 mb-1">
                    {service.name}
                  </p>
                  <p className="text-sm text-gray-400 mb-2">
                    {service.subtitle}
                  </p>
                  <div className="px-3 py-1 bg-[#FFE9CF] rounded-full">
                    <span className="text-xs text-gray-400">coming soon</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[360px] space-y-6">
          {/* Referral Status */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-medium text-black mb-4">
              Referral Status
            </h3>

            <div className="flex items-center justify-center mb-6">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="20"
                    strokeDasharray="75 251"
                    transform="rotate(-90 50 50)"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="20"
                    strokeDasharray="63 251"
                    strokeDashoffset="-75"
                    transform="rotate(-90 50 50)"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="20"
                    strokeDasharray="113 251"
                    strokeDashoffset="-138"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-black">14</p>
                    <p className="text-xs text-gray-500">Total</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#10B981] rounded-sm"></div>
                  <span className="text-sm text-black">Successful</span>
                </div>
                <span className="text-sm font-medium text-black">8</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#F59E0B] rounded-sm"></div>
                  <span className="text-sm text-black">Pending</span>
                </div>
                <span className="text-sm font-medium text-black">4</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#EF4444] rounded-sm"></div>
                  <span className="text-sm text-black">Failed</span>
                </div>
                <span className="text-sm font-medium text-black">2</span>
              </div>
            </div>
          </div>

          {/* Invite Friends */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#3CC27B] flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-xl font-medium text-black">
                Invite Friends and Earn
              </h3>
            </div>

            <p className="text-xs text-gray-600 mb-4">
              Earn ₹500 Fix Bonus on Each referal
            </p>

            <div className="flex items-center justify-between p-4 bg-[#FAFAFA] rounded-lg border border-[#DBDBDB] mb-4">
              <div>
                <p className="text-sm font-medium text-black mb-1">
                  Your Earnings
                </p>
                <p className="text-lg font-bold text-[#3CC27B]">₹12,450</p>
              </div>
              <button className="px-4 py-2 bg-black text-white rounded text-sm hover:bg-gray-900 transition-colors">
                Refer Now
              </button>
            </div>

            <h4 className="text-xl font-medium text-black mb-3">
              Recent Referrals
            </h4>

            <div className="space-y-2">
              {[
                {
                  status: "Completed",
                  color: "bg-[#BDFDDB]",
                  textColor: "text-[#1C5C3A]",
                },
                {
                  status: "Pending",
                  color: "bg-[#FBD25F]/65",
                  textColor: "text-black",
                },
                {
                  status: "Completed",
                  color: "bg-[#BDFDDB]",
                  textColor: "text-[#1C5C3A]",
                },
                {
                  status: "Completed",
                  color: "bg-[#BDFDDB]",
                  textColor: "text-[#1C5C3A]",
                },
              ].map((ref, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-[#F6F6F6] rounded-lg"
                >
                  <div className="flex-1">
                    <p className="text-sm font-bold text-black">Sarah Smith</p>
                    <p className="text-xs text-gray-600">s***@email.com</p>
                  </div>
                  <div
                    className={`px-3 py-1 ${ref.color} rounded text-xs ${ref.textColor} mr-2`}
                  >
                    {ref.status}
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium text-black">₹500</p>
                    <p className="text-xs text-gray-600">2024-01-18</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-[#3CC27B]/10 rounded-lg p-6">
            <h4 className="text-xl font-medium text-black mb-3">
              How It Works:
            </h4>
            <ul className="space-y-2 text-sm text-black">
              <li className="leading-relaxed">
                • Your friend signs up using your link
              </li>
              <li className="leading-relaxed">• They get ₹150 signup bonus</li>
              <li className="leading-relaxed">
                • You earn ₹500 when they verify their account
              </li>
              <li className="leading-relaxed">
                • Bonuses are credited within 24 hours
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
