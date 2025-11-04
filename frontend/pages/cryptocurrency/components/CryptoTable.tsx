import React from 'react';
import { CryptoTableRow } from './CryptoTableRow';

export interface CryptoData {
  id: string;
  logo: string;
  name: string;
  symbol: string;
  status: 'Active' | 'Inactive';
  buyRate: string;
  sellRate: string;
  change: string;
  lastUpdated: string;
}

interface CryptoTableProps {
  data: CryptoData[];
  onEdit: (id: string) => void;
}

export const CryptoTable: React.FC<CryptoTableProps> = ({ data, onEdit }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#C9C9C9]">
            <th className="py-4 px-2 text-left text-[#313131] font-roboto text-[15px] font-bold">
              Cryptocurrency
            </th>
            <th className="py-4 px-2 text-left text-[#313131] font-roboto text-[15px] font-bold">
              Status
            </th>
            <th className="py-4 px-2 text-left text-[#313131] font-roboto text-[15px] font-bold">
              Buy Rate (₹)
            </th>
            <th className="py-4 px-2 text-left text-[#313131] font-roboto text-[15px] font-bold">
              Sell Rate (₹)
            </th>
            <th className="py-4 px-2 text-left text-[#313131] font-roboto text-[15px] font-bold">
              24h Change
            </th>
            <th className="py-4 px-2 text-left text-[#313131] font-roboto text-[15px] font-bold">
              Last Updated
            </th>
            <th className="py-4 px-2 text-left text-[#313131] font-roboto text-[15px] font-bold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((crypto) => (
            <CryptoTableRow
              key={crypto.id}
              logo={crypto.logo}
              name={crypto.name}
              symbol={crypto.symbol}
              status={crypto.status}
              buyRate={crypto.buyRate}
              sellRate={crypto.sellRate}
              change={crypto.change}
              lastUpdated={crypto.lastUpdated}
              onEdit={() => onEdit(crypto.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
