import { useState } from "react";
import { Copy, Trash2 } from "lucide-react";
import DashboardLayout from "./components/DashboardLayout";

export default function Cashout() {
  const [amount, setAmount] = useState("");
  const [trackingId, setTrackingId] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [landmark, setLandmark] = useState("");
  const [notes, setNotes] = useState("");

  const availableBalance = 45230.5;

  const cashoutRequests = [
    {
      amount: "₹5000",
      address: "123 Main Street, Mumbai, Maharashtra 400001",
      requestDate: "2024-01-15",
      deliveryDate: "2024-01-17",
      tracking: "TRK123456789",
      status: "Delivered",
      statusColor: "bg-[#BDFDDB] text-[#1C5C3A]",
    },
    {
      amount: "₹5000",
      address: "123 Main Street, Mumbai, Maharashtra 400001",
      requestDate: "2024-01-15",
      deliveryDate: "2024-01-17",
      tracking: "TRK123456789",
      status: "Processing",
      statusColor: "bg-[#DBEAFE] text-black",
    },
    {
      amount: "₹5000",
      address: "123 Main Street, Mumbai, Maharashtra 400001",
      requestDate: "2024-01-15",
      deliveryDate: "2024-01-17",
      tracking: "TRK123456789",
      status: "Shipped",
      statusColor: "bg-[#F3E8FF] text-black",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cashout request submitted");
  };

  const handleTrack = () => {
    console.log("Tracking:", trackingId);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <DashboardLayout>
      <div className="flex-1 max-w-[1234px] space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-lg md:text-xl lg:text-[20px] font-medium text-black mb-1 md:mb-2">
            Cashout
          </h2>
          <p className="text-[#838383] text-sm md:text-base lg:text-[17px] font-normal">
            Withdraw your funds to your preferred method
          </p>
        </div>

        {/* Wallet Balance Banner */}
        <div className="w-full rounded-[10px] bg-gradient-to-r from-[#3CC27B] to-[#00602D] p-8 md:p-12 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white text-lg md:text-xl lg:text-[20px] font-medium mb-2">
              Available Wallet Balance
            </p>
            <p className="text-white text-4xl md:text-5xl lg:text-[50px] font-bold">
              ₹{availableBalance.toLocaleString('en-IN', { minimumFractionDigits: 1 })}
            </p>
          </div>
        </div>

        {/* Request and Track Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Request Cashout */}
          <div className="bg-white rounded-[10px] p-6 md:p-8">
            <h3 className="text-base md:text-lg lg:text-[20px] font-medium text-black mb-6">
              Request Cashout
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Amount */}
              <div>
                <label className="block text-sm md:text-[15px] font-medium text-black mb-2">
                  Amount (₹)
                </label>
                <input
                  type="number"
                  placeholder="Enter Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full h-[51px] px-4 py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-[15px] font-light text-black placeholder:text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors"
                />
              </div>

              {/* Delivery Address Section */}
              <div>
                <label className="block text-sm md:text-[15px] font-medium text-black mb-2">
                  Delivery Address
                </label>

                {/* Full Name and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="h-[51px] px-4 py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-[15px] font-light text-black placeholder:text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="h-[51px] px-4 py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-[15px] font-light text-black placeholder:text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors"
                  />
                </div>

                {/* Address */}
                <textarea
                  placeholder="House/Flat No. Building Name"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-[15px] font-light text-black placeholder:text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors mb-4 resize-none"
                />

                {/* City and State */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="h-[51px] px-4 py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-[15px] font-light text-black placeholder:text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors"
                  />
                  <div className="relative">
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full h-[51px] px-4 py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-[15px] font-light text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors appearance-none pr-10"
                    >
                      <option value="">State</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Gujarat">Gujarat</option>
                    </select>
                    <svg
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                      width="13"
                      height="10"
                      viewBox="0 0 13 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3496 9.21839e-07L0.649275 1.94471e-06C0.530815 0.000383523 0.414699 0.0339522 0.313426 0.0970939C0.212153 0.160236 0.129559 0.250559 0.0745321 0.358343C0.0195055 0.466127 -0.00586901 0.587289 0.00114021 0.708788C0.00814943 0.830287 0.0472765 0.94752 0.11431 1.04787L5.96448 9.73002C6.20693 10.09 6.79065 10.09 7.03376 9.73002L12.8839 1.04787C12.9516 0.947729 12.9913 0.830436 12.9987 0.708735C13.0061 0.587034 12.9809 0.465579 12.9258 0.357567C12.8708 0.249555 12.7879 0.159115 12.6863 0.0960763C12.5848 0.033037 12.4683 -0.000191153 12.3496 9.21839e-07Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>

                {/* Pincode and Landmark */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="h-[51px] px-4 py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-[15px] font-light text-black placeholder:text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Landmark (Optional)"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                    className="h-[51px] px-4 py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-[15px] font-light text-black placeholder:text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors"
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm md:text-[15px] font-medium text-black mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  placeholder="any special instructions"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-[15px] font-light text-black placeholder:text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white rounded-md border-[0.5px] border-[#C3C3C3] px-4 md:px-[60px] py-3 md:py-[9px] flex items-center justify-center gap-2 md:gap-3 hover:bg-gray-900 transition-colors h-[51px]"
              >
                <span className="text-sm md:text-[15px] font-medium leading-[33px]">
                  Send Cashout Request
                </span>
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 -3.49691e-07L10 8L2 16L-6.11959e-07 14L6 8L-8.74228e-08 2L2 -3.49691e-07Z"
                    fill="white"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Track Cashout */}
          <div className="bg-white rounded-[10px] p-6 md:p-8">
            <h3 className="text-base md:text-lg lg:text-[20px] font-medium text-black mb-6">
              Track Cashout
            </h3>

            {/* Tracking ID Input */}
            <div className="mb-6">
              <label className="block text-sm md:text-[15px] font-medium text-black mb-2">
                Tracking ID
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="TRK123456789"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="flex-1 h-[51px] px-4 py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-[15px] font-semibold text-black placeholder:text-[#8E8E8E] placeholder:font-semibold focus:outline-none focus:border-[#3CC27B] transition-colors"
                />
                <button
                  onClick={handleTrack}
                  className="px-6 h-[51px] bg-black text-white rounded text-xs md:text-[13px] font-medium hover:bg-gray-900 transition-colors"
                >
                  Track
                </button>
              </div>
            </div>

            {/* How To Track Info Box */}
            <div className="bg-[rgba(60,194,123,0.09)] rounded-[13px] p-6">
              <h4 className="text-sm md:text-[15px] font-medium text-black mb-3">
                How To Track:
              </h4>
              <ul className="text-xs md:text-[12px] font-light text-black leading-6 space-y-1">
                <li>• Copy tracking ID from your cashout request</li>
                <li>• Enter it in the field above</li>
                <li>• Get real-time status updates</li>
                <li>• Receive notifications on status changes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cashout Requests */}
        <div className="bg-white rounded-[10px] p-6 md:p-8">
          <h3 className="text-base md:text-lg lg:text-[20px] font-medium text-black mb-6">
            Cashout Requests
          </h3>

          <div className="space-y-4">
            {cashoutRequests.map((request, index) => (
              <div
                key={index}
                className="bg-white rounded-[12px] p-4 md:p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                {/* Amount and Address */}
                <div className="flex-1">
                  <p className="text-base md:text-[17px] font-medium text-black mb-2">
                    {request.amount}
                  </p>
                  <p className="text-xs md:text-[14px] font-light text-black leading-6">
                    {request.address}
                    <br />
                    Requested: {request.requestDate} Est. Delivery:{" "}
                    {request.deliveryDate}
                  </p>
                </div>

                {/* Tracking ID */}
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-xs md:text-[14px] font-light text-black">
                      Tracking:{" "}
                      <span className="font-normal">{request.tracking}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(request.tracking)}
                    className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                    aria-label="Copy tracking ID"
                  >
                    <Copy className="w-3 h-3 text-gray-600" />
                  </button>
                </div>

                {/* Status Badge */}
                <div
                  className={`px-3 py-1.5 rounded ${request.statusColor} text-[10px] font-normal whitespace-nowrap`}
                >
                  {request.status}
                </div>

                {/* Delete Button */}
                <button
                  className="p-2 hover:bg-red-50 rounded transition-colors"
                  aria-label="Delete request"
                >
                  <Trash2 className="w-4 h-4 text-[#FA1818]" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
