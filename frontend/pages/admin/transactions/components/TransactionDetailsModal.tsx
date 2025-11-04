import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { Check, X, Copy } from "lucide-react";
import { TransactionData } from "./TransactionsTableRow";

interface TransactionDetailsModalProps {
  transaction: TransactionData | null;
  isOpen: boolean;
  onClose: () => void;
  onApprove: (transactionId: string) => void;
  onReject: (transactionId: string) => void;
}

export const TransactionDetailsModal: React.FC<
  TransactionDetailsModalProps
> = ({ transaction, isOpen, onClose, onApprove, onReject }) => {
  const [copied, setCopied] = useState(false);

  if (!transaction) return null;

  const handleCopyHash = () => {
    navigator.clipboard.writeText(transaction.transactionHash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleApprove = () => {
    onApprove(transaction.id);
    onClose();
  };

  const handleReject = () => {
    onReject(transaction.id);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[553px] p-0 gap-0 bg-white rounded-xl">
        <div className="flex flex-col gap-6 p-8">
          <DialogHeader>
            <h2 className="text-[17px] font-medium text-black leading-[33px]">
              Transaction Details - {transaction.transactionId}
            </h2>
          </DialogHeader>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <h3 className="text-[17px] font-medium text-black leading-[33px]">
                  Transaction Info
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[14px] font-light text-black">
                      Transaction ID:
                    </span>
                    <span className="text-[14px] font-medium text-black text-right">
                      {transaction.transactionId}
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <span className="text-[14px] font-light text-black">
                      Type:
                    </span>
                    <span className="text-[14px] font-medium text-black text-right">
                      {transaction.type}
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <span className="text-[14px] font-light text-black">
                      Status:
                    </span>
                    <span className="text-[14px] font-medium text-black text-right">
                      {transaction.status}
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <span className="text-[14px] font-light text-black">
                      Time
                    </span>
                    <span className="text-[14px] font-medium text-black text-right">
                      {transaction.time}
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <span className="text-[14px] font-light text-black">
                      Payment Method:
                    </span>
                    <span className="text-[14px] font-medium text-black text-right">
                      {transaction.paymentMethod}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-[17px] font-medium text-black leading-[33px]">
                  User Details
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[14px] font-light text-black">
                      Name:
                    </span>
                    <span className="text-[14px] font-medium text-black text-right">
                      {transaction.userName}
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <span className="text-[14px] font-light text-black">
                      Email:
                    </span>
                    <span className="text-[14px] font-medium text-black text-right break-all">
                      {transaction.user}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[17px] font-medium text-black leading-[33px]">
                Financial Details
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-[14px] font-light text-black">
                    Crypto Amount:
                  </span>
                  <span className="text-[14px] font-medium text-black text-right">
                    {transaction.amount} {transaction.crypto}
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-[14px] font-light text-black">
                    INR Value:
                  </span>
                  <span className="text-[14px] font-medium text-black text-right">
                    {transaction.inrValue}
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-[14px] font-light text-black">
                    Fees:
                  </span>
                  <span className="text-[14px] font-medium text-black text-right">
                    {transaction.fees}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-l-2 border-[#3CC27B] bg-[#3CC27B]/9 p-4">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <span className="text-[12px] font-light text-black">
                    Exchange Rate:
                  </span>
                  <span className="text-[12px] font-medium text-black text-right">
                    {transaction.exchangeRate}
                  </span>
                </div>

                <div className="flex justify-between items-center gap-2">
                  <span className="text-[12px] font-light text-black">
                    Transaction Hash:
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-medium text-black">
                      {transaction.transactionHash}
                    </span>
                    <button
                      onClick={handleCopyHash}
                      className="p-1 hover:bg-[#3CC27B]/20 rounded transition-colors"
                      title={copied ? "Copied!" : "Copy hash"}
                    >
                      <Copy className="w-3 h-3 text-black" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <button
                onClick={handleApprove}
                className="flex-1 h-9 px-4 flex items-center justify-center gap-2 rounded-md border border-[#C3C3C3] bg-[#3CC27B] hover:bg-[#3CC27B]/90 transition-colors"
              >
                <Check className="w-3 h-3 text-white" />
                <span className="text-[15px] font-medium text-white leading-[33px]">
                  Approve
                </span>
              </button>

              <button
                onClick={handleReject}
                className="flex-1 h-9 px-4 flex items-center justify-center gap-2 rounded-md border border-[#C3C3C3] bg-[#FA1818] hover:bg-[#FA1818]/90 transition-colors"
              >
                <X className="w-3 h-3 text-white" />
                <span className="text-[15px] font-medium text-white leading-[33px]">
                  Reject
                </span>
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
