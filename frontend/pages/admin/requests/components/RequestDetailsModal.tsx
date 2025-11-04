import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
}) => {
  if (!request) return null;

  const handleClose = () => {
    onClose();
  };

  const getStatusBadgeStyle = () => {
    switch (request.status.toLowerCase()) {
      case "approved":
        return "bg-[#3CC27B]/31 border-[#CACACA]";
      case "pending":
        return "bg-[#FBD25F]/65 border-[#CACACA]";
      case "rejected":
        return "bg-[#FDBDBD]/56 border-[#CACACA]";
      default:
        return "bg-gray-100 border-[#CACACA]";
    }
  };

  const getStatusText = () => {
    switch (request.status.toLowerCase()) {
      case "approved":
        return "Verified and Approved";
      case "pending":
        return "Pending Verification";
      case "rejected":
        return "Rejected";
      default:
        return request.status;
    }
  };

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
                      UPI
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
              </div>
            </div>

            {/* Verification Status Badge */}
            <div
              className={`w-full h-[54px] rounded-[10px] border-[0.7px] ${getStatusBadgeStyle()} flex items-center px-7`}
            >
              <span className="text-[15px] font-normal text-black">
                {getStatusText()}
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
