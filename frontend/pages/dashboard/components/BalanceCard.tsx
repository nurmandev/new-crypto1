import { Link } from "react-router-dom";
import {
  Plus,
  DollarSign,
  TrendingUp,
  Wallet,
  Eye,
  EyeOff,
} from "lucide-react";
import { useState } from "react";

export default function BalanceCard() {
  const [showBalance, setShowBalance] = useState(true);

  const actions = [
    {
      icon: Plus,
      label: "Add Balance",
      href: "#",
      external: false,
    },
    {
      icon: DollarSign,
      label: "Cashout",
      href: "#",
      external: false,
    },
    {
      icon: TrendingUp,
      label: "Buy",
      href: "/buy-crypto",
      external: false,
    },
    {
      icon: (props) => (
        <TrendingUp {...props} style={{ transform: "rotate(180deg)" }} />
      ),
      label: "Sell",
      href: "/sell-crypto",
      external: false,
    },
    {
      icon: Wallet,
      label: "Wallet",
      href: "#",
      external: false,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#3CC27B] to-[#00602D] rounded-lg md:rounded-[10px] p-4 md:p-6 lg:p-8 text-white shadow-lg">
      <div className="mb-4 md:mb-6">
        <p className="text-base md:text-lg lg:text-xl mb-2">Your Balance</p>
        <div className="flex items-center gap-2 md:gap-3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            {showBalance ? "₹5,656.6" : "₹••••••"}
          </h2>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="text-gray-200 hover:text-white transition-colors flex-shrink-0"
          >
            {showBalance ? (
              <Eye className="w-4 md:w-5 h-4 md:h-5" />
            ) : (
              <EyeOff className="w-4 md:w-5 h-4 md:h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          const isExternal = action.external;

          const buttonContent = (
            <>
              <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full border-4 md:border-[7px] border-[#3CC27B] bg-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform flex-shrink-0">
                <Icon
                  className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 text-[#3CC27B]"
                  strokeWidth={2.5}
                />
              </div>
              <span className="text-white font-medium text-center text-xs sm:text-sm md:text-base">
                {action.label}
              </span>
            </>
          );

          if (isExternal) {
            return (
              <a
                key={action.label}
                href={action.href}
                className="flex flex-col items-center gap-1 md:gap-2"
              >
                {buttonContent}
              </a>
            );
          }

          return (
            <Link
              key={action.label}
              to={action.href}
              className="flex flex-col items-center gap-1 md:gap-2"
            >
              {buttonContent}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
