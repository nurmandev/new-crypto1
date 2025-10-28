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
    <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      <h2 className="text-lg md:text-2xl font-medium text-black mb-6">
        More Coming Soon
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center gap-2 md:gap-3"
          >
            <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full border-4 md:border-[7px] border-[#3CC27B] bg-white flex items-center justify-center shadow-lg">
              <span className="text-xl sm:text-2xl md:text-3xl">
                {service.icon}
              </span>
            </div>
            <div className="min-w-0">
              <p className="font-medium text-gray-400 text-xs sm:text-sm md:text-base mb-1">
                {service.name}
              </p>
              <p className="text-xs text-gray-400 mb-2">{service.subtitle}</p>
              <div className="px-2 py-1 bg-[#FFE9CF] rounded-full">
                <span className="text-xs text-gray-400">coming soon</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
