import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";
import { Copy } from "lucide-react";

export default function PurchaseSuccess() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const transactions = [
    {
      title: "Buy BTC",
      date: "2024-12-20 14:30",
      address: "0x1234...5678",
      amount: "0.012 BTC",
      fiat: "₹52,345",
      status: "Completed",
    },
    {
      title: "Buy BTC",
      date: "2024-12-20 14:30",
      address: "0x1234...5678",
      amount: "0.012 BTC",
      fiat: "₹52,345",
      status: "Completed",
    },
    {
      title: "Buy BTC",
      date: "2024-12-20 14:30",
      address: "0x1234...5678",
      amount: "0.012 BTC",
      fiat: "₹52,345",
      status: "Completed",
    },
    {
      title: "Buy BTC",
      date: "2024-12-20 14:30",
      address: "0x1234...5678",
      amount: "0.012 BTC",
      fiat: "₹52,345",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F8] pb-12 md:pb-16">
      {/* Top Navigation Bar */}
      <DashboardHeader
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isMenuOpen={isSidebarOpen}
      />

      <div className="px-4 md:px-6 lg:px-12 mt-4 md:mt-6 flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main Content */}
        <div className="flex-1 space-y-4 md:space-y-6 max-w-[843px]">
          <div className="bg-white rounded-[10px] p-6 md:p-8 lg:p-10 shadow-sm">
            {/* Success Icon */}
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="w-11 h-11 rounded-full bg-[rgba(60,194,123,0.31)] flex items-center justify-center p-2.5">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5 25C14.1415 25 15.767 24.6767 17.2835 24.0485C18.8001 23.4203 20.1781 22.4996 21.3388 21.3388C22.4996 20.1781 23.4203 18.8001 24.0485 17.2835C24.6767 15.767 25 14.1415 25 12.5C25 10.8585 24.6767 9.233 24.0485 7.7165C23.4203 6.19989 22.4996 4.82193 21.3388 3.66116C20.1781 2.50039 18.8001 1.57969 17.2835 0.951506C15.767 0.323322 14.1415 0 12.5 0C9.18479 0 6.00537 1.31696 3.66116 3.66116C1.31696 6.00537 0 9.18479 0 12.5C0 15.8152 1.31696 18.9946 3.66116 21.3388C6.00537 23.683 9.18479 25 12.5 25ZM12.1778 17.5556L19.1222 9.22222L16.9889 7.44444L11.0167 14.6097L7.92639 11.5181L5.9625 13.4819L10.1292 17.6486L11.2042 18.7236L12.1778 17.5556Z"
                    fill="#3CC27B"
                  />
                </svg>
              </div>
            </div>

            {/* Success Message */}
            <h2 className="text-lg md:text-xl lg:text-[20px] font-semibold text-black text-center mb-1 md:mb-2">
              Purchase Successful!
            </h2>
            <p className="text-[#838383] text-sm md:text-base lg:text-[17px] font-normal text-center mb-6 md:mb-8">
              Use your existing INR wallet balance
            </p>

            {/* Amount Display */}
            <div className="text-center mb-6 md:mb-8 lg:mb-10">
              <h1 className="text-3xl md:text-4xl lg:text-[50px] font-bold text-black mb-2">
                +0.000008500 ETH
              </h1>
              <p className="text-lg md:text-xl lg:text-[20px] font-normal text-black">
                ≈ ₹4
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-[0.7px] bg-[#EDEDED] mb-6 md:mb-8" />

            {/* Two Column Layout - Transaction Details & Financial Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
              {/* Left Column - Transaction Details */}
              <div className="space-y-4 md:space-y-5">
                <h3 className="text-sm md:text-[15px] font-medium text-black leading-[33px]">
                  Transaction Details:
                </h3>

                <div className="space-y-3">
                  <DetailRow
                    label="Transaction ID:"
                    value="CT17565429468713XMCHMUIN"
                    showCopy
                  />
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-xs md:text-[14px] font-light text-black flex-shrink-0">
                      Transaction Type:
                    </span>
                    <div className="px-2.5 py-1 bg-[#F6F6F6] rounded-[23px]">
                      <span className="text-[8px] font-normal text-black">
                        Sale
                      </span>
                    </div>
                  </div>
                  <DetailRow label="Payment Method:" value="wallet_credit" />
                </div>
              </div>

              {/* Right Column - Financial Breakdown */}
              <div className="space-y-4 md:space-y-5">
                <h3 className="text-sm md:text-[15px] font-medium text-black leading-[33px]">
                  Financial Breakdown
                </h3>

                <div className="space-y-3">
                  <DetailRow label="Price per ADA:" value="₹45.67" />
                  <DetailRow label="Amount:" value="0.08758485 ADA" />
                  <DetailRow label="Subtotal:" value="₹4" />
                  <DetailRow label="Trading Fee:" value="₹0.00" />

                  {/* Divider */}
                  <div className="w-full h-[0.7px] bg-[#EDEDED] my-3" />

                  <div className="flex justify-between items-center gap-4">
                    <span className="text-xs md:text-[14px] font-semibold text-black">
                      Total Paid:
                    </span>
                    <span className="text-xs md:text-[14px] font-medium text-[#3CC27B]">
                      ₹3,681.50
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Notification Box */}
            <div className="bg-[#EDF9F3] border-l-2 border-[#3CC27B] rounded-[13px] p-4 md:p-6 lg:p-8">
              <h4 className="text-sm md:text-[15px] font-medium text-black leading-[33px] mb-2">
                Transaction Details
              </h4>
              <p className="text-xs md:text-[13px] font-light text-black leading-[25px]">
                Your INR has been credited to your wallet. The transaction is
                complete and verified.
              </p>
            </div>
          </div>
        </div>

        {/* Recent Transactions Sidebar */}
        <div className="w-full lg:w-[368px] space-y-3 md:space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base md:text-[17px] font-medium text-black text-center flex-1 lg:text-left">
              Recent Transactions
            </h3>
            <button className="px-2 md:px-[10px] py-1 bg-black text-white rounded text-xs hover:bg-gray-900 transition-colors whitespace-nowrap">
              view all
            </button>
          </div>

          {/* Transaction Cards */}
          <div className="space-y-3">
            {transactions.map((transaction, index) => (
              <div
                key={index}
                className="bg-white rounded-[5px] border-[0.5px] border-[#D9D9D9] p-3 md:p-[13px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-[50px]"
              >
                {/* Left Section */}
                <div className="flex-shrink-0 min-w-0">
                  <h4 className="text-sm md:text-base font-bold text-black mb-1 md:mb-[7px]">
                    {transaction.title}
                  </h4>
                  <p className="text-xs font-light text-black mb-1 md:mb-[6px]">
                    {transaction.date}
                  </p>
                  <p className="text-xs font-light text-black">
                    {transaction.address}
                  </p>
                </div>

                {/* Middle - Status Badge */}
                <div className="flex items-center justify-start sm:justify-center flex-shrink-0">
                  <div className="px-[10px] py-[5px] bg-[#BDFDDB] rounded flex items-center justify-center">
                    <span className="text-[10px] font-normal text-[#1C5C3A]">
                      {transaction.status}
                    </span>
                  </div>
                </div>

                {/* Right Section - Amount */}
                <div className="text-left sm:text-right flex-shrink-0 w-full sm:w-auto">
                  <p className="text-base md:text-[17px] font-medium text-black">
                    {transaction.amount}
                  </p>
                  <p className="text-xs font-light text-black text-right">
                    {transaction.fiat}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface DetailRowProps {
  label: string;
  value: string;
  showCopy?: boolean;
}

function DetailRow({ label, value, showCopy = false }: DetailRowProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="flex justify-between items-start gap-4">
      <span className="text-xs md:text-[14px] font-light text-black flex-shrink-0">
        {label}
      </span>
      <div className="flex items-center gap-2">
        <span className="text-xs md:text-[14px] font-medium text-black text-right break-all">
          {value}
        </span>
        {showCopy && (
          <button
            onClick={handleCopy}
            className="flex-shrink-0 p-1 hover:bg-gray-100 rounded transition-colors"
            aria-label="Copy transaction ID"
          >
            <Copy className="w-3.5 h-3.5 text-gray-600" />
          </button>
        )}
      </div>
    </div>
  );
}
