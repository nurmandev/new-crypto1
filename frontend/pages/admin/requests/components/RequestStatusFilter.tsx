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
    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 whitespace-nowrap">
      {/* Status count badges */}
      <button
        onClick={() => onStatusChange("pending")}
        className={`inline-flex h-6 sm:h-7 px-1.5 sm:px-2 md:px-3 items-center justify-center gap-1 rounded border transition-all ${
          selectedStatus === "pending"
            ? "bg-[#FBD25F]/65 border-[#FBD25F]"
            : "bg-[#FBD25F]/65 border-transparent"
        }`}
      >
        <span className="text-[9px] sm:text-[10px] md:text-[10px] text-black font-medium">
          {pendingCount} <span className="hidden sm:inline">Pending</span>
        </span>
      </button>

      <button
        onClick={() => onStatusChange("approved")}
        className={`inline-flex h-6 sm:h-7 px-1.5 sm:px-2 md:px-3 items-center justify-center gap-1 rounded border transition-all ${
          selectedStatus === "approved"
            ? "bg-[#3CC27B]/31 border-[#3CC27B]"
            : "bg-[#3CC27B]/31 border-transparent"
        }`}
      >
        <span className="text-[9px] sm:text-[10px] md:text-[10px] text-black font-medium">
          {approvedCount} <span className="hidden sm:inline">Approved</span>
        </span>
      </button>

      <button
        onClick={() => onStatusChange("rejected")}
        className={`inline-flex h-6 sm:h-7 px-1.5 sm:px-2 md:px-3 items-center justify-center gap-1 rounded border transition-all ${
          selectedStatus === "rejected"
            ? "bg-[#FDBDBD]/56 border-[#FA1818]"
            : "bg-[#FDBDBD]/56 border-transparent"
        }`}
      >
        <span className="text-[9px] sm:text-[10px] md:text-[10px] text-[#FA1818] font-medium">
          {rejectedCount} <span className="hidden sm:inline">Rejected</span>
        </span>
      </button>

      {/* All Requests dropdown */}
      <button
        onClick={() => onStatusChange("all")}
        className={`inline-flex h-6 sm:h-7 px-1.5 sm:px-2 md:px-3 items-center justify-center gap-1 rounded-md bg-black hover:bg-gray-800 transition-colors`}
      >
        <span className="text-[9px] sm:text-[11px] md:text-[12px] font-normal text-white">
          <span className="hidden sm:inline">All </span>Requests
        </span>
        <ChevronDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white flex-shrink-0" />
      </button>
    </div>
  );
};
