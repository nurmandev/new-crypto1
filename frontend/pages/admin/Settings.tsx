import { useState, useEffect } from "react";
import { AdminHeader } from "./components/AdminHeader";
import { AdminSidebar } from "./components/AdminSidebar";

const DEFAULT_SETTINGS = {
  siteName: "USDTmpay",
  siteTitle: "Usdtmpay - Secure Cryptocurrency Exchange Platform",
  siteDescription: "Trade cryptocurrencies securely with CryptoCrowd. Buy and sell Bitcoin, Ethereum and more.",
  seoKeywords: "cryptocurrency, bitcoin, ethereum, trading, exchange",
  author: "USDTmpay Team",
  primaryColor: "#6366F1",
  secondaryColor: "#8B5CF6",
  accentColor: "#6FECC2",
  backgroundColor: "#FFFFFF",
  textColor: "#1A1B23",
  fontFamily: "Roboto Bold",
  supportEmail: "support@usdtmpay.com",
  contactEmail: "contact@usdtmpay.com",
  adminEmail: "admin@usdtmpay.com",
  phone: "+91 9876543210",
  businessAddress: "123 Crypto Street, Mumbai, Maharashtra 400001",
  sessionTimeout: "30",
  maintenanceMode: false,
};

const getInitialSettings = () => {
  try {
    const savedSettings = localStorage.getItem("websiteSettings");
    if (savedSettings) {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(savedSettings) };
    }
  } catch (error) {
    console.error("Failed to load settings:", error);
  }
  return DEFAULT_SETTINGS;
};

export const Settings = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const initialSettings = getInitialSettings();

  // Site Information
  const [siteName, setSiteName] = useState(initialSettings.siteName);
  const [siteTitle, setSiteTitle] = useState(initialSettings.siteTitle);
  const [siteDescription, setSiteDescription] = useState(initialSettings.siteDescription);
  const [seoKeywords, setSeoKeywords] = useState(initialSettings.seoKeywords);
  const [author, setAuthor] = useState(initialSettings.author);

  // Branding & Assets
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [faviconPreview, setFaviconPreview] = useState<string | null>(null);

  // Colors & Typography
  const [primaryColor, setPrimaryColor] = useState(initialSettings.primaryColor);
  const [primaryColorText, setPrimaryColorText] = useState(initialSettings.primaryColor);
  const [secondaryColor, setSecondaryColor] = useState(initialSettings.secondaryColor);
  const [secondaryColorText, setSecondaryColorText] = useState(initialSettings.secondaryColor);
  const [accentColor, setAccentColor] = useState(initialSettings.accentColor);
  const [accentColorText, setAccentColorText] = useState(initialSettings.accentColor);
  const [backgroundColor, setBackgroundColor] = useState(initialSettings.backgroundColor);
  const [backgroundColorText, setBackgroundColorText] = useState(initialSettings.backgroundColor);
  const [textColor, setTextColor] = useState(initialSettings.textColor);
  const [textColorText, setTextColorText] = useState(initialSettings.textColor);
  const [fontFamily, setFontFamily] = useState(initialSettings.fontFamily);

  // Contact Information
  const [supportEmail, setSupportEmail] = useState(initialSettings.supportEmail);
  const [contactEmail, setContactEmail] = useState(initialSettings.contactEmail);
  const [adminEmail, setAdminEmail] = useState(initialSettings.adminEmail);
  const [phone, setPhone] = useState(initialSettings.phone);
  const [businessAddress, setBusinessAddress] = useState(initialSettings.businessAddress);

  // Security Settings
  const [sessionTimeout, setSessionTimeout] = useState(initialSettings.sessionTimeout);
  const [maintenanceMode, setMaintenanceMode] = useState(initialSettings.maintenanceMode);

  // UI State
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Color input change handlers
  const handleColorChange = (value: string, setter: (val: string) => void, textSetter: (val: string) => void) => {
    setter(value);
    textSetter(value);
  };

  // Color text input change handler
  const handleColorTextChange = (value: string, setter: (val: string) => void, textSetter: (val: string) => void) => {
    textSetter(value);
    if (/^#[0-9A-F]{6}$/i.test(value)) {
      setter(value);
    }
  };

  // File upload handlers
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setLogoPreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFaviconUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFaviconPreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Save settings handler
  const handleSaveSettings = async () => {
    setIsSaving(true);
    try {
      const settings = {
        siteName,
        siteTitle,
        siteDescription,
        seoKeywords,
        author,
        primaryColor,
        secondaryColor,
        accentColor,
        backgroundColor,
        textColor,
        fontFamily,
        supportEmail,
        contactEmail,
        adminEmail,
        phone,
        businessAddress,
        sessionTimeout,
        maintenanceMode,
        logoPreview,
        faviconPreview,
      };

      // Save to localStorage
      localStorage.setItem("websiteSettings", JSON.stringify(settings));

      // Here you could also make an API call to save to backend
      // await fetch('/api/admin/settings', { method: 'POST', body: JSON.stringify(settings) })

      setSaveMessage({ type: "success", text: "Settings saved successfully!" });
      setTimeout(() => setSaveMessage(null), 3000);
    } catch (error) {
      console.error("Failed to save settings:", error);
      setSaveMessage({ type: "error", text: "Failed to save settings. Please try again." });
      setTimeout(() => setSaveMessage(null), 3000);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <AdminSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="lg:ml-[259px]">
        <AdminHeader onMenuClick={() => setIsSidebarOpen(true)} />

        <div className="p-2 xs:p-3 sm:p-6 lg:p-8">
          <div className="bg-white rounded-lg shadow-sm p-4 xs:p-5 sm:p-8">
            {/* Page Header */}
            <div className="mb-6 xs:mb-8">
              <h1 className="text-lg xs:text-xl sm:text-2xl font-medium text-black mb-1 xs:mb-2">
                Website Settings
              </h1>
              <p className="text-xs xs:text-sm sm:text-base text-[#838383]">
                Manage your website configuration and appearance
              </p>
            </div>

            {/* Site Information */}
            <section className="mb-8 xs:mb-10 sm:mb-12">
              <h2 className="text-base xs:text-lg sm:text-xl font-medium text-black mb-4 xs:mb-6">
                Site Information
              </h2>

              <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                {/* Site Name */}
                <div>
                  <label className="block text-xs xs:text-sm sm:text-base lg:text-lg font-medium text-black mb-1.5 xs:mb-2">
                    Site Name
                  </label>
                  <input
                    type="text"
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
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
                    value={siteTitle}
                    onChange={(e) => setSiteTitle(e.target.value)}
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
                    value={siteDescription}
                    onChange={(e) => setSiteDescription(e.target.value)}
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
                    value={seoKeywords}
                    onChange={(e) => setSeoKeywords(e.target.value)}
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
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
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
                  {logoPreview ? (
                    <div className="w-full h-[165px] rounded-lg border-2 border-[#BABABA] flex flex-col items-center justify-center gap-3 bg-gray-50 relative">
                      <img src={logoPreview} alt="Logo preview" className="max-h-32 max-w-full object-contain" />
                      <button
                        type="button"
                        onClick={() => setLogoPreview(null)}
                        className="text-sm text-[#3CC27B] hover:text-[#35a869] transition-colors"
                      >
                        Clear
                      </button>
                    </div>
                  ) : (
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
                      <input type="file" className="hidden" accept="image/*" onChange={handleLogoUpload} />
                    </label>
                  )}
                </div>

                {/* Favicon Upload */}
                <div>
                  <label className="block text-base sm:text-lg font-medium text-black mb-2">
                    Favicon Upload
                  </label>
                  {faviconPreview ? (
                    <div className="w-full h-[165px] rounded-lg border-2 border-[#BABABA] flex flex-col items-center justify-center gap-3 bg-gray-50 relative">
                      <img src={faviconPreview} alt="Favicon preview" className="max-h-12 max-w-12 object-contain" />
                      <button
                        type="button"
                        onClick={() => setFaviconPreview(null)}
                        className="text-sm text-[#3CC27B] hover:text-[#35a869] transition-colors"
                      >
                        Clear
                      </button>
                    </div>
                  ) : (
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
                          Click to upload favicon
                          <br />
                          PNG, JPG up to 2MB
                        </p>
                      </div>
                      <input type="file" className="hidden" accept="image/*" onChange={handleFaviconUpload} />
                    </label>
                  )}
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
                      value={primaryColor}
                      onChange={(e) => handleColorChange(e.target.value, setPrimaryColor, setPrimaryColorText)}
                      className="w-[51px] h-[51px] rounded-lg border-2 border-[#BFBFBF] cursor-pointer"
                    />
                    <input
                      type="text"
                      value={primaryColorText}
                      onChange={(e) => handleColorTextChange(e.target.value, setPrimaryColor, setPrimaryColorText)}
                      className="flex-1 h-[51px] px-3 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all uppercase"
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
                      value={secondaryColor}
                      onChange={(e) => handleColorChange(e.target.value, setSecondaryColor, setSecondaryColorText)}
                      className="w-[51px] h-[51px] rounded-lg border-2 border-[#BFBFBF] cursor-pointer"
                    />
                    <input
                      type="text"
                      value={secondaryColorText}
                      onChange={(e) => handleColorTextChange(e.target.value, setSecondaryColor, setSecondaryColorText)}
                      className="flex-1 h-[51px] px-3 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all uppercase"
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
                      value={accentColor}
                      onChange={(e) => handleColorChange(e.target.value, setAccentColor, setAccentColorText)}
                      className="w-[51px] h-[51px] rounded-lg border-2 border-[#BFBFBF] cursor-pointer"
                    />
                    <input
                      type="text"
                      value={accentColorText}
                      onChange={(e) => handleColorTextChange(e.target.value, setAccentColor, setAccentColorText)}
                      className="flex-1 h-[51px] px-3 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all uppercase"
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
                      value={backgroundColor}
                      onChange={(e) => handleColorChange(e.target.value, setBackgroundColor, setBackgroundColorText)}
                      className="w-[51px] h-[51px] rounded-lg border-2 border-[#BFBFBF] cursor-pointer"
                    />
                    <input
                      type="text"
                      value={backgroundColorText}
                      onChange={(e) => handleColorTextChange(e.target.value, setBackgroundColor, setBackgroundColorText)}
                      className="flex-1 h-[51px] px-3 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all uppercase"
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
                      value={textColor}
                      onChange={(e) => handleColorChange(e.target.value, setTextColor, setTextColorText)}
                      className="w-[51px] h-[51px] rounded-lg border-2 border-[#BFBFBF] cursor-pointer"
                    />
                    <input
                      type="text"
                      value={textColorText}
                      onChange={(e) => handleColorTextChange(e.target.value, setTextColor, setTextColorText)}
                      className="flex-1 h-[51px] px-3 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all uppercase"
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
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                  className="w-full h-[51px] px-5 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
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
                    value={supportEmail}
                    onChange={(e) => setSupportEmail(e.target.value)}
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
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
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
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                    value={businessAddress}
                    onChange={(e) => setBusinessAddress(e.target.value)}
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
                    <select
                      value={sessionTimeout}
                      onChange={(e) => setSessionTimeout(e.target.value)}
                      className="h-[29px] px-3 pr-8 rounded bg-black text-white text-xs appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-[#3CC27B]/20"
                    >
                      <option value="30">30 Minutes</option>
                      <option value="60">1 Hour</option>
                      <option value="120">2 Hours</option>
                      <option value="240">4 Hours</option>
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

            {/* Save Notification */}
            {saveMessage && (
              <div
                className={`mb-6 p-4 rounded-lg text-sm font-medium transition-all ${
                  saveMessage.type === "success"
                    ? "bg-[#E8F5E9] text-[#2E7D32] border border-[#4CAF50]"
                    : "bg-[#FFEBEE] text-[#C62828] border border-[#F44336]"
                }`}
              >
                {saveMessage.text}
              </div>
            )}

            {/* Save Button */}
            <div className="flex justify-end pt-6 border-t border-[#E0E0E0]">
              <button
                onClick={handleSaveSettings}
                disabled={isSaving}
                className="px-8 py-3 bg-[#3CC27B] text-white text-base font-semibold rounded-lg hover:bg-[#35a869] disabled:bg-[#999999] disabled:cursor-not-allowed transition-all shadow-sm"
              >
                {isSaving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
