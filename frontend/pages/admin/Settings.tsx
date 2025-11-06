import { useState } from "react";
import { AdminHeader } from "./components/AdminHeader";
import { AdminSidebar } from "./components/AdminSidebar";

export const Settings = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <AdminSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="lg:ml-[259px]">
        <AdminHeader onMenuClick={() => setIsSidebarOpen(true)} />

        <div className="p-4 sm:p-6 lg:p-8">
          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-xl sm:text-2xl font-medium text-black mb-2">
                Website Settings
              </h1>
              <p className="text-base sm:text-lg text-[#838383]">
                Manage your website configuration and appearance
              </p>
            </div>

            {/* Site Information */}
            <section className="mb-12">
              <h2 className="text-lg sm:text-xl font-medium text-black mb-6">
                Site Information
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Site Name */}
                <div>
                  <label className="block text-base sm:text-lg font-medium text-black mb-2">
                    Site Name
                  </label>
                  <input
                    type="text"
                    defaultValue="USDTmpay"
                    className="w-full h-[51px] px-5 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Site Title */}
                <div>
                  <label className="block text-base sm:text-lg font-medium text-black mb-2">
                    Site Title
                  </label>
                  <input
                    type="text"
                    defaultValue="Usdtmpay - Secure Cryptocurrency Exchange Platform"
                    className="w-full h-[51px] px-5 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Site Description */}
                <div className="lg:col-span-2">
                  <label className="block text-base sm:text-lg font-medium text-black mb-2">
                    Site Description
                  </label>
                  <textarea
                    rows={4}
                    defaultValue="Trade cryptocurrencies securely with CryptoCrowd. Buy and sell Bitcoin, Ethereum and more."
                    className="w-full px-5 py-3 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all resize-none"
                  />
                </div>

                {/* SEO Keywords */}
                <div>
                  <label className="block text-base sm:text-lg font-medium text-black mb-2">
                    SEO Keywords
                  </label>
                  <input
                    type="text"
                    defaultValue="cryptocurrency, bitcoin, ethereum, trading, exchange"
                    className="w-full h-[51px] px-5 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Author */}
                <div>
                  <label className="block text-base sm:text-lg font-medium text-black mb-2">
                    Author
                  </label>
                  <input
                    type="text"
                    defaultValue="USDTmpay Team"
                    className="w-full h-[51px] px-5 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>
              </div>
            </section>

            {/* Branding & Assets */}
            <section className="mb-12">
              <h2 className="text-lg sm:text-xl font-medium text-black mb-6">
                Branding & Assets
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Logo Upload */}
                <div>
                  <label className="block text-base sm:text-lg font-medium text-black mb-2">
                    Logo Upload
                  </label>
                  <label className="block w-full h-[165px] cursor-pointer">
                    <div className="w-full h-full rounded-lg border-2 border-dashed border-[#BABABA] flex flex-col items-center justify-center gap-3 hover:border-[#3CC27B] hover:bg-[#F8F8F8] transition-all">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-black"
                      >
                        <path
                          d="M8.75 15V4.8125L5.5 8.0625L3.75 6.25L10 0L16.25 6.25L14.5 8.0625L11.25 4.8125V15H8.75ZM0 20V13.75H2.5V17.5H17.5V13.75H20V20H0Z"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="text-sm font-light text-black text-center leading-snug">
                        Click to upload logo
                        <br />
                        PNG, JPG up to 2MB
                      </p>
                    </div>
                    <input type="file" className="hidden" accept="image/*" />
                  </label>
                </div>

                {/* Favicon Upload */}
                <div>
                  <label className="block text-base sm:text-lg font-medium text-black mb-2">
                    Favicon Upload
                  </label>
                  <label className="block w-full h-[165px] cursor-pointer">
                    <div className="w-full h-full rounded-lg border-2 border-dashed border-[#BABABA] flex flex-col items-center justify-center gap-3 hover:border-[#3CC27B] hover:bg-[#F8F8F8] transition-all">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-black"
                      >
                        <path
                          d="M8.75 15V4.8125L5.5 8.0625L3.75 6.25L10 0L16.25 6.25L14.5 8.0625L11.25 4.8125V15H8.75ZM0 20V13.75H2.5V17.5H17.5V13.75H20V20H0Z"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="text-sm font-light text-black text-center leading-snug">
                        Click to upload logo
                        <br />
                        PNG, JPG up to 2MB
                      </p>
                    </div>
                    <input type="file" className="hidden" accept="image/*" />
                  </label>
                </div>
              </div>
            </section>

            {/* Colors & Typography */}
            <section className="mb-12">
              <h2 className="text-lg sm:text-xl font-medium text-black mb-6">
                Colors & Typography
              </h2>

              {/* Color Pickers */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-6">
                {/* Primary Color */}
                <div>
                  <label className="block text-base sm:text-lg font-medium text-black mb-2">
                    Primary Color
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      defaultValue="#6366F1"
                      className="w-[51px] h-[51px] rounded-lg border-2 border-[#BFBFBF] cursor-pointer"
                    />
                    <input
                      type="text"
                      defaultValue="#63553f1"
                      className="flex-1 h-[51px] px-3 rounded-lg border border-[#E0E0E0] bg-white text-sm text-[#8E8E8E] outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Secondary Color */}
                <div>
                  <label className="block text-base sm:text-lg font-medium text-black mb-2">
                    Secondary Color
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      defaultValue="#8B5CF6"
                      className="w-[51px] h-[51px] rounded-lg border-2 border-[#BFBFBF] cursor-pointer"
                    />
                    <input
                      type="text"
                      defaultValue="#63553f1"
                      className="flex-1 h-[51px] px-3 rounded-lg border border-[#E0E0E0] bg-white text-sm text-[#8E8E8E] outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Accent Color */}
                <div>
                  <label className="block text-base sm:text-lg font-medium text-black mb-2">
                    Accent Color
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      defaultValue="#6FECC2"
                      className="w-[51px] h-[51px] rounded-lg border-2 border-[#BFBFBF] cursor-pointer"
                    />
                    <input
                      type="text"
                      defaultValue="#63553f1"
                      className="flex-1 h-[51px] px-3 rounded-lg border border-[#E0E0E0] bg-white text-sm text-[#8E8E8E] outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Background Color */}
                <div>
                  <label className="block text-base sm:text-lg font-medium text-black mb-2">
                    Background Color
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      defaultValue="#FFFFFF"
                      className="w-[51px] h-[51px] rounded-lg border-2 border-[#BFBFBF] cursor-pointer"
                    />
                    <input
                      type="text"
                      defaultValue="#63553f1"
                      className="flex-1 h-[51px] px-3 rounded-lg border border-[#E0E0E0] bg-white text-sm text-[#8E8E8E] outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Text Color */}
                <div>
                  <label className="block text-base sm:text-lg font-medium text-black mb-2">
                    Text Color
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      defaultValue="#1A1B23"
                      className="w-[51px] h-[51px] rounded-lg border-2 border-[#BFBFBF] cursor-pointer"
                    />
                    <input
                      type="text"
                      defaultValue="#63553f1"
                      className="flex-1 h-[51px] px-3 rounded-lg border border-[#E0E0E0] bg-white text-sm text-[#8E8E8E] outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Font Family */}
              <div>
                <label className="block text-base sm:text-lg font-medium text-black mb-2">
                  Font Family
                </label>
                <input
                  type="text"
                  defaultValue="Roboto Bold"
                  className="w-full h-[51px] px-5 rounded-lg border border-[#E0E0E0] bg-white text-sm text-[#8E8E8E] outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                />
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-lg sm:text-xl font-medium text-black mb-6">
                Contact Information
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Support Email */}
                <div>
                  <label className="block text-base sm:text-lg font-medium text-black mb-2">
                    Support Email
                  </label>
                  <input
                    type="email"
                    defaultValue="USDTmpay"
                    className="w-full h-[51px] px-5 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Contact Email */}
                <div>
                  <label className="block text-base sm:text-lg font-medium text-black mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    defaultValue="Usdtmpay - Secure Cryptocurrency Exchange Platform"
                    className="w-full h-[51px] px-5 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Admin Email */}
                <div>
                  <label className="block text-base sm:text-lg font-medium text-black mb-2">
                    Admin Email
                  </label>
                  <input
                    type="email"
                    defaultValue="USDTmpay"
                    className="w-full h-[51px] px-5 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-base sm:text-lg font-medium text-black mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    defaultValue="+91 9876543210"
                    className="w-full h-[51px] px-5 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Business Address */}
                <div className="lg:col-span-2">
                  <label className="block text-base sm:text-lg font-medium text-black mb-2">
                    Business Address
                  </label>
                  <textarea
                    rows={4}
                    defaultValue="123 Crypto Street, Mumbai, Maharashtra 400001"
                    className="w-full px-5 py-3 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all resize-none"
                  />
                </div>
              </div>
            </section>

            {/* Security Settings */}
            <section className="mb-12">
              <h2 className="text-lg sm:text-xl font-medium text-black mb-6">
                Security Settings
              </h2>

              <div className="space-y-6">
                {/* Session Timeout */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-black">
                      Session Timeout
                    </h3>
                    <p className="text-sm text-black font-light mt-1">
                      Auto-logout after inactivity
                    </p>
                  </div>
                  <div className="relative">
                    <select className="h-[29px] px-3 pr-8 rounded bg-black text-white text-xs appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-[#3CC27B]/20">
                      <option>30 Minutes</option>
                      <option>1 Hour</option>
                      <option>2 Hours</option>
                      <option>4 Hours</option>
                    </select>
                    <svg
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none"
                      viewBox="0 0 13 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.65556 7.071L-0.0014382 1.414L1.41256 -4.94551e-07L6.36256 4.95L11.3126 -6.18079e-08L12.7266 1.414L7.06956 7.071C6.88203 7.25847 6.62773 7.36379 6.36256 7.36379C6.0974 7.36379 5.84309 7.25847 5.65556 7.071Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>

                {/* Maintenance Mode */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-black">
                      Maintenance Mode
                    </h3>
                    <p className="text-sm text-black font-light mt-1">
                      Enable maintenance mode for website
                    </p>
                  </div>
                  <button
                    onClick={() => setMaintenanceMode(!maintenanceMode)}
                    className={`relative w-[46px] h-5 rounded-full transition-colors ${
                      maintenanceMode ? "bg-[#3CC27B]" : "bg-[#D7D7D7]"
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-3.5 h-3.5 bg-white rounded-full transition-transform ${
                        maintenanceMode ? "translate-x-[30px]" : "translate-x-0.5"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </section>

            {/* Save Button */}
            <div className="flex justify-end pt-6 border-t border-[#E0E0E0]">
              <button className="px-8 py-3 bg-[#3CC27B] text-white text-base font-semibold rounded-lg hover:bg-[#35a869] transition-all shadow-sm">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
