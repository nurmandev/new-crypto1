export default function MoreServices() {
  const services = [
    { name: "Recharge", subtitle: "Mobile & DTH", icon: "📱" },
    { name: "Bill Pay", subtitle: "Utility Bills", icon: "📄" },
    {
      name: "Bank Transfer",
      subtitle: "Direct Transfer",
      icon: "🏦",
    },
    { name: "Savings", subtitle: "Investment Plans", icon: "💰" },
    {
      name: "Online Transfer",
      subtitle: "P2P Payments",
      icon: "🔄",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-3 md:p-6 shadow-sm">
      <h2 className="text-base md:text-2xl font-medium text-black mb-4 md:mb-6">
        More Coming Soon
      </h2>

      <div className="grid grid-cols-5 gap-2 md:gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center gap-1.5 md:gap-3"
          >
            <div className="w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 rounded-full border-3 sm:border-4 md:border-[7px] border-[#3CC27B] bg-white flex items-center justify-center shadow-lg flex-shrink-0">
              <span className="text-lg sm:text-xl md:text-3xl">
                {service.icon}
              </span>
            </div>
            <div className="min-w-0">
              <p className="font-medium text-gray-400 text-[10px] sm:text-xs md:text-base mb-0.5 md:mb-1 leading-tight">
                {service.name}
              </p>
              <p className="text-[9px] sm:text-xs text-gray-400 mb-1 md:mb-2 leading-tight">{service.subtitle}</p>
              <div className="px-1.5 py-0.5 bg-[#FFE9CF] rounded-full">
                <span className="text-[8px] sm:text-xs text-gray-400 whitespace-nowrap">coming soon</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
