import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";
import { Plus, Edit, Trash2 } from "lucide-react";

interface PaymentMethod {
  id: string;
  name: string;
  type: string;
  account: string;
  isPrimary: boolean;
  icon: string;
}

export default function PaymentMethods() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: "1",
      name: "UPI Payment",
      type: "UPI (Google Pay, PhonePe, Paytm)",
      account: "john@paytm",
      isPrimary: true,
      icon: "💳",
    },
    {
      id: "2",
      name: "Bank Account",
      type: "Bank Account (IMPS/NEFT/RTGS)",
      account: "State Bank of India",
      isPrimary: false,
      icon: "🏦",
    },
    {
      id: "3",
      name: "Paypal",
      type: "Paypal Wallet",
      account: "john.doe@example.com",
      isPrimary: false,
      icon: "💰",
    },
    {
      id: "4",
      name: "USDT Wallet",
      type: "TRC20 Network",
      account: "1A1zP1eP5Q...DivfNa...",
      isPrimary: false,
      icon: "₮",
    },
    {
      id: "5",
      name: "Skrill",
      type: "Skrill Wallet",
      account: "john.doe@example.com",
      isPrimary: false,
      icon: "💼",
    },
  ]);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this payment method?")) {
      setPaymentMethods(paymentMethods.filter((method) => method.id !== id));
    }
  };

  const handleSetPrimary = (id: string) => {
    setPaymentMethods(
      paymentMethods.map((method) => ({
        ...method,
        isPrimary: method.id === id,
      }))
    );
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] pb-12 md:pb-16">
      <DashboardHeader
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isMenuOpen={isSidebarOpen}
      />

      <div className="px-4 md:px-6 lg:px-12 mt-4 md:mt-6 flex flex-col lg:flex-row gap-4 md:gap-6">
        <div className="flex-shrink-0">
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </div>

        <div className="flex-1">
          <div className="bg-white rounded-lg p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h1 className="text-xl md:text-2xl font-medium text-black mb-2">
                  Payment Methods
                </h1>
                <p className="text-[#838383] text-sm md:text-base">
                  Manage your payment methods for deposits and withdrawals
                </p>
              </div>

              <button className="flex items-center gap-2 px-6 md:px-9 py-2 bg-[#161616] text-white rounded-md hover:bg-black transition-colors self-start sm:self-auto">
                <Plus className="w-4 h-4" />
                <span className="text-sm md:text-base">Payment Method</span>
              </button>
            </div>

            {/* Payment Methods Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="flex items-center justify-between p-4 md:p-5 bg-[#F8F8F8] rounded-lg"
                >
                  {/* Left Side - Icon and Info */}
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="w-9 h-9 rounded-full border border-[#D5D5D5] bg-white flex items-center justify-center text-xl flex-shrink-0">
                      {method.icon}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm md:text-base font-medium text-black">
                          {method.name}
                        </h3>
                        {method.isPrimary ? (
                          <span className="px-2.5 py-1 bg-[#3CC27B]/30 text-black text-xs rounded-full">
                            Primary
                          </span>
                        ) : (
                          <button
                            onClick={() => handleSetPrimary(method.id)}
                            className="px-2.5 py-1 bg-[#C7C7C7] text-black text-xs rounded-full hover:bg-[#B0B0B0] transition-colors"
                          >
                            Set Primary
                          </button>
                        )}
                      </div>
                      <p className="text-xs md:text-sm text-black mb-1">
                        {method.type}
                      </p>
                      <p className="text-xs text-black truncate">
                        Account: {method.account}
                      </p>
                    </div>
                  </div>

                  {/* Right Side - Actions */}
                  <div className="flex items-center gap-2 ml-4">
                    <button
                      className="text-black hover:text-[#3CC27B] transition-colors p-2"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(method.id)}
                      className="text-[#FA1818] hover:text-[#E01010] transition-colors p-2"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State (shown when no payment methods) */}
            {paymentMethods.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#838383] text-base md:text-lg mb-4">
                  No payment methods added yet
                </p>
                <button className="inline-flex items-center gap-2 px-6 py-2 bg-[#161616] text-white rounded-md hover:bg-black transition-colors">
                  <Plus className="w-4 h-4" />
                  <span>Add Your First Payment Method</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
