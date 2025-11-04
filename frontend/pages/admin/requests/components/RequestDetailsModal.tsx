import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check, X } from "lucide-react";
import { RequestData } from "./RequestsTableRow";

interface RequestDetailsModalProps {
  request: RequestData | null;
  isOpen: boolean;
  onClose: () => void;
  onApprove: (requestId: string) => void;
  onReject: (requestId: string) => void;
}

export const RequestDetailsModal: React.FC<RequestDetailsModalProps> = ({
  request,
  isOpen,
  onClose,
  onApprove,
  onReject,
}) => {
  const [notes, setNotes] = useState("");

  if (!request) return null;

  const handleClose = () => {
    onClose();
    setNotes("");
  };

  const handleApprove = () => {
    onApprove(request.id);
    onClose();
    setNotes("");
  };

  const handleReject = () => {
    onReject(request.id);
    onClose();
    setNotes("");
  };

  // Check if this is a crypto transaction
  const isCryptoTransaction =
    request.type.toLowerCase().includes("crypto") ||
    ["BTC", "ETH", "USDT", "BNB"].includes(request.currency);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-[95vw] max-w-[606px] p-0 gap-0 bg-white rounded-xl max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col gap-6 p-6 sm:p-[30px]">
          <DialogHeader>
            <DialogTitle className="text-[17px] font-medium text-black leading-[33px]">
              Request Details - {request.requestId}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-6">
            {/* Request Information and User Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Request Information */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[17px] font-medium text-black leading-[33px]">
                  Request Information
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[14px] font-light text-black whitespace-nowrap">
                      Request ID:
                    </span>
                    <span className="text-[14px] font-medium text-black text-right break-words">
                      {request.requestId}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[14px] font-light text-black whitespace-nowrap">
                      Type:
                    </span>
                    <span className="text-[14px] font-medium text-black text-right">
                      {request.type}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[14px] font-light text-black whitespace-nowrap">
                      Status:
                    </span>
                    <span className="text-[14px] font-medium text-black text-right">
                      {request.status}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[14px] font-light text-black whitespace-nowrap">
                      Time
                    </span>
                    <span className="text-[14px] font-medium text-black text-right">
                      {request.time}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[14px] font-light text-black whitespace-nowrap">
                      Payment Method:
                    </span>
                    <span className="text-[14px] font-medium text-black text-right break-words">
                      {isCryptoTransaction ? "Crypto" : "UPI"}
                    </span>
                  </div>
                </div>
              </div>

              {/* User Details */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[17px] font-medium text-black leading-[33px]">
                  User Details
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[14px] font-light text-black whitespace-nowrap">
                      Name:
                    </span>
                    <span className="text-[14px] font-medium text-black text-right break-words">
                      {request.userName}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[14px] font-light text-black whitespace-nowrap">
                      Email:
                    </span>
                    <span className="text-[14px] font-medium text-black text-right break-all">
                      {request.userEmail}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Transaction Details */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[17px] font-medium text-black leading-[33px]">
                Transaction Details
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-[14px] font-light text-black whitespace-nowrap">
                    Amount:
                  </span>
                  <span className="text-[14px] font-medium text-black text-right">
                    {request.amount} {request.currency}
                  </span>
                </div>

                {isCryptoTransaction ? (
                  <>
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[14px] font-light text-black whitespace-nowrap">
                        Network:
                      </span>
                      <span className="text-[14px] font-medium text-black text-right">
                        Bitcoin Network
                      </span>
                    </div>

                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[14px] font-light text-black whitespace-nowrap">
                        Transaction Hash:
                      </span>
                      <span className="text-[14px] font-medium text-black text-right break-words">
                        1A1zP1eP5QGefi2DMPTfTLSLmv7DivfNa
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[14px] font-light text-black whitespace-nowrap">
                        UPI ID:
                      </span>
                      <span className="text-[14px] font-medium text-black text-right">
                        john@paytm
                      </span>
                    </div>

                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[14px] font-light text-black whitespace-nowrap">
                        Transaction ID:
                      </span>
                      <span className="text-[14px] font-medium text-black text-right break-words">
                        UPI123456789
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Notes Input */}
            <div className="w-full">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add a notes for this request"
                className="w-full h-[79px] px-7 py-4 rounded-[10px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-[15px] text-black placeholder:text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-[#3CC27B] resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleApprove}
                className="flex-1 h-9 px-[60px] flex items-center justify-center gap-2.5 rounded-md border-[0.5px] border-[#C3C3C3] bg-[#3CC27B] hover:bg-[#3CC27B]/90 transition-colors"
              >
                <Check className="w-3 h-3 text-white flex-shrink-0" />
                <span className="text-[15px] font-medium text-white leading-[33px]">
                  Approve
                </span>
              </button>

              <button
                onClick={handleReject}
                className="flex-1 h-9 px-[60px] flex items-center justify-center gap-2.5 rounded-md border-[0.5px] border-[#C3C3C3] bg-[#FA1818] hover:bg-[#FA1818]/90 transition-colors"
              >
                <X className="w-3 h-3 text-white flex-shrink-0" />
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
