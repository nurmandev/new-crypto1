import { Link } from "react-router-dom";
import { Bell, ArrowUpDown, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function BuyCrypto() {
  const [selectedCrypto, setSelectedCrypto] = useState("Cardano (ADA)");
  const [youPayAmount, setYouPayAmount] = useState("300.00");
  const [youReceiveAmount, setYouReceiveAmount] = useState("10.71428571");

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Top Navigation Bar */}
      <div className="bg-white rounded-[10px] mx-4 lg:mx-12 mt-6 px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg"></div>
          <span className="text-2xl font-bold text-gray-900">USDTMPAY</span>
        </Link>

        <h1 className="text-3xl font-['Russo_One'] text-black hidden lg:block">Dashboard</h1>

        <div className="flex items-center gap-4">
          <Link to="/" className="px-9 py-2 bg-[#161616] text-white text-[15px] font-medium rounded-md hover:bg-black/80 transition-colors">
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
        {/* Sidebar */}
        <div className="w-full lg:w-64 bg-white rounded-lg overflow-hidden">
          <Link to="/dashboard" className="block px-6 py-4 flex items-center gap-3 text-black hover:bg-gray-50 transition-colors">
            <span className="text-lg">Dashboard</span>
          </Link>

          <div className="bg-[#3CC27B] px-6 py-4 flex items-center gap-3 text-white">
            <span className="text-lg font-semibold">Buy / Sell Crypto</span>
          </div>

          <nav className="p-6 space-y-7">
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
          <div className="bg-white rounded-[10px] p-8">
            {/* Buy/Sell Toggle */}
            <div className="relative mb-6">
              <div className="w-full h-[51px] bg-[#F0F0F0] rounded-md"></div>
              <div className="absolute top-1 left-1 w-[calc(50%-4px)] h-[43px] bg-white rounded"></div>
              <div className="absolute inset-0 flex">
                <button className="flex-1 text-xl font-medium text-gray-900">Buy Crypto</button>
                <Link to="/sell-crypto" className="flex-1 flex items-center justify-center text-xl font-medium text-gray-900">
                  Sell Crypto
                </Link>
              </div>
            </div>

            <p className="text-[#838383] text-center text-[17px] mb-8">Exchange INR for cryptocurrency instantly</p>

            {/* Select Cryptocurrency */}
            <div className="mb-6">
              <label className="block text-[17px] font-medium text-black mb-3">Select Cryptocurrency</label>
              <div className="w-full h-[51px] bg-[#F0F0F0] rounded-md px-7 flex items-center justify-between">
                <span className="text-[13px] font-medium text-black">{selectedCrypto}</span>
                <ChevronDown className="w-3 h-3 text-black" />
              </div>
            </div>

            {/* You Pay / You Receive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 relative">
              <div>
                <label className="block text-[17px] font-medium text-black mb-3">You Pay</label>
                <div className="relative">
                  <input
                    type="text"
                    value={youPayAmount}
                    onChange={(e) => setYouPayAmount(e.target.value)}
                    className="w-full h-[51px] bg-[#F0F0F0] border border-[#CACACA] rounded-md px-7 text-[15px] font-bold text-[#8E8E8E]"
                  />
                  <span className="absolute right-7 top-1/2 -translate-y-1/2 text-[13px] text-[#717171]">INR</span>
                </div>
              </div>

              {/* Swap Button */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                <button className="w-11 h-11 rounded-full bg-gradient-to-br from-[#3CC27B] to-[#1C5C3A] flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
                  <ArrowUpDown className="w-5 h-5 text-white" />
                </button>
              </div>

              <div>
                <label className="block text-[17px] font-medium text-black mb-3">You Receive</label>
                <div className="relative">
                  <input
                    type="text"
                    value={youReceiveAmount}
                    onChange={(e) => setYouReceiveAmount(e.target.value)}
                    className="w-full h-[51px] bg-[#F0F0F0] border border-[#CACACA] rounded-md px-7 text-[15px] font-bold text-[#8E8E8E]"
                  />
                  <span className="absolute right-7 top-1/2 -translate-y-1/2 text-[13px] text-[#717171]">ADA</span>
                </div>
              </div>
            </div>

            <p className="text-[#838383] text-center text-[17px] mb-8">1 ADA = ₹28</p>

            {/* Continue Button */}
            <Link to="/payment-method" className="w-full flex items-center justify-center gap-2 bg-black text-white py-4 rounded-md border border-[#C3C3C3] hover:bg-black/90 transition-colors mb-8">
              <span className="text-[15px] font-medium">Continue To Payment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Purchase Summary */}
            <div className="border-l-2 border-[#3CC27B] bg-[#3CC27B]/10 rounded-[10px] p-6">
              <h3 className="text-[15px] font-medium text-black mb-6">Purchase Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[14px] text-black font-light">Cryptocurrency:</span>
                  <span className="text-[14px] text-black font-medium">Ethereum (ETH)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[14px] text-black font-light">Crypto Amount:</span>
                  <span className="text-[14px] text-black font-medium">0.02000000 ETH</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[14px] text-black font-light">Exchange Rate:</span>
                  <span className="text-[14px] text-black font-medium">₹1,85,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[14px] text-black font-light">Trading Fee (0.5%):</span>
                  <span className="text-[14px] text-black font-medium">₹18.50</span>
                </div>
                <div className="border-t border-[#EDEDED] pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[14px] text-black font-light">Total To Pay</span>
                    <span className="text-[14px] text-[#3CC27B] font-medium">₹3,681.50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Recent Transactions */}
        <div className="w-full lg:w-[368px] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[17px] font-medium text-black">Recent Transactions</h3>
            <button className="px-3 py-1 bg-black text-white rounded text-xs">view all</button>
          </div>

          <div className="space-y-3">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg border border-[#D9D9D9] p-4">
                <p className="text-base font-bold text-black">Buy BTC</p>
                <p className="text-xs text-black font-light mt-1">2024-12-20 14:30</p>
                <p className="text-xs text-black font-light">0x1234...5678</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
