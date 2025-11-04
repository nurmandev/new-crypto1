import React from "react";

export interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  logo: string;
  status: "Active" | "Inactive";
  buyRate: string;
  sellRate: string;
  change24h: string;
  lastUpdated: string;
}

interface CryptoTableProps {
  data: CryptoData[];
  onEdit: (crypto: CryptoData) => void;
}

export const CryptoTable: React.FC<CryptoTableProps> = ({ data, onEdit }) => {
  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#C9C9C9]">
            <th className="text-left text-[15px] font-bold text-[#313131] pb-4 font-roboto">
              Cryptocurrency
            </th>
            <th className="text-left text-[15px] font-bold text-[#313131] pb-4 font-roboto">
              Status
            </th>
            <th className="text-left text-[15px] font-bold text-[#313131] pb-4 font-roboto">
              Buy Rate (₹)
            </th>
            <th className="text-left text-[15px] font-bold text-[#313131] pb-4 font-roboto">
              Sell Rate (₹)
            </th>
            <th className="text-left text-[15px] font-bold text-[#313131] pb-4 font-roboto">
              24h Change
            </th>
            <th className="text-left text-[15px] font-bold text-[#313131] pb-4 font-roboto">
              Last Updated
            </th>
            <th className="text-right text-[15px] font-bold text-[#313131] pb-4 font-roboto">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((crypto, index) => (
            <tr
              key={crypto.id}
              className={`border-b border-[#C9C9C9] ${
                index === data.length - 1 ? "border-none" : ""
              }`}
            >
              <td className="py-6">
                <div className="flex items-center gap-3">
                  <div className="w-[38px] h-[38px] rounded-full overflow-hidden bg-gray-200">
                    <img
                      src={crypto.logo}
                      alt={crypto.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[17px] font-semibold text-black font-roboto">
                      {crypto.name}
                    </div>
                    <div className="text-[15px] font-light text-black font-roboto">
                      {crypto.symbol}
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-6">
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded text-[10px] font-normal font-roboto ${
                    crypto.status === "Active"
                      ? "bg-[#BDFDDB] text-[#1C5C3A]"
                      : "bg-[#FBD25F]/65 text-black"
                  }`}
                >
                  {crypto.status}
                </span>
              </td>
              <td className="py-6 text-[15px] font-normal text-black font-roboto">
                {crypto.buyRate}
              </td>
              <td className="py-6 text-[15px] font-normal text-black font-roboto">
                {crypto.sellRate}
              </td>
              <td className="py-6 text-[15px] font-normal text-[#3CC27B] font-roboto">
                {crypto.change24h}
              </td>
              <td className="py-6 text-[15px] font-light text-black font-roboto">
                {crypto.lastUpdated}
              </td>
              <td className="py-6 text-right">
                <button
                  onClick={() => onEdit(crypto)}
                  className="inline-flex items-center justify-center w-[18px] h-[18px] hover:opacity-70 transition-opacity"
                  aria-label="Edit"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1565 0L18.0004 2.84387L15.8324 5.0128L12.9885 2.16893L15.1565 0ZM4.74023 13.26H7.58414L14.492 6.35226L11.6481 3.50839L4.74023 10.4161V13.26Z"
                      fill="black"
                    />
                    <path
                      d="M15.1675 16.1038H4.88961C4.86497 16.1038 4.83937 16.1133 4.81473 16.1133C4.78344 16.1133 4.75216 16.1048 4.71993 16.1038H1.89593V2.83244H8.38667L10.2826 0.936523H1.89593C0.850326 0.936523 0 1.78589 0 2.83244V16.1038C0 17.1504 0.850326 17.9997 1.89593 17.9997H15.1675C15.6703 17.9997 16.1525 17.8 16.5081 17.4444C16.8637 17.0889 17.0634 16.6067 17.0634 16.1038V7.88694L15.1675 9.78286V16.1038Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
