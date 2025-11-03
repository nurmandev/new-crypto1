import { useState } from "react";
import DashboardLayout from "./components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Plus } from "lucide-react";
import EditUPIModal from "./payment-methods/components/EditUPIModal";
import EditBankModal from "./payment-methods/components/EditBankModal";
import AddPaymentMethodModal from "./payment-methods/components/AddPaymentMethodModal";

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
  const [isUPIModalOpen, setIsUPIModalOpen] = useState(false);
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);

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
    if (method.type === "UPI") {
      setIsUPIModalOpen(true);
    } else if (method.type === "Bank") {
      setIsBankModalOpen(true);
    }
  };

  const handleDelete = (id: string) => {
    console.log("Delete method:", id);
  };

  const handleUPISave = (data: { upiId: string; qrCode: File | null }) => {
    console.log("UPI Data:", data);
  };

  const handleBankSave = (data: any) => {
    console.log("Bank Data:", data);
  };

  const handleSelectPaymentMethod = (methodType: string) => {
    console.log("Selected method type:", methodType);
    // Open the appropriate modal based on the selected method type
    if (methodType === "upi") {
      setIsUPIModalOpen(true);
    } else if (methodType === "bank") {
      setIsBankModalOpen(true);
    }
    // For other types, you can add similar logic
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
            onClick={() => setIsAddModalOpen(true)}
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

      {/* Add Payment Method Modal */}
      <AddPaymentMethodModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSelectMethod={handleSelectPaymentMethod}
      />

      {/* Edit UPI Modal */}
      <EditUPIModal
        isOpen={isUPIModalOpen}
        onClose={() => setIsUPIModalOpen(false)}
        onSave={handleUPISave}
        initialUpiId="yneware7@oksbi"
      />

      {/* Edit Bank Modal */}
      <EditBankModal
        isOpen={isBankModalOpen}
        onClose={() => setIsBankModalOpen(false)}
        onSave={handleBankSave}
      />
    </DashboardLayout>
  );
}
