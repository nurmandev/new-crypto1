import { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";
import { Calendar, Camera, Eye, EyeOff } from "lucide-react";

type Tab = "profile" | "security" | "preferences";

export default function Profile() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>("profile");
  const [formData, setFormData] = useState({
    fullName: "Yogesh Webcrowd",
    email: "yogesh123@gmail.com",
    dateOfBirth: "24 January 1990",
    address: "123 Main Street, Mumbai, Maharashtra 400001",
    username: "@yogesh123",
    phoneNumber: "+91 123456789",
    bio: "",
  });

  const [securityData, setSecurityData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    currentPin: "",
    newPin: "",
  });

  const [preferencesData, setPreferencesData] = useState({
    emailNotifications: true,
    smsNotifications: false,
    language: "English",
    currency: "INR (₹)",
    timezone: "Indian Standard Time (IST)",
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSecurityInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSecurityData({
      ...securityData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password update:", securityData);
  };

  const handlePinChange = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pin change:", securityData);
  };

  const handlePreferencesChange = (field: string, value: string | boolean) => {
    setPreferencesData({
      ...preferencesData,
      [field]: value,
    });
  };

  const handlePreferencesSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Preferences saved:", preferencesData);
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
          <div className="bg-white rounded-lg p-6 md:p-8 lg:p-10">
            {/* Header */}
            <div className="mb-6 md:mb-8">
              <h1 className="text-lg md:text-xl font-medium text-black mb-1 md:mb-2">
                Profile Settings
              </h1>
              <p className="text-sm md:text-base text-[#838383]">
                Manage your account settings and preferences
              </p>
            </div>

            {/* Tabs */}
            <div className="mb-6 md:mb-8">
              <div className="bg-[#F0F0F0] rounded-md p-1 inline-flex gap-1">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`px-6 md:px-12 py-2 rounded text-base md:text-lg font-medium transition-colors ${
                    activeTab === "profile"
                      ? "bg-white text-black"
                      : "bg-transparent text-black"
                  }`}
                >
                  Profile Info
                </button>
                <button
                  onClick={() => setActiveTab("security")}
                  className={`px-6 md:px-12 py-2 rounded text-base md:text-lg font-medium transition-colors ${
                    activeTab === "security"
                      ? "bg-white text-black"
                      : "bg-transparent text-black"
                  }`}
                >
                  Security
                </button>
                <button
                  onClick={() => setActiveTab("sell")}
                  className={`px-6 md:px-12 py-2 rounded text-base md:text-lg font-medium transition-colors ${
                    activeTab === "sell"
                      ? "bg-white text-black"
                      : "bg-transparent text-black"
                  }`}
                >
                  Sell Crypto
                </button>
              </div>
            </div>

            {activeTab === "profile" && (
              <>
                {/* Profile Card */}
                <div className="bg-gradient-to-r from-[#3CC27B] to-[#00602D] rounded-lg p-6 md:p-8 mb-8 md:mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-[475px]">
                  <div className="relative">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-300 border-4 border-white overflow-hidden">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/profile-placeholder"
                        alt="Profile"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                    <button className="absolute bottom-0 right-0 w-8 h-7 bg-white rounded flex items-center justify-center">
                      <Camera className="w-4 h-4 text-black" />
                    </button>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-base md:text-lg font-medium text-white mb-1">
                      Yogesh Webcrowd
                    </h2>
                    <p className="text-sm md:text-base text-white mb-2">
                      @yogesh123
                    </p>
                    <p className="text-xs text-white">
                      Member since January 2024
                    </p>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8">
                    {/* Full Name */}
                    <div>
                      <label className="block text-base md:text-lg font-medium text-black mb-3">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Yogesh Webcrowd"
                        className="w-full h-[51px] px-4 md:px-[27px] py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-base text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors"
                      />
                    </div>

                    {/* Username */}
                    <div>
                      <label className="block text-base md:text-lg font-medium text-black mb-3">
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="@yogesh123"
                        className="w-full h-[51px] px-4 md:px-[27px] py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-base text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-base md:text-lg font-medium text-black mb-3">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="yogesh123@gmail.com"
                        className="w-full h-[51px] px-4 md:px-[27px] py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-base text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-base md:text-lg font-medium text-black mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="+91 123456789"
                        className="w-full h-[51px] px-4 md:px-[27px] py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-base text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors"
                      />
                    </div>

                    {/* Date of Birth */}
                    <div>
                      <label className="block text-base md:text-lg font-medium text-black mb-3">
                        Date of Birth
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          placeholder="24 January 1990"
                          className="w-full h-[51px] px-4 md:px-[27px] py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-base text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors pr-12"
                        />
                        <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
                      </div>
                    </div>

                    {/* Address */}
                    <div className="lg:col-span-1">
                      <label className="block text-base md:text-lg font-medium text-black mb-3">
                        Address
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="123 Main Street, Mumbai, Maharashtra 400001"
                        rows={4}
                        className="w-full px-4 md:px-[27px] py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-base text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors resize-none"
                      />
                    </div>

                    {/* Bio */}
                    <div className="lg:col-span-1">
                      <label className="block text-base md:text-lg font-medium text-black mb-3">
                        Bio
                      </label>
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        placeholder="Write about Yourself"
                        rows={4}
                        className="w-full px-4 md:px-[27px] py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-base text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-black text-white rounded-md border-[0.5px] border-[#C3C3C3] px-12 md:px-[60px] py-3 md:py-[9px] text-sm md:text-base font-medium hover:bg-gray-900 transition-colors h-[51px]"
                  >
                    Save Changes
                  </button>
                </form>
              </>
            )}

            {activeTab === "security" && (
              <div className="max-w-[1182px]">
                {/* Change Password Section */}
                <div className="mb-10 md:mb-12">
                  <h2 className="text-lg md:text-xl font-medium text-black mb-6 md:mb-8">
                    Change Password
                  </h2>
                  <form onSubmit={handlePasswordUpdate}>
                    <div className="space-y-6">
                      {/* Current Password */}
                      <div>
                        <label className="block text-base md:text-[17px] font-medium text-black mb-2">
                          Current Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword.current ? "text" : "password"}
                            name="currentPassword"
                            value={securityData.currentPassword}
                            onChange={handleSecurityInputChange}
                            placeholder="****************"
                            className="w-full h-[51px] px-4 md:px-[27px] py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-[15px] text-[#8E8E8E] placeholder:text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors pr-12"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowPassword({
                                ...showPassword,
                                current: !showPassword.current,
                              })
                            }
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-black hover:text-gray-600"
                          >
                            {showPassword.current ? (
                              <EyeOff className="w-[14px] h-[14px]" />
                            ) : (
                              <Eye className="w-[14px] h-[14px]" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* New Password and Confirm Password */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* New Password */}
                        <div>
                          <label className="block text-base md:text-[17px] font-medium text-black mb-2">
                            New Password
                          </label>
                          <div className="relative">
                            <input
                              type={showPassword.new ? "text" : "password"}
                              name="newPassword"
                              value={securityData.newPassword}
                              onChange={handleSecurityInputChange}
                              className="w-full h-[51px] px-4 md:px-[27px] py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-[15px] text-black focus:outline-none focus:border-[#3CC27B] transition-colors pr-12"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowPassword({
                                  ...showPassword,
                                  new: !showPassword.new,
                                })
                              }
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-black hover:text-gray-600"
                            >
                              {showPassword.new ? (
                                <EyeOff className="w-[14px] h-[14px]" />
                              ) : (
                                <Eye className="w-[14px] h-[14px]" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                          <label className="block text-base md:text-[17px] font-medium text-black mb-2">
                            Confirm Password
                          </label>
                          <div className="relative">
                            <input
                              type={showPassword.confirm ? "text" : "password"}
                              name="confirmPassword"
                              value={securityData.confirmPassword}
                              onChange={handleSecurityInputChange}
                              className="w-full h-[51px] px-4 md:px-[27px] py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-[15px] text-black focus:outline-none focus:border-[#3CC27B] transition-colors pr-12"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowPassword({
                                  ...showPassword,
                                  confirm: !showPassword.confirm,
                                })
                              }
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-black hover:text-gray-600"
                            >
                              {showPassword.confirm ? (
                                <EyeOff className="w-[14px] h-[14px]" />
                              ) : (
                                <Eye className="w-[14px] h-[14px]" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Update Password Button */}
                      <button
                        type="submit"
                        className="bg-black text-white rounded-md border-[0.5px] border-[#C3C3C3] px-12 md:px-[60px] py-3 md:py-[9px] text-sm md:text-[15px] font-medium hover:bg-gray-900 transition-colors h-[51px] inline-flex items-center justify-center gap-2"
                      >
                        Update Password
                      </button>
                    </div>
                  </form>
                </div>

                {/* Wallet Security Section */}
                <div>
                  <h2 className="text-lg md:text-xl font-medium text-black mb-2">
                    Wallet Security
                  </h2>
                  <p className="text-sm md:text-[17px] text-[#838383] mb-6 md:mb-8">
                    Secure your wallet with a PIN
                  </p>

                  {/* PIN Protection Info Box */}
                  <div className="w-full max-w-[601px] rounded-[9px] border-l-2 border-[#3CC27B] bg-[rgba(60,194,123,0.31)] p-6 mb-6 md:mb-8">
                    <h4 className="text-sm md:text-[15px] font-medium text-black leading-[33px] mb-1">
                      Wallet PIN Protection
                    </h4>
                    <p className="text-xs md:text-[13px] font-light text-black leading-[22px]">
                      Your wallet is protected with a secure PIN. Lock your
                      wallet to prevent unauthorized transactions.
                    </p>
                  </div>

                  {/* PIN Change Form */}
                  <form onSubmit={handlePinChange}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                      {/* Enter Pin To Lock Wallet */}
                      <div>
                        <label className="block text-base md:text-[17px] font-medium text-black mb-2">
                          Enter Pin To Lock Wallet
                        </label>
                        <input
                          type="password"
                          name="currentPin"
                          value={securityData.currentPin}
                          onChange={handleSecurityInputChange}
                          placeholder="Enter Your Current Pin"
                          maxLength={6}
                          className="w-full h-[51px] px-4 md:px-[27px] py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-[15px] text-black placeholder:text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors"
                        />
                      </div>

                      {/* Set New Pin */}
                      <div>
                        <label className="block text-base md:text-[17px] font-medium text-black mb-2">
                          Set New Pin
                        </label>
                        <input
                          type="password"
                          name="newPin"
                          value={securityData.newPin}
                          onChange={handleSecurityInputChange}
                          placeholder="Enter Your 6-digit Pin"
                          maxLength={6}
                          className="w-full h-[51px] px-4 md:px-[27px] py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-[15px] text-black placeholder:text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Change Pin Button */}
                    <button
                      type="submit"
                      className="bg-black text-white rounded-md border-[0.5px] border-[#C3C3C3] px-12 md:px-[60px] py-3 md:py-[9px] text-sm md:text-[15px] font-medium hover:bg-gray-900 transition-colors h-[51px] inline-flex items-center justify-center gap-2"
                    >
                      Change Pin
                    </button>
                  </form>
                </div>
              </div>
            )}

            {activeTab === "sell" && (
              <div className="py-8 text-center text-gray-500">
                <h3 className="text-xl font-medium mb-2">Sell Crypto</h3>
                <p>Sell crypto content coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
