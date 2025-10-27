import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Rocket,
  ShoppingCart,
  Repeat,
  Wallet,
  TrendingUp,
  ChevronDown,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter
} from "lucide-react";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "How Does It Works?",
    answer: "Our platform makes it simple to buy and sell cryptocurrency. Sign up, verify your identity, add a payment method, and start trading instantly. We handle the technical details while you focus on your investments."
  },
  {
    id: 2,
    question: "About USDT MPAY?",
    answer: "USDT MPAY is a secure cryptocurrency exchange platform designed for Indian users. We offer instant deposits via UPI, bank-level security, real-time pricing, and support for multiple cryptocurrencies."
  },
  {
    id: 3,
    question: "What we offer to you?",
    answer: "We offer buy/sell services for 700+ cryptocurrencies, instant UPI withdrawals, secure wallets, real-time market data, low trading fees, and 24/7 customer support."
  },
  {
    id: 4,
    question: "How To Sell Crypto Currency?",
    answer: "Open your wallet, select the cryptocurrency you want to sell, enter the amount, review the conversion rate, and confirm. The rupees will be credited to your bank account instantly."
  },
  {
    id: 5,
    question: "What Is a Crypto Currency Exchange?",
    answer: "A cryptocurrency exchange is a platform where you can buy, sell, and trade digital assets. It acts as an intermediary, matching buyers and sellers while providing secure storage and instant transaction processing."
  },
  {
    id: 6,
    question: "How To Cash Out Wallet Funds?",
    answer: "Navigate to your wallet, select the cryptocurrency, click 'Withdraw to Bank', enter your bank details, and confirm. Transfers typically complete within minutes during business hours."
  },
  {
    id: 7,
    question: "How To Buy Crypto Currencies On Usdtmpay?",
    answer: "Go to the Buy section, select your cryptocurrency, enter the amount in INR, choose your payment method (UPI/Bank), and complete the transaction. Your crypto will be credited instantly to your wallet."
  },
  {
    id: 8,
    question: "How To Add Funds To Your MPAY Wallet?",
    answer: "Open the Wallet section, click 'Add Funds', select your payment method, enter the amount, and complete the payment process. Funds are credited immediately to your MPAY wallet."
  },
  {
    id: 9,
    question: "How To Transfer Wallet Funds?",
    answer: "Go to Transfer, select the recipient's MPAY account or wallet address, enter the amount, and confirm. Transfers complete instantly with full encryption for security."
  },
  {
    id: 10,
    question: "How to Reach Out Support Team?",
    answer: "You can contact our support team via email at support@cryptotrade.in, call +91 80-0000-0000, or visit our help center. Our team responds within 24 hours for all inquiries."
  }
];

export default function Index() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[75px] max-w-7xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">USDTMPAY</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8 text-[15px]">
              <a href="#" className="text-[#3CC27B] font-medium hover:text-[#3CC27B]/80">Home</a>
              <a href="#" className="text-gray-900 hover:text-[#3CC27B]">About</a>
              <a href="#" className="text-gray-900 hover:text-[#3CC27B]">Contact</a>
              <a href="#" className="text-gray-900 hover:text-[#3CC27B]">FAQ</a>
            </nav>

            <Button className="bg-[#161616] hover:bg-[#161616]/90 text-white px-9 h-[37px] rounded-md">
              Login
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-green-100 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#BDFDDB] rounded-full px-4 py-1.5 mb-6">
              <Rocket className="w-4 h-4 text-[#3CC27B]" />
              <span className="text-[#0A7741] text-[15px]">India's Fastest Growing Crypto Trading Platform</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-normal mb-6">
              <span className="text-[#161616] font-['Russo_One']">Buy & Sell Crypto </span>
              <span className="bg-gradient-to-r from-[#161616] to-[#27BF73] bg-clip-text text-transparent font-['Russo_One']">
                Instantly
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-900 max-w-3xl mx-auto mb-8 leading-relaxed">
              The Top Best Secure Exchanging Platform For Your Cryptocurrency Providing Services Globally For Buying, Selling, Transferring, and Storing Your Digital Asset.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button className="bg-white hover:bg-gray-50 text-[#161616] border border-gray-300 px-14 h-[51px] text-[15px] font-medium rounded-md">
                Buy Crypto Now
              </Button>
              <Button className="bg-white hover:bg-gray-50 text-[#161616] border border-gray-300 px-14 h-[51px] text-[15px] font-medium rounded-md">
                Sell Your Crypto
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[13px] text-gray-900">
              <div className="flex items-center -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-[30px] h-[30px] rounded-full bg-gray-300 border-2 border-white"></div>
                ))}
              </div>
              <span className="font-light">Join 10,000+ traders</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <span key={i} className="text-[#FBD25F]">★</span>
                ))}
                <span className="text-gray-300">★</span>
              </div>
              <span className="font-light">4.5/5 Ratings</span>
            </div>
          </div>

          {/* Hero Image with Floating Icons */}
          <div className="relative mt-16 max-w-5xl mx-auto">
            <div className="relative">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/9dd109c9d143e344a1e0cde3ee5ac1081bb25d1c" 
                alt="Mobile App Preview" 
                className="mx-auto w-full max-w-3xl"
              />
              
              {/* Floating Crypto Icons */}
              <div className="absolute left-0 top-1/4 hidden lg:flex flex-col gap-8">
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/acbda6cab62caacb7aaa443f91b4e20ebae4050b" alt="Bitcoin" className="w-14 h-14" />
                </div>
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/6e46145ba25c5ac98e9c0c11fca0de835fc284e2" alt="Ethereum" className="w-12 h-12" />
                </div>
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/7850f047c05596c405287c6c8816c64474c87a0d" alt="Crypto" className="w-14 h-14" />
                </div>
              </div>

              {/* Transaction Notifications */}
              <div className="absolute right-0 top-1/4 hidden lg:flex flex-col gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="bg-white rounded px-4 py-2 shadow-md w-72">
                    <p className="text-[13px]">
                      <span className="text-gray-900">Sold 100 </span>
                      <span className="font-bold">USDT</span>
                      <span className="text-gray-900"> for </span>
                      <span className="font-bold text-[#3CC27B]">₹8,200</span>
                    </p>
                    <p className="text-[13px] text-gray-600">₹8,200 has been received in your wallet</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#3CC27B] to-[#00602D]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { value: "10K +", label: "Active Users" },
              { value: "₹50Cr+", label: "Trading Volume" },
              { value: "700+", label: "Crypto Coins" },
              { value: "1.3B+", label: "Cash Out" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white text-[17px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#E9E9E9] rounded-full px-4 py-1.5 mb-6">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#F9AA4B] to-[#F7931A]"></div>
              <span className="text-[#646464] text-[15px]">CRYPTO WALLET & SERVICES</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-['Russo_One'] text-[#161616] mb-4">
              Explore Services & Crypto Wallet
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              We Bring Together Dynamic Mix Of Services & Crypto Wallet That Are Thoughtfully Designed To Make Your Crypto Exchange Easier.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: ShoppingCart,
                title: "Buy Crypto",
                description: "Easily purchase your favorite cryptocurrencies in just a few clicks."
              },
              {
                icon: Repeat,
                title: "Sell Crypto",
                description: "Securely sell your crypto and get instant payouts."
              },
              {
                icon: Wallet,
                title: "Wallet",
                description: "Easily purchase your favorite cryptocurrencies in just a few clicks."
              }
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-xl p-9 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#3CC27B] flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-900 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Markets Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#E9E9E9] rounded-full px-4 py-1.5 mb-6">
              <TrendingUp className="w-4 h-4 text-[#3CC27B]" />
              <span className="text-[#646464] text-[15px]">Live Crypto Pricings and Charts</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-['Russo_One'] text-[#161616] mb-4">
              Live Crypto Markets
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Track real-time cryptocurrency prices and buy or sell with just a few clicks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { name: "BTC", fullName: "Bitcoin", price: "₹4,123,456", change: "+3.14%", positive: true, icon: "https://api.builder.io/api/v1/image/assets/TEMP/0e8162b931ac7a269c2579324248c37d54f60538" },
              { name: "ETH", fullName: "Ethereum", price: "₹234,567", change: "-3.14%", positive: false, icon: "https://api.builder.io/api/v1/image/assets/TEMP/586cb756bb32c4c0a1b9f3acdf050b6e7a79f092" },
              { name: "Sol", fullName: "Solana", price: "₹4,123,456", change: "+3.14%", positive: true, icon: "https://api.builder.io/api/v1/image/assets/TEMP/78c2531224f8fdb3c88b395fccd81b321f38fdd4" },
              { name: "Doge", fullName: "Doge", price: "₹4,123,456", change: "+3.14%", positive: true, icon: "https://api.builder.io/api/v1/image/assets/TEMP/bebc11cac502e1e56ffd9ff4f0f72a172b01b7e2" }
            ].map((crypto, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-100 p-5 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <img src={crypto.icon} alt={crypto.name} className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="font-bold text-gray-900">{crypto.name}</div>
                      <div className="text-[15px] text-gray-600">{crypto.fullName}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[17px] font-medium text-gray-900">{crypto.price}</div>
                    <span className={`inline-block px-2.5 py-1 rounded text-[13px] ${
                      crypto.positive ? 'bg-[#BDFDDB] text-gray-900' : 'bg-[#FDBDBD] text-gray-900'
                    }`}>
                      {crypto.change}
                    </span>
                  </div>
                </div>
                
                {/* Mini Chart */}
                <div className="h-24 relative">
                  <svg viewBox="0 0 280 80" className="w-full h-full">
                    <path 
                      d={crypto.positive 
                        ? "M0,60 Q30,40 60,50 T120,30 T180,45 T240,25 L240,80 L0,80 Z"
                        : "M0,20 Q30,40 60,30 T120,50 T180,35 T240,55 L240,80 L0,80 Z"
                      }
                      fill={crypto.positive ? "rgba(60, 194, 123, 0.1)" : "rgba(250, 24, 24, 0.1)"}
                      stroke={crypto.positive ? "#3CC27B" : "#FA1818"}
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                
                <div className="flex justify-between text-[15px] text-gray-400 mt-2">
                  <span>9:00</span>
                  <span>12:00</span>
                  <span>3:00</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-[13px] text-gray-900 mb-6">Join thousands of traders • Get started with just ₹100</p>
            <Button className="bg-black hover:bg-black/90 text-white px-12 h-[51px] rounded-md inline-flex items-center gap-2">
              Start Crypto Deposit Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Buy/Sell Section */}
      <section className="py-20 bg-gradient-to-r from-[#3CC27B] to-[#00602D] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-['Russo_One'] mb-6">
                Buy & Sell Crypto At Any INR Rate
              </h2>
              <p className="text-xl leading-relaxed mb-8">
                We're proud to be working with these incredible traders, and thankful for their feedback, suggestions, and support.
              </p>
            </div>

            <div className="relative">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/b234ffe9ebcbed92046a393a086f19e7a0a49a6b" 
                alt="Crypto coin" 
                className="w-64 h-64 mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-['Russo_One'] text-[#161616] mb-4">
              Don't just take our word for it
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              We're proud to be working with these incredible traders, and thankful for their feedback, suggestions, and support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={`bg-white rounded-lg p-6 ${i === 4 ? 'border-2 border-[#3CC27B] shadow-xl' : 'shadow-md'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                  <div>
                    <div className="font-medium text-[15px]">Sarah Johnson</div>
                    <div className="text-[15px] text-gray-600">@sarahtrades</div>
                  </div>
                  <Twitter className="w-4 h-4 ml-auto" />
                </div>
                <p className="text-[17px] text-gray-900 mb-4 leading-relaxed">
                  "The platform is incredibly user-friendly and the instant buy/sell feature has saved me so much time. Best trading experience I've had in 3 years!"
                </p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((j) => (
                    <span key={j} className="text-[#F9AA4B]">★</span>
                  ))}
                  <span className="text-gray-300">★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-['Russo_One'] text-[#161616] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              A List Of Question and Answers Related To A Specific Topic, Product, Services & Common Customer Inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
            {FAQ_ITEMS.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-md border border-gray-200 overflow-hidden hover:border-[#3CC27B] transition-all"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex justify-between items-center p-5 hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-900 transition-transform duration-300 ${
                      expandedId === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedId === faq.id && (
                  <div className="border-t border-gray-200 p-5 bg-gray-50 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3CC27B] to-[#00602D]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-['Russo_One'] text-white mb-6">
            Ready to Start Trading Crypto?
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Join thousands of traders buying and selling cryptocurrencies on India's most trusted platform
          </p>
          <Button className="bg-white hover:bg-gray-100 text-[#161616] px-14 h-[51px] text-[15px] font-medium rounded-md">
            Buy Crypto Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#161616] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">USDTMPAY</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                We are the best platform to buy and sell crypto, offering secure, fast, and reliable trading. With real-time prices, instant UPI deposits and withdrawals, and bank-level security, we make crypto trading simple and accessible for everyone
              </p>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#3CC27B] flex items-center justify-center">
                  <Facebook className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#272727] flex items-center justify-center">
                  <Linkedin className="w-4 h-4 text-[#3CC27B]" />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#272727] flex items-center justify-center">
                  <Twitter className="w-4 h-4 text-[#3CC27B]" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Platform</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-white">Buy Crypto</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Sell Crypto</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Wallet</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Security</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#3CC27B]" />
                  <span className="text-white/80">support@cryptotrade.in</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#3CC27B]" />
                  <span className="text-white/80">+91 80-0000-0000</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#3CC27B]" />
                  <span className="text-white/80">Bangalore, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#3CC27B]/30 pt-8">
            <div className="max-w-6xl mx-auto">
              <h5 className="text-lg font-bold text-[#9E9E9E] mb-4">Risk Disclaimer</h5>
              <p className="text-[#9E9E9E] text-sm leading-relaxed mb-6">
                Trading and holding cryptocurrencies involves significant risk. Prices of digital assets are highly volatile and may fluctuate rapidly. Our platform only provides users with the ability to deposit, sell, and withdraw crypto; we do not provide financial advice, investment recommendations, or guarantee of profits. Users are solely responsible for their trading decisions, and by using this platform, you agree that we are not liable for any losses, damages, or risks arising from your crypto transactions. Always do your own research before trading.
              </p>
              <p className="text-center text-white text-[13px]">
                © 2024 usdtmpay.online. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
