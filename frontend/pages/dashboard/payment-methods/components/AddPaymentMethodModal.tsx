import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PaymentMethodOption {
  id: string;
  name: string;
  description: string;
  minAmount: string;
  maxAmount: string;
  icon: string;
}

interface AddPaymentMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMethod: (methodType: string) => void;
}

export default function AddPaymentMethodModal({
  isOpen,
  onClose,
  onSelectMethod,
}: AddPaymentMethodModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const paymentOptions: PaymentMethodOption[] = [
    {
      id: "upi",
      name: "UPI Payment",
      description: "UPI (Google Pay, PhonePe, Paytm)",
      minAmount: "Rs500",
      maxAmount: "Rs100,000",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d1d6bd516909e21fac1ea7f96e71486c9c8ec838?width=80",
    },
    {
      id: "bank",
      name: "Bank Account",
      description: "Direct bank account transfers",
      minAmount: "Rs500",
      maxAmount: "Rs100,000",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d1d6bd516909e21fac1ea7f96e71486c9c8ec838?width=80",
    },
    {
      id: "paypal",
      name: "Paypal",
      description: "Paypal Wallet",
      minAmount: "Rs500",
      maxAmount: "Rs100,000",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d1d6bd516909e21fac1ea7f96e71486c9c8ec838?width=80",
    },
    {
      id: "usdt",
      name: "USDT Wallet",
      description: "Cryptocurrency Transfers",
      minAmount: "Rs1,000",
      maxAmount: "Rs100,000",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d1d6bd516909e21fac1ea7f96e71486c9c8ec838?width=80",
    },
    {
      id: "skrill",
      name: "Skrill Wallet",
      description: "Digital wallet",
      minAmount: "Rs1,000",
      maxAmount: "Rs2,00,000",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d1d6bd516909e21fac1ea7f96e71486c9c8ec838?width=80",
    },
  ];

  const handleAdd = () => {
    if (selectedMethod) {
      onSelectMethod(selectedMethod);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[650px] p-5 md:p-6">
        <DialogHeader>
          <DialogTitle className="text-base md:text-lg font-medium text-black mb-6">
            Choose Payment Method to Add
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Payment Method Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {paymentOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedMethod(option.id)}
                className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                  selectedMethod === option.id
                    ? "border-2 border-[#3CC27B] bg-[#F8F8F8]"
                    : "border border-transparent bg-[#F8F8F8] hover:border-gray-300"
                }`}
              >
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-[#D5D5D5] flex-shrink-0 overflow-hidden bg-white">
                  <img
                    src={option.icon}
                    alt={option.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xs md:text-sm font-medium text-black mb-1">
                    {option.name}
                  </h3>
                  <p className="text-[11px] md:text-xs text-black font-light mb-2">
                    {option.description}
                  </p>
                  <p className="text-[9px] md:text-[10px] text-black font-light leading-relaxed">
                    Min : {option.minAmount}
                    <br />
                    Max : {option.maxAmount}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              onClick={handleAdd}
              disabled={!selectedMethod}
              className="bg-black hover:bg-black/90 text-white px-8 md:px-16 h-9 md:h-10 rounded-md border border-[#C3C3C3] text-xs md:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="bg-white hover:bg-gray-50 text-black px-8 md:px-16 h-9 md:h-10 rounded-md border border-[#C3C3C3] text-xs md:text-sm"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
