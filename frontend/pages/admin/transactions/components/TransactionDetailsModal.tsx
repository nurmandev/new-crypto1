import React from "react";
import { Copy } from "lucide-react";

export interface DetailedTransactionData {
  id: string;
  transactionId: string;
  user: string;
  userName: string;
  type: "Buy" | "Sell";
  crypto: string;
  amount: string;
  inrValue: string;
  status: "Active" | "Completed" | "Pending" | "Failed";
  time: string;
  paymentMethod: string;
  fees: string;
  exchangeRate: string;
  transactionHash: string;
}

interface TransactionDetailsModalProps {
  transaction: DetailedTransactionData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TransactionDetailsModal: React.FC<
  TransactionDetailsModalProps
> = ({ transaction, isOpen, onClose }) => {
  if (!isOpen || !transaction) return null;

  const handleCopyHash = () => {
    if (transaction.transactionHash) {
      navigator.clipboard.writeText(transaction.transactionHash);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/22 flex items-center justify-center z-50 p-3 sm:p-4 md:p-6"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg sm:rounded-[15px] w-full max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-[550px] max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-lg">
        <div className="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7">
          {/* Header Section */}
          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
            <h2 className="text-sm sm:text-base md:text-lg lg:text-[17px] font-medium text-black break-words">
              Transaction Details - {transaction.transactionId}
            </h2>

            {/* Info Sections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {/* Transaction Info */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-[17px] font-medium text-black">
                  Transaction Info
                </h3>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs sm:text-sm font-light text-black flex-shrink-0">
                      Transaction ID:
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-black text-right flex-shrink-0">
                      {transaction.status}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs sm:text-sm font-light text-black flex-shrink-0">
                      Type:
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-black text-right flex-shrink-0">
                      {transaction.type}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs sm:text-sm font-light text-black flex-shrink-0">
                      Status:
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-black text-right flex-shrink-0">
                      {transaction.status}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs sm:text-sm font-light text-black flex-shrink-0">
                      Time:
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-black text-right flex-shrink-0">
                      {transaction.time}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs sm:text-sm font-light text-black flex-shrink-0">
                      Payment Method:
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-black text-right flex-shrink-0">
                      {transaction.paymentMethod}
                    </span>
                  </div>
                </div>
              </div>

              {/* User Details */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-[17px] font-medium text-black">
                  User Details
                </h3>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs sm:text-sm font-light text-black flex-shrink-0">
                      Name:
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-black text-right break-words">
                      {transaction.userName}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs sm:text-sm font-light text-black flex-shrink-0">
                      Email:
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-black text-right break-all">
                      {transaction.user}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Details */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xs sm:text-sm md:text-base lg:text-[17px] font-medium text-black">
              Financial Details
            </h3>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between items-start gap-2">
                <span className="text-xs sm:text-sm font-light text-black flex-shrink-0">
                  Crypto Amount:
                </span>
                <span className="text-xs sm:text-sm font-medium text-black text-right flex-shrink-0">
                  {transaction.amount} {transaction.crypto}
                </span>
              </div>

              <div className="flex justify-between items-start gap-2">
                <span className="text-xs sm:text-sm font-light text-black flex-shrink-0">
                  INR Value:
                </span>
                <span className="text-xs sm:text-sm font-medium text-black text-right flex-shrink-0">
                  {transaction.inrValue}
                </span>
              </div>

              <div className="flex justify-between items-start gap-2">
                <span className="text-xs sm:text-sm font-light text-black flex-shrink-0">
                  Fees:
                </span>
                <span className="text-xs sm:text-sm font-medium text-black text-right flex-shrink-0">
                  {transaction.fees}
                </span>
              </div>
            </div>
          </div>

          {/* Exchange Rate Box */}
          <div className="rounded border-l-2 sm:rounded-lg border-[#3CC27B] bg-[#3CC27B]/9 p-3 sm:p-4">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between items-start gap-2">
                <span className="text-[10px] sm:text-xs font-light text-black flex-shrink-0">
                  Exchange Rate:
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-black text-right flex-shrink-0">
                  {transaction.exchangeRate}
                </span>
              </div>

              <div className="flex justify-between items-start gap-2 min-w-0">
                <span className="text-[10px] sm:text-xs font-light text-black flex-shrink-0">
                  Tx Hash:
                </span>
                <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                  <span className="text-[10px] sm:text-xs font-medium text-black truncate">
                    {transaction.transactionHash}
                  </span>
                  <button
                    onClick={handleCopyHash}
                    className="hover:opacity-70 transition-opacity flex-shrink-0"
                    aria-label="Copy transaction hash"
                  >
                    <Copy className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
