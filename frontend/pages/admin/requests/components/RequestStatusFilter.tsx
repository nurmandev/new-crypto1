import React from "react";
import { ChevronDown } from "lucide-react";

interface RequestStatusFilterProps {
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  pendingCount: number;
  approvedCount: number;
  rejectedCount: number;
}

export const RequestStatusFilter: React.FC<RequestStatusFilterProps> = ({
  selectedStatus,
  onStatusChange,
  pendingCount,
  approvedCount,
  rejectedCount,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      {/* Status count badges */}
      <button
        onClick={() => onStatusChange("pending")}
        className={`inline-flex h-7 px-2 sm:px-3 items-center justify-center gap-2 rounded border ${
          selectedStatus === "pending"
            ? "bg-[#FBD25F]/65 border-[#FBD25F]"
            : "bg-[#FBD25F]/65 border-transparent"
        }`}
      >
        <span className="text-[10px] sm:text-[10px] text-black">
          {pendingCount} Pending
        </span>
      </button>

      <button
        onClick={() => onStatusChange("approved")}
        className={`inline-flex h-7 px-2 sm:px-3 items-center justify-center gap-2 rounded border ${
          selectedStatus === "approved"
            ? "bg-[#3CC27B]/31 border-[#3CC27B]"
            : "bg-[#3CC27B]/31 border-transparent"
        }`}
      >
        <span className="text-[10px] sm:text-[10px] text-black">
          {approvedCount} Approved
        </span>
      </button>

      <button
        onClick={() => onStatusChange("rejected")}
        className={`inline-flex h-7 px-2 sm:px-3 items-center justify-center gap-2 rounded border ${
          selectedStatus === "rejected"
            ? "bg-[#FDBDBD]/56 border-[#FA1818]"
            : "bg-[#FDBDBD]/56 border-transparent"
        }`}
      >
        <span className="text-[10px] sm:text-[10px] text-[#FA1818]">
          {rejectedCount} Rejected
        </span>
      </button>

      {/* All Requests dropdown */}
      <button
        onClick={() => onStatusChange("all")}
        className={`inline-flex h-7 px-2 sm:px-3 items-center justify-center gap-2 rounded-md ${
          selectedStatus === "all" ? "bg-black" : "bg-black"
        }`}
      >
        <span className="text-[10px] sm:text-[12px] font-normal text-white">
          All Requests
        </span>
        <ChevronDown className="w-3 h-3 text-white" />
      </button>
    </div>
  );
};
