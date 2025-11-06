import React, { useState } from "react";
import { AdminHeader } from "./components/AdminHeader";
import { AdminSidebar } from "./components/AdminSidebar";

interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: "Active" | "Disabled";
  limit: {
    min: string;
    max: string;
  };
  fees: string;
  users: string;
  volume: string;
}

export const PaymentMethods: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const paymentMethods: PaymentMethod[] = [
    {
      id: "1",
      name: "UPI (Google Pay, PhonePe, Paytm)",
      description: "Unified Payments Interface for instant INR transfers",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/3b4b05425288bd712f9b8242b4ec54b5d99eaaa0?width=80",
      status: "Active",
      limit: { min: "₹100", max: "₹100,00" },
      fees: "Free",
      users: "1245",
      volume: "₹12.4M",
    },
    {
      id: "2",
      name: "Bank Transfer (IMPS/NEFT)",
      description: "Direct bank transfers via IMPS or NEFT",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/05f69dce74b342ec7e7542328e39eafd0a211cad?width=80",
      status: "Disabled",
      limit: { min: "₹500", max: "₹500,000" },
      fees: "Free",
      users: "1245",
      volume: "₹12.4M",
    },
    {
      id: "3",
      name: "Crypto (USDT Tether)",
      description: "USDT Cryptocurrency transfer",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/b67df80ecf07d1e6b2dba2dd757c30dda2e5bda1?width=80",
      status: "Active",
      limit: { min: "₹1,000", max: "₹1,000,000" },
      fees: "2%",
      users: "1245",
      volume: "₹12.4M",
    },
    {
      id: "4",
      name: "Skrill Wallet",
      description: "Skrill digital wallet transfers",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/39bc7f7fbab201d2ddf81e65d221a85f20fff91b?width=80",
      status: "Active",
      limit: { min: "₹100", max: "₹100,00" },
      fees: "2.5%",
      users: "1245",
      volume: "₹12.4M",
    },
    {
      id: "5",
      name: "Paypal",
      description: "Paypal Digital Wallet Trasfers",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/3b4b05425288bd712f9b8242b4ec54b5d99eaaa0?width=80",
      status: "Active",
      limit: { min: "₹1,000", max: "₹200,000" },
      fees: "2.5%",
      users: "1245",
      volume: "₹12.4M",
    },
  ];

  const getStatusColor = (status: string) => {
    return status === "Active"
      ? "bg-[#BDFDDB] text-[#1C5C3A]"
      : "bg-[#FDBDBD]/56 text-[#FA1818]";
  };

  const getFeeColor = (fee: string) => {
    return fee === "Free" ? "text-[#3CC27B]" : "text-black";
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <div className="flex gap-0 lg:gap-6 max-w-[1920px] mx-auto min-h-screen">
        <AdminSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <div className="flex-1 flex flex-col gap-0 lg:gap-6 lg:p-6">
          <AdminHeader />

          <div className="bg-white rounded-none lg:rounded-[10px] p-6 lg:p-8 m-0">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h1 className="text-[20px] font-medium text-black mb-2">
                  Payment Methods Management
                </h1>
                <p className="text-[17px] text-[#838383]">
                  Add, Delete and Edit Payment Methods
                </p>
              </div>
              <button className="flex items-center gap-2 px-9 py-2 bg-[#161616] text-white rounded-md hover:bg-black transition-colors">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.25 0C7.94 0 8.5 0.56 8.5 1.25V6H13.25C13.5815 6 13.8995 6.1317 14.1339 6.36612C14.3683 6.60054 14.5 6.91848 14.5 7.25C14.5 7.58152 14.3683 7.89946 14.1339 8.13388C13.8995 8.3683 13.5815 8.5 13.25 8.5H8.5V13.25C8.5 13.5815 8.3683 13.8995 8.13388 14.1339C7.89946 14.3683 7.58152 14.5 7.25 14.5C6.91848 14.5 6.60054 14.3683 6.36612 14.1339C6.1317 13.8995 6 13.5815 6 13.25V8.5H1.25C0.918479 8.5 0.600537 8.3683 0.366117 8.13388C0.131696 7.89946 0 7.58152 0 7.25C0 6.91848 0.131696 6.60054 0.366117 6.36612C0.600537 6.1317 0.918479 6 1.25 6H6V1.25C6 0.56 6.56 0 7.25 0Z"
                    fill="white"
                  />
                </svg>
                <span className="text-[15px] font-medium">Add Method</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#C9C9C9]">
                    <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                      Method
                    </th>
                    <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                      Status
                    </th>
                    <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                      Limit
                    </th>
                    <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                      Fees
                    </th>
                    <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                      Users
                    </th>
                    <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                      Volume
                    </th>
                    <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paymentMethods.map((method) => (
                    <tr key={method.id} className="border-b border-[#C9C9C9]">
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                            <img
                              src={method.icon}
                              alt={method.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-[17px] font-semibold text-black">
                              {method.name}
                            </div>
                            <div className="text-[15px] font-light text-black">
                              {method.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <span
                          className={`inline-flex px-2.5 py-1 rounded text-[10px] ${getStatusColor(method.status)}`}
                        >
                          {method.status}
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <div className="text-[15px] text-black">
                          <div>Min: {method.limit.min}</div>
                          <div>Max: {method.limit.max}</div>
                        </div>
                      </td>
                      <td
                        className={`py-4 px-2 text-[15px] ${getFeeColor(method.fees)}`}
                      >
                        {method.fees}
                      </td>
                      <td className="py-4 px-2 text-[15px] font-light text-black">
                        {method.users}
                      </td>
                      <td className="py-4 px-2 text-[15px] text-black">
                        {method.volume}
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-2">
                          <button className="p-1 hover:opacity-70">
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
                          <button className="p-1 hover:opacity-70">
                            <svg
                              width="16"
                              height="18"
                              viewBox="0 0 16 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3 18C2.45 18 1.97933 17.8043 1.588 17.413C1.19667 17.0217 1.00067 16.5507 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8043 17.021 14.413 17.413C14.0217 17.805 13.5507 18.0007 13 18H3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z"
                                fill="#FA1818"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
