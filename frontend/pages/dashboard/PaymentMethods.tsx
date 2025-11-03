import { useState } from "react";
import DashboardLayout from "./components/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Pencil, Trash2, Plus } from "lucide-react";

interface PaymentMethod {
  id: string;
  type: string;
  name: string;
  subtitle: string;
  account: string;
  icon: string;
  isPrimary?: boolean;
}

export default function PaymentMethods() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [formData, setFormData] = useState({
    country: "India",
    bank: "State Bank of India",
    accountType: "Savings",
    accountNumber: "123456789",
    holderName: "Yogesh Neware",
    ifscCode: "123456",
  });

  const paymentMethods: PaymentMethod[] = [
    {
      id: "1",
      type: "UPI",
      name: "UPI Payment",
      subtitle: "UPI (Google Pay, PhonePe, Paytm)",
      account: "Account : john@paytm",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d1d6bd516909e21fac1ea7f96e71486c9c8ec838?width=80",
      isPrimary: true,
    },
    {
      id: "2",
      type: "Bank",
      name: "Bank Account",
      subtitle: "Bank Account (IMPS/NEFT/RTGS)",
      account: "Account : State Bank of India",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d1d6bd516909e21fac1ea7f96e71486c9c8ec838?width=80",
      isPrimary: true,
    },
    {
      id: "3",
      type: "Paypal",
      name: "Paypalt",
      subtitle: "Paypal Wallet",
      account: "Account :  john.doe@example.com",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d1d6bd516909e21fac1ea7f96e71486c9c8ec838?width=80",
      isPrimary: true,
    },
    {
      id: "4",
      type: "USDT",
      name: "USDT Wallet",
      subtitle: "TRC20 Network",
      account: "Address: 1A1zP1eP5Q...DivfNa...",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d1d6bd516909e21fac1ea7f96e71486c9c8ec838?width=80",
      isPrimary: true,
    },
    {
      id: "5",
      type: "Skrill",
      name: "Skrill",
      subtitle: "Skrill Wallet",
      account: "Account : john.doe@example.com",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d1d6bd516909e21fac1ea7f96e71486c9c8ec838?width=80",
      isPrimary: true,
    },
  ];

  const handleEdit = (method: PaymentMethod) => {
    setSelectedMethod(method);
    setIsEditModalOpen(true);
  };

  const handleSave = () => {
    setIsEditModalOpen(false);
  };

  const handleDelete = (id: string) => {
    console.log("Delete method:", id);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-medium text-black mb-2">
              Payment Methods
            </h1>
            <p className="text-sm md:text-base text-[#838383]">
              Manage your payment methods for deposits and withdrawals
            </p>
          </div>
          <Button
            onClick={() => setIsEditModalOpen(true)}
            className="bg-[#161616] hover:bg-[#2a2a2a] text-white px-6 md:px-9 py-2 rounded-md self-start sm:self-auto"
          >
            <Plus className="w-4 h-4 mr-2" />
            Payment Method
          </Button>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="bg-[#F8F8F8] rounded-lg p-4 md:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3 md:gap-4 flex-1">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-[#D5D5D5] flex-shrink-0 overflow-hidden bg-white">
                  <img
                    src={method.icon}
                    alt={method.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-sm md:text-base font-medium text-black">
                      {method.name}
                    </h3>
                    {method.isPrimary && (
                      <span className="px-2.5 py-1 bg-[#3CC27B]/30 rounded-full text-[10px] text-black">
                        Primary
                      </span>
                    )}
                  </div>
                  <p className="text-xs md:text-sm text-black font-light mb-2">
                    {method.subtitle}
                  </p>
                  <p className="text-[11px] md:text-xs text-black font-light truncate">
                    {method.account}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={() => handleEdit(method)}
                  className="p-1.5 hover:bg-white/50 rounded transition-colors"
                  aria-label="Edit"
                >
                  <Pencil className="w-4 h-4 text-black" />
                </button>
                <button
                  onClick={() => handleDelete(method.id)}
                  className="p-1.5 hover:bg-white/50 rounded transition-colors"
                  aria-label="Delete"
                >
                  <Trash2 className="w-4 h-4 text-[#FA1818]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Bank Details Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-[850px] p-5 md:p-6 lg:p-8">
          <DialogHeader>
            <DialogTitle className="text-base md:text-lg font-medium text-black mb-6">
              Edit Bank Details
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 md:space-y-8">
            {/* Row 1: Country and Bank */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="text-sm md:text-base font-medium text-black">
                  Select Country
                </label>
                <Select
                  value={formData.country}
                  onValueChange={(value) => handleInputChange("country", value)}
                >
                  <SelectTrigger className="w-full h-12 md:h-14 bg-[#F0F0F0] rounded-md border-none">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="India">India</SelectItem>
                    <SelectItem value="USA">USA</SelectItem>
                    <SelectItem value="UK">UK</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm md:text-base font-medium text-black">
                  Select Bank
                </label>
                <Select
                  value={formData.bank}
                  onValueChange={(value) => handleInputChange("bank", value)}
                >
                  <SelectTrigger className="w-full h-12 md:h-14 bg-[#F0F0F0] rounded-md border-none">
                    <SelectValue placeholder="State Bank of India" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="State Bank of India">
                      State Bank of India
                    </SelectItem>
                    <SelectItem value="HDFC Bank">HDFC Bank</SelectItem>
                    <SelectItem value="ICICI Bank">ICICI Bank</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 2: Account Number and Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="text-sm md:text-base font-medium text-black">
                  Account Number
                </label>
                <Input
                  type="text"
                  value={formData.accountNumber}
                  onChange={(e) =>
                    handleInputChange("accountNumber", e.target.value)
                  }
                  placeholder="123456789"
                  className="w-full h-12 md:h-14 bg-[#F0F0F0] border-[#CACACA] rounded-md"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm md:text-base font-medium text-black">
                  Account Type
                </label>
                <Select
                  value={formData.accountType}
                  onValueChange={(value) =>
                    handleInputChange("accountType", value)
                  }
                >
                  <SelectTrigger className="w-full h-12 md:h-14 bg-[#F0F0F0] rounded-md border-none">
                    <SelectValue placeholder="Savings" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Savings">Savings</SelectItem>
                    <SelectItem value="Current">Current</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 3: Holder Name and IFSC */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="text-sm md:text-base font-medium text-black">
                  Account Holder Name
                </label>
                <Input
                  type="text"
                  value={formData.holderName}
                  onChange={(e) =>
                    handleInputChange("holderName", e.target.value)
                  }
                  placeholder="Yogesh Neware"
                  className="w-full h-12 md:h-14 bg-[#F0F0F0] border-[#CACACA] rounded-md"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm md:text-base font-medium text-black">
                  IFSC Code
                </label>
                <Input
                  type="text"
                  value={formData.ifscCode}
                  onChange={(e) => handleInputChange("ifscCode", e.target.value)}
                  placeholder="123456"
                  className="w-full h-12 md:h-14 bg-[#F0F0F0] border-[#CACACA] rounded-md"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                onClick={handleSave}
                className="bg-black hover:bg-black/90 text-white px-8 md:px-16 h-10 md:h-11 rounded-md border border-[#C3C3C3] text-xs md:text-sm"
              >
                Save Changes
              </Button>
              <Button
                onClick={() => setIsEditModalOpen(false)}
                variant="outline"
                className="bg-white hover:bg-gray-50 text-black px-8 md:px-16 h-10 md:h-11 rounded-md border border-[#C3C3C3] text-xs md:text-sm"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
}
