import React, { useState } from "react";

interface AddCryptoModalProps {
  onClose: () => void;
  onAdd: (crypto: {
    symbol: string;
    name: string;
    buyRate: string;
    sellRate: string;
    walletAddress: string;
    network: string;
    iconFile?: File;
  }) => void;
}

export const AddCryptoModal: React.FC<AddCryptoModalProps> = ({
  onClose,
  onAdd,
}) => {
  const [formData, setFormData] = useState({
    symbol: "",
    name: "",
    buyRate: "",
    sellRate: "",
    walletAddress: "",
    network: "",
  });
  const [iconFile, setIconFile] = useState<File | null>(null);
  const [iconPreview, setIconPreview] = useState<string>("");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIconFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setIconPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (
      !formData.symbol ||
      !formData.name ||
      !formData.buyRate ||
      !formData.sellRate ||
      !formData.walletAddress ||
      !formData.network
    ) {
      alert("Please fill in all required fields");
      return;
    }

    onAdd({
      ...formData,
      iconFile: iconFile || undefined,
    });
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/22 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-white rounded-xl p-5 sm:p-[30px] w-full max-w-[873px] flex flex-col gap-2.5"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full">
            <h2 className="text-[17px] font-medium leading-[33px] text-black font-roboto mb-5">
              Add New Cryptocurrency
            </h2>

            {/* Form Grid - 2 columns on desktop, 1 on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
              {/* Left Column */}
              <div className="space-y-4">
                {/* Symbol */}
                <div>
                  <label className="text-[15px] font-medium text-black mb-2 block font-roboto">
                    Symbol*
                  </label>
                  <input
                    type="text"
                    value={formData.symbol}
                    onChange={(e) =>
                      handleInputChange("symbol", e.target.value.toUpperCase())
                    }
                    placeholder="BTC"
                    className="w-full h-[51px] px-6 rounded-[5px] border border-[#8F8F8F] bg-[#F0F0F0] text-[15px] font-medium text-[#8E8E8E] placeholder:text-[#8E8E8E] font-roboto focus:outline-none focus:border-[#3CC27B] focus:text-black"
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="text-[15px] font-medium text-black mb-2 block font-roboto">
                    Name*
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Bitcoin"
                    className="w-full h-[51px] px-6 rounded-[5px] border border-[#8F8F8F] bg-[#F0F0F0] text-[15px] font-medium text-[#8E8E8E] placeholder:text-[#8E8E8E] font-roboto focus:outline-none focus:border-[#3CC27B] focus:text-black"
                  />
                </div>

                {/* Buy Rate */}
                <div>
                  <label className="text-[15px] font-medium text-black mb-2 block font-roboto">
                    Buy Rate (₹)
                  </label>
                  <input
                    type="text"
                    value={formData.buyRate}
                    onChange={(e) =>
                      handleInputChange(
                        "buyRate",
                        e.target.value.replace(/[^0-9]/g, "")
                      )
                    }
                    placeholder="Bitcoin"
                    className="w-full h-[51px] px-6 rounded-[5px] border border-[#8F8F8F] bg-[#F0F0F0] text-[15px] font-medium text-[#8E8E8E] placeholder:text-[#8E8E8E] font-roboto focus:outline-none focus:border-[#3CC27B] focus:text-black"
                  />
                </div>

                {/* Sell Rate */}
                <div>
                  <label className="text-[15px] font-medium text-black mb-2 block font-roboto">
                    Sell Rate (₹)
                  </label>
                  <input
                    type="text"
                    value={formData.sellRate}
                    onChange={(e) =>
                      handleInputChange(
                        "sellRate",
                        e.target.value.replace(/[^0-9]/g, "")
                      )
                    }
                    placeholder="Bitcoin"
                    className="w-full h-[51px] px-6 rounded-[5px] border border-[#8F8F8F] bg-[#F0F0F0] text-[15px] font-medium text-[#8E8E8E] placeholder:text-[#8E8E8E] font-roboto focus:outline-none focus:border-[#3CC27B] focus:text-black"
                  />
                </div>

                {/* Icon Upload */}
                <div>
                  <label className="text-[15px] font-medium text-black mb-2 block font-roboto">
                    Set Currency Icon/Image
                  </label>
                  <div className="relative w-full h-[51px] rounded-[5px] border border-[#8F8F8F] bg-[#F0F0F0] flex items-center px-6">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0"
                    >
                      <path
                        d="M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM11.14 8.86L8.14 12.73L6 10.14L3 14H15L11.14 8.86Z"
                        fill="#8E8E8E"
                      />
                    </svg>
                    <span className="ml-auto text-[15px] font-medium text-[#515151] font-roboto">
                      {iconFile ? iconFile.name : "Upload"}
                    </span>
                  </div>
                  {iconPreview && (
                    <div className="mt-2">
                      <img
                        src={iconPreview}
                        alt="Icon preview"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {/* Wallet Address */}
                <div>
                  <label className="text-[15px] font-medium text-black mb-2 block font-roboto">
                    Wallet Address*
                  </label>
                  <input
                    type="text"
                    value={formData.walletAddress}
                    onChange={(e) =>
                      handleInputChange("walletAddress", e.target.value)
                    }
                    placeholder="dsadsad78rguf887gefwef7gwe8f87492r"
                    className="w-full h-[51px] px-6 rounded-[5px] border border-[#8F8F8F] bg-[#F0F0F0] text-[15px] font-medium text-[#8E8E8E] placeholder:text-[#8E8E8E] font-roboto focus:outline-none focus:border-[#3CC27B] focus:text-black"
                  />
                </div>

                {/* Network */}
                <div>
                  <label className="text-[15px] font-medium text-black mb-2 block font-roboto">
                    Network*
                  </label>
                  <input
                    type="text"
                    value={formData.network}
                    onChange={(e) =>
                      handleInputChange("network", e.target.value)
                    }
                    placeholder="Bitcoin network"
                    className="w-full h-[51px] px-6 rounded-[5px] border border-[#8F8F8F] bg-[#F0F0F0] text-[15px] font-medium text-[#8E8E8E] placeholder:text-[#8E8E8E] font-roboto focus:outline-none focus:border-[#3CC27B] focus:text-black"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8">
              <button
                onClick={handleSubmit}
                className="flex items-center justify-center w-full sm:w-[210px] h-9 bg-black text-white text-[15px] font-medium rounded-md border border-[#C3C3C3] hover:bg-gray-800 transition-colors font-roboto leading-[33px]"
              >
                Add
              </button>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-full sm:w-[210px] h-9 bg-white text-black text-[15px] font-medium rounded-md border border-[#C3C3C3] hover:bg-gray-50 transition-colors font-roboto leading-[33px]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
