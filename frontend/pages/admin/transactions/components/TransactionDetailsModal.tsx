import React from "react";
import { Copy, X } from "lucide-react";

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
  onApprove?: (transactionId: string) => void;
  onReject?: (transactionId: string) => void;
}

export const TransactionDetailsModal: React.FC<
  TransactionDetailsModalProps
> = ({ transaction, isOpen, onClose, onApprove, onReject }) => {
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

  const handleApprove = () => {
    if (onApprove) {
      onApprove(transaction.id);
      onClose();
    }
  };

  const handleReject = () => {
    if (onReject) {
      onReject(transaction.id);
      onClose();
    }
  };

  const showActionButtons =
    transaction.status === "Pending" && (onApprove || onReject);

  return (
    <div
      className="fixed inset-0 bg-black/22 flex items-center justify-center z-50 p-3 sm:p-4 md:p-6"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg sm:rounded-[15px] w-full max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-[550px] max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-lg">
        {/* Modal Header with Close Button */}
        <div className="sticky top-0 bg-white border-b border-[#E5E5E5] px-4 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between z-10">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-[17px] font-medium text-black break-words flex-1">
            Transaction Details - {transaction.transactionId}
          </h2>
          <button
            onClick={onClose}
            className="ml-4 flex-shrink-0 p-1 hover:bg-gray-100 rounded transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </button>
        </div>

        <div className="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7">
          {/* Header Section */}
          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
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

          {/* Action Buttons */}
          {showActionButtons && (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
              <button
                onClick={handleApprove}
                className="flex-1 flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 rounded border border-[#C3C3C3]/50 bg-[#3CC27B] hover:bg-[#3CC27B]/90 transition-colors"
              >
                <svg
                  className="w-3 h-3 flex-shrink-0"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 12C6.78793 12 7.56815 11.8448 8.2961 11.5433C9.02405 11.2417 9.68549 10.7998 10.2426 10.2426C10.7998 9.68549 11.2417 9.02405 11.5433 8.2961C11.8448 7.56815 12 6.78793 12 6C12 5.21207 11.8448 4.43185 11.5433 3.7039C11.2417 2.97595 10.7998 2.31451 10.2426 1.75736C9.68549 1.20021 9.02405 0.758251 8.2961 0.456723C7.56815 0.155195 6.78793 -1.17411e-08 6 0C4.4087 2.37122e-08 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12ZM5.84533 8.42667L9.17867 4.42667L8.15467 3.57333L5.288 7.01267L3.80467 5.52867L2.862 6.47133L4.862 8.47133L5.378 8.98733L5.84533 8.42667Z"
                    fill="white"
                  />
                </svg>
                <span className="text-white text-xs sm:text-sm md:text-[15px] font-medium">
                  Approve
                </span>
              </button>

              <button
                onClick={handleReject}
                className="flex-1 flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 rounded border border-[#C3C3C3]/50 bg-[#FA1818] hover:bg-[#FA1818]/90 transition-colors"
              >
                <svg
                  className="w-3 h-3 flex-shrink-0"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.00683 7.61524L10.048 11.6518C10.2624 11.866 10.5533 11.9863 10.8566 11.9863C11.1598 11.9863 11.4507 11.866 11.6651 11.6518C11.8795 11.4376 12 11.1471 12 10.8442C12 10.5413 11.8795 10.2508 11.6651 10.0366L7.62239 6L11.6643 1.96343C11.7705 1.85737 11.8546 1.73147 11.9121 1.59292C11.9695 1.45437 11.999 1.30588 11.999 1.15592C11.9989 1.00597 11.9693 0.857491 11.9118 0.718966C11.8544 0.580441 11.7701 0.454581 11.6639 0.348573C11.5578 0.242565 11.4317 0.158485 11.293 0.101133C11.1543 0.0437811 11.0056 0.0142806 10.8555 0.0143159C10.7054 0.0143513 10.5567 0.0439216 10.4181 0.101339C10.2794 0.158756 10.1534 0.242896 10.0472 0.348954L6.00683 4.38552L1.96566 0.348954C1.86026 0.239854 1.73417 0.152812 1.59474 0.092908C1.45531 0.0330038 1.30533 0.00143627 1.15355 4.78815e-05C1.00177 -0.00134051 0.85124 0.0274778 0.710733 0.0848213C0.570226 0.142165 0.442559 0.226885 0.335182 0.334039C0.227805 0.441193 0.142868 0.568634 0.0853262 0.708927C0.0277848 0.84922 -0.00120828 0.999554 3.85728e-05 1.15116C0.00128543 1.30276 0.0327471 1.4526 0.0925883 1.59193C0.152429 1.73126 0.239451 1.85729 0.348577 1.96267L4.39128 6L0.349339 10.0373C0.240214 10.1427 0.153192 10.2687 0.0933506 10.4081C0.0335095 10.5474 0.00204743 10.6972 0.000800572 10.8488C-0.000446285 11.0004 0.0285468 11.1508 0.0860882 11.2911C0.14363 11.4314 0.228567 11.5588 0.335944 11.666C0.443321 11.7731 0.570988 11.8578 0.711495 11.9152C0.852002 11.9725 1.00254 12.0013 1.15431 12C1.30609 11.9986 1.45607 11.967 1.5955 11.9071C1.73493 11.8472 1.86102 11.7601 1.96642 11.651L6.00683 7.61524Z"
                    fill="white"
                  />
                </svg>
                <span className="text-white text-xs sm:text-sm md:text-[15px] font-medium">
                  Reject
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
