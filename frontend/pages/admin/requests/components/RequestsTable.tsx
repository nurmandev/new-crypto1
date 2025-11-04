import React from "react";
import { RequestsTableRow, RequestData } from "./RequestsTableRow";

interface RequestsTableProps {
  requests: RequestData[];
  onView: (requestId: string) => void;
}

export const RequestsTable: React.FC<RequestsTableProps> = ({
  requests,
  onView,
}) => {
  return (
    <div className="w-full">
      {/* Desktop Table View */}
      <div className="hidden sm:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#C9C9C9]/50">
              <th className="text-left py-2 sm:py-3 md:py-4 px-2 sm:px-3">
                <span className="text-[11px] sm:text-[12px] md:text-[15px] font-bold text-[#313131]">
                  Request ID
                </span>
              </th>
              <th className="text-left py-2 sm:py-3 md:py-4 px-2 sm:px-3">
                <span className="text-[11px] sm:text-[12px] md:text-[15px] font-bold text-[#313131]">
                  Type
                </span>
              </th>
              <th className="text-left py-2 sm:py-3 md:py-4 px-2 sm:px-3">
                <span className="text-[11px] sm:text-[12px] md:text-[15px] font-bold text-[#313131]">
                  User
                </span>
              </th>
              <th className="text-left py-2 sm:py-3 md:py-4 px-2 sm:px-3 hidden sm:table-cell">
                <span className="text-[11px] sm:text-[12px] md:text-[15px] font-bold text-[#313131]">
                  Amount
                </span>
              </th>
              <th className="text-left py-2 sm:py-3 md:py-4 px-2 sm:px-3 hidden md:table-cell">
                <span className="text-[11px] sm:text-[12px] md:text-[15px] font-bold text-[#313131]">
                  Currency
                </span>
              </th>
              <th className="text-left py-2 sm:py-3 md:py-4 px-2 sm:px-3">
                <span className="text-[11px] sm:text-[12px] md:text-[15px] font-bold text-[#313131]">
                  Status
                </span>
              </th>
              <th className="text-left py-2 sm:py-3 md:py-4 px-2 sm:px-3 hidden lg:table-cell">
                <span className="text-[11px] sm:text-[12px] md:text-[15px] font-bold text-[#313131]">
                  Time
                </span>
              </th>
              <th className="text-left py-2 sm:py-3 md:py-4 px-2 sm:px-3">
                <span className="text-[11px] sm:text-[12px] md:text-[15px] font-bold text-[#313131]">
                  Actions
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <RequestsTableRow
                key={request.id}
                request={request}
                onView={onView}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="sm:hidden space-y-3">
        {requests.map((request) => (
          <div
            key={request.id}
            className="bg-[#F9F9F9] border border-[#E0E0E0] rounded-lg p-3 hover:bg-[#F5F5F5] transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-semibold text-black mb-1 truncate">
                  {request.requestId}
                </div>
                <div className="text-[11px] text-[#666] mb-2">{request.type}</div>
                <div className="space-y-1">
                  <div className="text-[11px] font-medium text-black truncate">
                    {request.userName}
                  </div>
                  <div className="text-[10px] text-[#999] truncate">
                    {request.userEmail}
                  </div>
                </div>
              </div>
              <button
                onClick={() => onView(request.id)}
                className="ml-2 flex-shrink-0 p-1.5 hover:bg-gray-200 rounded transition-colors"
                aria-label="View request details"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div>
                <span className="text-[#999]">Amount:</span>
                <div className="font-medium text-black mt-0.5">
                  {request.amount} {request.currency}
                </div>
              </div>
              <div>
                <span className="text-[#999]">Status:</span>
                <div className="mt-0.5">
                  <span
                    className={`inline-flex px-2 py-0.5 rounded text-[9px] font-normal ${
                      request.status === "Approved"
                        ? "bg-[#3CC27B]/31 text-black"
                        : request.status === "Pending"
                          ? "bg-[#FBD25F]/65 text-black"
                          : "bg-[#FDBDBD]/56 text-[#FA1818]"
                    }`}
                  >
                    {request.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
