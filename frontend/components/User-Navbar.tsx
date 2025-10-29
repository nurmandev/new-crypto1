import React from "react";
import { Link } from "react-router-dom";
import { Bell } from "lucide-react";


const UserNavbar = () => {
  return (
    <div className="bg-white rounded-[10px] mx-4 sm:mx-6 lg:mx-12 mt-4 sm:mt-6 px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-8 sm:h-10 w-auto object-contain"
        />
      </Link>

      {/* Dashboard Title (hidden on small screens) */}
      <h1 className="text-2xl sm:text-3xl font-['Russo_One'] text-black hidden md:block">
        Dashboard
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Go to Home Button */}
        <Link
          to="/"
          className="px-5 sm:px-7 py-2 bg-[#161616] text-white text-sm sm:text-[15px] font-medium rounded-md hover:bg-black/80 transition-colors"
        >
          Go to Home
        </Link>

        {/* Profile Circle */}
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#D9D9D9] cursor-pointer"></div>

        {/* Notification Icon */}
        <div className="relative">
          <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-[#C7C7C7]" />
          <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#3CC27B] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
