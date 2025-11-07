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
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-3 md:p-4 rounded-lg border border-[#D4D4D4] hover:border-[#3CC27B] transition-colors"
          >
            <div className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                Đ
              </div>
              <div className="min-w-0">
                <p className="font-bold text-base md:text-lg text-black">
                  Doge
                </p>
                <p className="text-xs md:text-sm text-gray-600">Doge</p>
              </div>
            </div>
            <div className="w-full sm:w-auto text-right">
              <p className="font-medium text-base md:text-lg text-black">
                ₹4,123,456
              </p>
              <div className="inline-flex items-center px-2 py-1 bg-[#BDFDDB] rounded text-xs mt-1 sm:mt-0">
                <span className="text-black">+3.14%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
