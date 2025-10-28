import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";
import { Lock, ChevronRight } from "lucide-react";

export default function MyWallet() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pin, setPin] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handlePinChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Log PIN to console
    const pinString = newPin.join("");
    console.log("Current PIN:", pinString);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    
    if (!/^\d+$/.test(pastedData)) return;

    const newPin = [...pin];
    pastedData.split("").forEach((char, index) => {
      if (index < 6) {
        newPin[index] = char;
      }
    });
    setPin(newPin);
    
    // Log PIN to console
    console.log("Current PIN:", newPin.join(""));

    // Focus the next empty input or the last one
    const nextEmptyIndex = newPin.findIndex((p) => !p);
    const focusIndex = nextEmptyIndex !== -1 ? nextEmptyIndex : 5;
    inputRefs.current[focusIndex]?.focus();
  };

  const handleUnlock = () => {
    const fullPin = pin.join("");
    console.log("Unlocking wallet with PIN:", fullPin);
    
    if (fullPin.length === 6) {
      // Here you would validate the PIN
      // For now, just log it
      console.log("Wallet unlocked!");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] pb-12 md:pb-16">
      {/* Top Navigation Bar */}
      <DashboardHeader
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isMenuOpen={isSidebarOpen}
      />

      <div className="px-4 md:px-6 lg:px-12 mt-4 md:mt-6 flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* Sidebar Navigation */}
        <div className="flex-shrink-0">
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white rounded-lg p-6 md:p-8 lg:p-12">
            {/* Wallet Locked Section */}
            <div className="max-w-md mx-auto">
              {/* Lock Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 rounded-full bg-[#FDBDBD]/45 flex items-center justify-center">
                  <Lock className="w-8 h-8 text-[#FA1818]" />
                </div>
              </div>

              {/* Title */}
              <h1 className="text-xl md:text-2xl font-semibold text-black text-center mb-2">
                Wallet Locked
              </h1>

              {/* Subtitle */}
              <p className="text-[#838383] text-center mb-8 text-sm md:text-base">
                Enter your PIN to access your wallet
              </p>

              {/* PIN Input Boxes */}
              <div className="flex justify-center gap-2 md:gap-3 mb-8">
                {pin.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handlePinChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className="w-12 h-12 md:w-14 md:h-14 text-center text-lg md:text-xl font-bold text-[#8E8E8E] border border-[#CACACA] rounded bg-[#F0F0F0] focus:outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                    placeholder="2"
                  />
                ))}
              </div>

              {/* Unlock Button */}
              <button
                onClick={handleUnlock}
                disabled={pin.join("").length !== 6}
                className="w-full flex items-center justify-center gap-2 py-3 md:py-4 px-6 bg-black text-white rounded-md border border-[#C3C3C3] hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all mb-4"
              >
                <span className="text-sm md:text-base">Unlock Wallet</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Help Text */}
              <div className="text-center space-y-3">
                <p className="text-[#838383] text-xs md:text-sm">
                  Don't have a PIN set up?
                </p>
                <button
                  onClick={() => navigate("/wallet-security")}
                  className="text-[#3CC27B] font-bold text-xs md:text-sm hover:underline"
                >
                  Go to Wallet Security to set up PIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
