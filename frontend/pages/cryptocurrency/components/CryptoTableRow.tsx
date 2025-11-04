import React from 'react';

interface CryptoTableRowProps {
  logo: string;
  name: string;
  symbol: string;
  status: 'Active' | 'Inactive';
  buyRate: string;
  sellRate: string;
  change: string;
  lastUpdated: string;
  onEdit: () => void;
}

export const CryptoTableRow: React.FC<CryptoTableRowProps> = ({
  logo,
  name,
  symbol,
  status,
  buyRate,
  sellRate,
  change,
  lastUpdated,
  onEdit,
}) => {
  return (
    <tr className="border-b border-[#C9C9C9]">
      <td className="py-4 px-2">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt={name} 
            className="w-[38px] h-[38px] rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-black font-roboto text-[17px] font-semibold">
              {name}
            </span>
            <span className="text-black font-roboto text-[15px] font-light">
              {symbol}
            </span>
          </div>
        </div>
      </td>
      <td className="py-4 px-2">
        <span
          className={`inline-flex px-2.5 py-1 justify-center items-center rounded text-center font-roboto text-[10px] font-normal ${
            status === 'Active'
              ? 'bg-[#BDFDDB] text-[#1C5C3A]'
              : 'bg-[rgba(251,210,95,0.65)] text-black'
          }`}
        >
          {status}
        </span>
      </td>
      <td className="py-4 px-2 text-black font-roboto text-[15px] font-normal">
        {buyRate}
      </td>
      <td className="py-4 px-2 text-black font-roboto text-[15px] font-normal">
        {sellRate}
      </td>
      <td className="py-4 px-2 text-[#3CC27B] font-roboto text-[15px] font-normal">
        {change}
      </td>
      <td className="py-4 px-2 text-black font-roboto text-[15px] font-light">
        {lastUpdated}
      </td>
      <td className="py-4 px-2">
        <button
          onClick={onEdit}
          className="hover:opacity-80 transition-opacity"
          aria-label="Edit cryptocurrency"
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
  );
};
