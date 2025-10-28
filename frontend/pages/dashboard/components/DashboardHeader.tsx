import { Link } from "react-router-dom";
import { Bell, Menu, X, User } from "lucide-react";
import { useState } from "react";

interface DashboardHeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

export default function DashboardHeader({
  onMenuToggle,
  isMenuOpen,
}: DashboardHeaderProps) {
  return (
    <div className="bg-white rounded-lg mx-4 md:mx-6 lg:mx-12 mt-4 md:mt-6 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between shadow-sm sticky top-4 md:top-6 z-40">
      {/* Logo and Brand */}
      <Link to="/" className="flex items-center gap-2 flex-shrink-0">
        <div className="w-8 md:w-10 h-8 md:h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-base">
          U
        </div>
        <span className="text-base md:text-lg lg:text-xl font-bold text-gray-900 hidden sm:inline-block">
          USDTMPAY
        </span>
      </Link>

      {/* Center Title - Hidden on small screens */}
      <h1 className="text-xl md:text-2xl lg:text-3xl font-['Russo_One'] text-black hidden md:block absolute left-1/2 transform -translate-x-1/2">
        Dashboard
      </h1>

      {/* Right Actions */}
      <div className="flex items-center gap-2 md:gap-3 lg:gap-4 flex-shrink-0">
        <Link
          to="/"
          className="hidden sm:inline-block px-3 md:px-6 lg:px-9 py-1.5 md:py-2 bg-[#161616] text-white text-xs md:text-sm lg:text-[15px] font-medium rounded-md hover:bg-black/80 transition-colors"
        >
          Go to Home
        </Link>

        <button className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-[#D9D9D9] hover:bg-gray-300 transition-colors flex items-center justify-center flex-shrink-0">
          <User className="w-4 md:w-5 h-4 md:h-5 text-gray-600" />
        </button>

        <button className="relative flex-shrink-0 hover:opacity-80 transition-opacity">
          <Bell className="w-4 md:w-5 h-4 md:h-5 text-[#C7C7C7]" />
          <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#3CC27B] rounded-full"></div>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={onMenuToggle}
          className="md:hidden flex-shrink-0 hover:opacity-80 transition-opacity"
        >
          {isMenuOpen ? (
            <X className="w-5 h-5 text-gray-600" />
          ) : (
            <Menu className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>
    </div>
  );
}
