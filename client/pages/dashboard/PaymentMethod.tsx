import { Link } from "react-router-dom";
import { Bell, ArrowLeft } from "lucide-react";

export default function PaymentMethod() {
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
            <h2 className="text-xl font-medium text-black mb-2">Choose Payment Method</h2>
            <p className="text-[#838383] text-[17px] mb-8">Select how you'd like to pay for your crypto</p>

            {/* Payment Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <PaymentOption title="UPI Payment" description="Pay Using UPI apps like Gpay, Phonepe, Paytm etc" processingTime="Instant" fees="0%" />
              <PaymentOption title="Net Banking" description="Direct Bank Transfers Via Net Banking" processingTime="2 -5 min" fees="0%" />
              <PaymentOption title="Debit / Credit Cart" description="Visa, Mastercard, Rupay Accepted" processingTime="Instant" fees="2.5%" />
              <PaymentOption title="Wallet Balance" description="User your existing wallet balance" processingTime="Instant" fees="0%" />
            </div>

            {/* Back to Order Details */}
            <Link to="/buy-crypto" className="flex items-center gap-2 text-black text-xs font-medium hover:text-[#3CC27B] transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Order Details</span>
            </Link>
          </div>
        </div>

        {/* Right Sidebar */}
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

function PaymentOption({ title, description, processingTime, fees }: any) {
  return (
    <button className="flex items-center gap-4 p-4 bg-[#F8F8F8] rounded-lg hover:bg-[#EEEEEE] transition-colors text-left w-full">
      <div className="flex-shrink-0 w-8 h-8 bg-[#3CC27B]/20 rounded-full"></div>
      
      <div className="flex-1">
        <h3 className="text-[15px] font-medium text-black leading-[33px]">{title}</h3>
        <p className="text-[14px] font-light text-black leading-[33px]">{description}</p>
        
        <div className="mt-3">
          <div className="text-xs">
            <span className="text-black font-light">Processing Time: </span>
            <span className="text-black font-normal">{processingTime}</span>
          </div>
          <div className="text-xs">
            <span className="text-black font-light">Fees: </span>
            <span className="text-black font-normal">{fees}</span>
          </div>
        </div>
      </div>
    </button>
  );
}
