import { Plus } from "lucide-react";

export default function CryptoHoldings() {
  return (
    <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 mb-4 md:mb-6">
        <h2 className="text-lg md:text-2xl font-medium text-black">
          My Crypto Holdings
        </h2>
        <button className="flex items-center gap-2 px-3 md:px-4 py-2 bg-black text-white rounded text-xs md:text-sm hover:bg-gray-900 transition-colors whitespace-nowrap">
          <Plus className="w-3.5 md:w-4 h-3.5 md:h-4" />
          <span>Add Crypto</span>
        </button>
      </div>

      <div className="space-y-3">
        {[
          { name: "ETH", fullName: "Ethereum", value: "₹3,82,031.29", change: "+3.14%", bgColor: "bg-gray-700" },
          { name: "BTC", fullName: "Bitcoin", value: "98,33,924.10", change: "+3.14%", bgColor: "bg-orange-500" },
          { name: "TRX", fullName: "Tron", value: "₹18.88", change: "+3.14%", bgColor: "bg-red-500" },
          { name: "USDT", fullName: "Tether USDT", value: "₹88.16", change: "+3.14%", bgColor: "bg-teal-500" },
          { name: "SOL", fullName: "Solana", value: "₹4,123,456", change: "+3.14%", bgColor: "bg-purple-500" },
        ].map((crypto) => (
          <div
            key={crypto.name}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-3 md:p-4 rounded-lg border border-[#D4D4D4] hover:border-[#3CC27B] transition-colors"
          >
            <div className="flex items-center gap-3 flex-1">
              <div className={`w-10 h-10 rounded-full ${crypto.bgColor} flex items-center justify-center text-white font-bold flex-shrink-0 text-sm`}>
                {crypto.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="font-bold text-base md:text-lg text-black">
                  {crypto.name}
                </p>
                <p className="text-xs md:text-sm text-gray-600">{crypto.fullName}</p>
              </div>
            </div>
            <div className="w-full sm:w-auto text-right">
              <p className="font-medium text-base md:text-lg text-black">
                {crypto.value}
              </p>
              <div className="inline-flex items-center px-2 py-1 bg-[#BDFDDB] rounded text-xs mt-1 sm:mt-0">
                <span className="text-black">{crypto.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
