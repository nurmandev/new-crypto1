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
      className="fixed inset-0 bg-black/22 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-[15px] w-full max-w-[550px] max-h-[90vh] overflow-y-auto">
        <div className="p-6 sm:p-8 flex flex-col gap-6 sm:gap-7">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-base sm:text-[17px] font-medium text-black leading-[33px]">
              Transaction Details - {transaction.transactionId}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-base sm:text-[17px] font-medium text-black leading-[33px]">
                  Transaction Info
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-light text-black">
                      Transaction ID:
                    </span>
                    <span className="text-sm font-medium text-black text-right">
                      {transaction.status}
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <span className="text-sm font-light text-black">Type:</span>
                    <span className="text-sm font-medium text-black text-right">
                      {transaction.type}
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <span className="text-sm font-light text-black">
                      Status:
                    </span>
                    <span className="text-sm font-medium text-black text-right">
                      {transaction.status}
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <span className="text-sm font-light text-black">Time</span>
                    <span className="text-sm font-medium text-black text-right">
                      {transaction.time}
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <span className="text-sm font-light text-black">
                      Payment Method:
                    </span>
                    <span className="text-sm font-medium text-black text-right">
                      {transaction.paymentMethod}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-base sm:text-[17px] font-medium text-black leading-[33px]">
                  User Details
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-light text-black">Name:</span>
                    <span className="text-sm font-medium text-black text-right">
                      {transaction.userName}
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <span className="text-sm font-light text-black">
                      Email:
                    </span>
                    <span className="text-sm font-medium text-black text-right break-all">
                      {transaction.user}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base sm:text-[17px] font-medium text-black leading-[33px]">
              Financial Details
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-sm font-light text-black">
                  Crypto Amount:
                </span>
                <span className="text-sm font-medium text-black text-right">
                  {transaction.amount} {transaction.crypto}
                </span>
              </div>

              <div className="flex justify-between items-start">
                <span className="text-sm font-light text-black">
                  INR Value:
                </span>
                <span className="text-sm font-medium text-black text-right">
                  {transaction.inrValue}
                </span>
              </div>

              <div className="flex justify-between items-start">
                <span className="text-sm font-light text-black">Fees:</span>
                <span className="text-sm font-medium text-black text-right">
                  {transaction.fees}
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border-l-2 border-[#3CC27B] bg-[#3CC27B]/9 p-4">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-xs font-light text-black">
                  Exchange Rate:
                </span>
                <span className="text-xs font-medium text-black text-right">
                  {transaction.exchangeRate}
                </span>
              </div>

              <div className="flex justify-between items-start gap-2">
                <span className="text-xs font-light text-black">
                  Transaction Hash:
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-black text-right">
                    {transaction.transactionHash}
                  </span>
                  <button
                    onClick={handleCopyHash}
                    className="hover:opacity-70 transition-opacity"
                    aria-label="Copy transaction hash"
                  >
                    <Copy className="w-3 h-3 text-black" />
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
