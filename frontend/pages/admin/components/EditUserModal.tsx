import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { UserData } from "./UsersTableRow";
import { ChevronDown } from "lucide-react";

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserData | null;
}

export const EditUserModal: React.FC<EditUserModalProps> = ({
  isOpen,
  onClose,
  user,
}) => {
  const [formData, setFormData] = useState({
    network: "TRC20",
    email: user?.email || "",
    phone: "+91 9876543210",
    address: "123 Main St, Mumbai, Maharashtra",
    accountStatus: user?.status || "Active",
    verificationStatus: user?.verification || "Verified",
    inrBalance: "4,50,000",
    bitcoin: "0.05234",
    ethereum: "1.2345",
    cardano: "1500",
    tether: "100",
  });

  if (!user) return null;

  const handleSave = () => {
    console.log("Saving user data:", formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[1172px] p-10 bg-white rounded-[15px] border-none shadow-lg max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">Edit User - {user.name}</DialogTitle>
        
        <div className="flex flex-col gap-8">
          {/* Personal Information and Account Settings */}
          <div className="space-y-8">
            <h2 className="text-[17px] font-medium text-black leading-[33px]">
              Edit User - {user.name}
            </h2>

            <div className="grid grid-cols-2 gap-x-12">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-[17px] font-medium text-black leading-[33px]">
                  Personal Information:
                </h3>

                {/* Select Network */}
                <div className="space-y-2">
                  <label className="text-[15px] font-medium text-black">
                    Select Network
                  </label>
                  <div className="relative">
                    <select
                      value={formData.network}
                      onChange={(e) =>
                        setFormData({ ...formData, network: e.target.value })
                      }
                      className="w-full h-[51px] px-7 rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-[15px] font-medium text-[#8E8E8E] appearance-none cursor-pointer"
                    >
                      <option value="TRC20">TRC20</option>
                      <option value="ERC20">ERC20</option>
                      <option value="BEP20">BEP20</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-[13px] h-[10px] pointer-events-none" />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-[15px] font-medium text-black">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full h-[51px] px-7 rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-[15px] font-medium text-[#8E8E8E]"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-[15px] font-medium text-black">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full h-[51px] px-7 rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-[15px] font-medium text-[#8E8E8E]"
                  />
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label className="text-[15px] font-medium text-black">
                    Address
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    className="w-full h-[99px] px-7 py-4 rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-[15px] font-medium text-[#8E8E8E] resize-none"
                  />
                </div>
              </div>

              {/* Account Settings */}
              <div className="space-y-6">
                <h3 className="text-[17px] font-medium text-black leading-[33px]">
                  Account Settings:
                </h3>

                {/* Account Status */}
                <div className="space-y-2">
                  <label className="text-[15px] font-medium text-black">
                    Account Status
                  </label>
                  <div className="relative">
                    <select
                      value={formData.accountStatus}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          accountStatus: e.target.value,
                        })
                      }
                      className="w-full h-[51px] px-7 rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-[15px] font-medium text-[#8E8E8E] appearance-none cursor-pointer"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      <option value="Suspended">Suspended</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-[13px] h-[10px] pointer-events-none" />
                  </div>
                </div>

                {/* Verification Status */}
                <div className="space-y-2">
                  <label className="text-[15px] font-medium text-black">
                    Verification Status
                  </label>
                  <div className="relative">
                    <select
                      value={formData.verificationStatus}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          verificationStatus: e.target.value,
                        })
                      }
                      className="w-full h-[51px] px-7 rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-[15px] font-medium text-[#8E8E8E] appearance-none cursor-pointer"
                    >
                      <option value="Verified">Verified</option>
                      <option value="Pending">Pending</option>
                      <option value="Unverified">Unverified</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-[13px] h-[10px] pointer-events-none" />
                  </div>
                </div>

                {/* INR Balance */}
                <div className="space-y-2">
                  <label className="text-[15px] font-medium text-black">
                    INR Balance (₹)
                  </label>
                  <input
                    type="text"
                    value={formData.inrBalance}
                    onChange={(e) =>
                      setFormData({ ...formData, inrBalance: e.target.value })
                    }
                    className="w-full h-[51px] px-7 rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-[15px] font-medium text-[#8E8E8E]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Crypto Holdings */}
          <div className="space-y-6">
            <h3 className="text-[17px] font-medium text-black leading-[33px]">
              Crypto Holdings:
            </h3>

            <div className="grid grid-cols-4 gap-[13px]">
              {/* Bitcoin */}
              <div className="space-y-2">
                <label className="text-[15px] font-medium text-black">
                  Bitcoin (BTC)
                </label>
                <input
                  type="text"
                  value={formData.bitcoin}
                  onChange={(e) =>
                    setFormData({ ...formData, bitcoin: e.target.value })
                  }
                  className="w-full h-[51px] px-7 rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-[15px] font-medium text-[#8E8E8E]"
                />
              </div>

              {/* Ethereum */}
              <div className="space-y-2">
                <label className="text-[15px] font-medium text-black">
                  Ethereum (ETH)
                </label>
                <input
                  type="text"
                  value={formData.ethereum}
                  onChange={(e) =>
                    setFormData({ ...formData, ethereum: e.target.value })
                  }
                  className="w-full h-[51px] px-7 rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-[15px] font-medium text-[#8E8E8E]"
                />
              </div>

              {/* Cardano */}
              <div className="space-y-2">
                <label className="text-[15px] font-medium text-black">
                  Cardano (ADA)
                </label>
                <input
                  type="text"
                  value={formData.cardano}
                  onChange={(e) =>
                    setFormData({ ...formData, cardano: e.target.value })
                  }
                  className="w-full h-[51px] px-7 rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-[15px] font-medium text-[#8E8E8E]"
                />
              </div>

              {/* Tether USDT */}
              <div className="space-y-2">
                <label className="text-[15px] font-medium text-black">
                  Tether USDT (USDT)
                </label>
                <input
                  type="text"
                  value={formData.tether}
                  onChange={(e) =>
                    setFormData({ ...formData, tether: e.target.value })
                  }
                  className="w-full h-[51px] px-7 rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-[15px] font-medium text-[#8E8E8E]"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleSave}
              className="flex items-center justify-center px-[60px] h-9 bg-black text-white text-[15px] font-medium rounded-md border-[0.5px] border-[#C3C3C3] hover:bg-gray-800 transition-colors"
            >
              Save Changes
            </button>
            <button
              onClick={onClose}
              className="flex items-center justify-center px-[60px] h-9 bg-white text-black text-[15px] font-medium rounded-md border-[0.5px] border-[#C3C3C3] hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
