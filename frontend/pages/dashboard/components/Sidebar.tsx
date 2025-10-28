import { Link, useLocation } from "react-router-dom";
import {
  TrendingUp,
  Wallet,
  CreditCard,
  History,
  Shield,
  User,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const navItems = [
    {
      icon: TrendingUp,
      label: "Buy / Sell Crypto",
      href: "/buy-crypto",
      external: false,
    },
    {
      icon: Wallet,
      label: "Deposit/Withdraw",
      href: "/deposit-withdraw",
      external: false,
    },
    {
      icon: Wallet,
      label: "My Wallet",
      href: "/dashboard/my-wallet",
      external: false,
    },
    {
      icon: CreditCard,
      label: "Payment Methods",
      href: "/deposit-withdraw",
      external: false,
    },
    { icon: History, label: "History", href: "#", external: false },
    { icon: Shield, label: "Wallet Security", href: "#", external: false },
    { icon: User, label: "My Profile", href: "#", external: false },
  ];

  // Sub-menu items for quick access to crypto operations
  const cryptoOperations = [
    { label: "Deposit Crypto", href: "/deposit-crypto" },
    { label: "Withdraw Crypto", href: "/withdraw-crypto" },
    { label: "Buy Crypto", href: "/buy-crypto" },
    { label: "Sell Crypto", href: "/sell-crypto" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative md:flex md:flex-col md:w-64 w-full h-screen md:h-auto bg-white rounded-lg overflow-y-auto z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-[#3CC27B] px-4 md:px-6 py-3 md:py-4 flex items-center gap-3 text-white sticky top-0">
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <path
              d="M0 13.2857V5.57143C0 5.3 0.0621248 5.04286 0.186375 4.8C0.310625 4.55714 0.481833 4.35714 0.7 4.2L5.95 0.342857C6.25625 0.114286 6.60625 0 7 0C7.39375 0 7.74375 0.114286 8.05 0.342857L13.3 4.2C13.5187 4.35714 13.6902 4.55714 13.8145 4.8C13.9387 5.04286 14.0006 5.3 14 5.57143V13.2857C14 13.7571 13.8285 14.1609 13.4855 14.4969C13.1425 14.8329 12.7307 15.0006 12.25 15H9.625C9.37708 15 9.16941 14.9177 9.002 14.7531C8.83458 14.5886 8.75058 14.3851 8.75 14.1429V9.85714C8.75 9.61428 8.666 9.41086 8.498 9.24686C8.33 9.08286 8.12233 9.00057 7.875 9H6.125C5.87708 9 5.66942 9.08228 5.502 9.24686C5.33458 9.41143 5.25058 9.61486 5.25 9.85714V14.1429C5.25 14.3857 5.166 14.5894 4.998 14.754C4.83 14.9186 4.62233 15.0006 4.375 15H1.75C1.26875 15 0.856916 14.8323 0.5145 14.4969C0.172083 14.1614 0.000583333 13.7577 0 13.2857Z"
              fill="white"
            />
          </svg>
          <span className="text-base md:text-lg font-semibold">Dashboard</span>
        </div>

        <nav className="p-4 md:p-6 space-y-4 md:space-y-7 flex-1 overflow-y-auto">
          {/* Main Navigation Items */}
          {navItems.map((item) => {
            const Icon = item.icon;
            const isExternal = item.external;

            if (isExternal) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 text-black hover:text-[#3CC27B] transition-colors text-sm md:text-base"
                >
                  <Icon className="w-4 md:w-[18px] h-4 md:h-[18px] flex-shrink-0" />
                  <span>{item.label}</span>
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={onClose}
                className="flex items-center gap-3 text-black hover:text-[#3CC27B] transition-colors text-sm md:text-base"
              >
                <Icon className="w-4 md:w-[18px] h-4 md:h-[18px] flex-shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}

          {/* Quick Access Section */}
          <div className="pt-4 md:pt-6 border-t border-gray-200">
            <p className="text-xs md:text-[12px] font-semibold text-[#838383] uppercase mb-3">
              Quick Access
            </p>
            <div className="space-y-2">
              {cryptoOperations.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={onClose}
                  className="flex items-center gap-2 px-2 md:px-3 py-1.5 md:py-2 rounded text-black hover:bg-[#F0F0F0] hover:text-[#3CC27B] transition-colors text-xs md:text-[13px]"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#3CC27B]"></span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="p-4 md:p-6 border-t md:border-t border-gray-200">
          <Link
            to="/"
            className="flex items-center gap-2 px-3 md:px-4 py-2 bg-[#EBEBEB] rounded text-black text-xs md:text-[15px] hover:bg-gray-300 transition-colors w-full justify-center"
          >
            <span>Logout</span>
            <LogOut className="w-3.5 md:w-4 h-3.5 md:h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
