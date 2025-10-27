import { Button } from "@/components/ui/button";
import { 
  Users, 
  Globe, 
  TrendingUp, 
  Clock,
  Shield,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[75px] max-w-7xl mx-auto">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">USDTMPAY</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8 text-[15px]">
              <Link to="/" className="text-gray-900 hover:text-[#3CC27B]">Home</Link>
              <Link to="/about" className="text-[#3CC27B] font-medium hover:text-[#3CC27B]/80">About</Link>
              <Link to="/services" className="text-gray-900 hover:text-[#3CC27B]">Services</Link>
              <Link to="/contact" className="text-gray-900 hover:text-[#3CC27B]">Contact</Link>
              <a href="#" className="text-gray-900 hover:text-[#3CC27B]">FAQ</a>
            </nav>

            <Link to="/login">
              <Button className="bg-[#161616] hover:bg-[#161616]/90 text-white px-9 h-[37px] rounded-md">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-[15px] text-gray-900 mb-4">
              <span>Home / </span>
              <span className="text-[#3CC27B]">About Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-['Russo_One'] text-[#161616] mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
              We Bring Together Dynamic Mix Of Services & Crypto Wallet That Are Thoughtfully Designed To Make Your Crypto Exchange Easier.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Russo_One'] mb-6 bg-gradient-to-r from-[#161616] to-[#3CC27B] bg-clip-text text-transparent leading-tight">
              Welcome to the crypto exchanger USDT MPAY
            </h2>
            <p className="text-xl text-gray-900 leading-relaxed mb-12">
              Our instant exchange system ensures rapid execution and top-tier security, giving you a seamless and reliable experience every time. Whether you are a beginner or a pro, We make crypto simple, safe, and accessible. Your trusted platform for fast, secure, and hassle-free cryptocurrency transactions. We specialize in buying, selling, storing and transferring crypto across all currencies Without the Risk of peer-to-peer (P2P) trading.
            </p>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Users, value: "500K+", label: "Active Users" },
                { icon: Globe, value: "50+", label: "Countries Served" },
                { icon: TrendingUp, value: "$2B+", label: "Trading Volume" },
                { icon: Clock, value: "5+", label: "Years of Experience" }
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-9 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#3CC27B] flex items-center justify-center mb-4 mx-auto">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-900">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-['Russo_One'] text-[#161616] mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-900 leading-relaxed">
                  To democratize access to cryptocurrency trading by providing a secure, user-friendly platform that empowers both beginners and experienced traders to participate in the digital economy.
                </p>
                <p className="text-lg text-gray-900 leading-relaxed mt-4">
                  We believe that everyone should have access to the transformative power of cryptocurrencies, regardless of their technical background or investment experience.
                </p>
              </div>
              <div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fde402d04e4fc422aa77ac9baf104abf8%2F4a4b10f924484bf7a43c09a4a8b5d5e7?format=webp&width=800"
                  alt="Our Mission - Bitcoin Trading Chart"
                  className="rounded-2xl w-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-[#3CC27B] to-[#00602D]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-['Russo_One'] text-white mb-12">
              Why Choose Us?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                {[
                  { icon: Shield, text: "Bank-level security" },
                  { icon: TrendingUp, text: "Real-time trading" },
                  { icon: Users, text: "24/7 customer support" },
                  { icon: Globe, text: "Global accessibility" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white">
                    <item.icon className="w-5 h-5" />
                    <span className="text-[15px]">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {[
                  "Instant processing",
                  "Without P2P risk",
                  "Use local payment method",
                  "Support 24x7",
                  "Best exchange Rates"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gradient-to-r from-[#3CC27B] to-[#1C5C3A] rounded-md p-3">
                    <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0" />
                    <span className="text-white text-xl">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-['Russo_One'] text-[#161616] text-center mb-16">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Security First",
                  description: "We prioritize the security of your assets with industry-leading encryption and multi-layer protection protocols."
                },
                {
                  icon: TrendingUp,
                  title: "Innovation",
                  description: "Constantly evolving our platform with cutting-edge technology to provide the best trading experience."
                },
                {
                  icon: Users,
                  title: "Customer Centric",
                  description: "We prioritize the security of your assets with industry-leading encryption and multi-layer protection protocols."
                },
                {
                  icon: CheckCircle2,
                  title: "Excellence",
                  description: "Committed to delivering exceptional service and maintaining the highest standards in the industry."
                }
              ].map((value, i) => (
                <div key={i} className="bg-white rounded-xl p-6 flex flex-col gap-8">
                  <div className="w-10 h-10 rounded-full bg-[#3CC27B] flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-900 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-['Russo_One'] text-[#161616] mb-6">
              Features
            </h2>
            <p className="text-lg text-gray-900 leading-relaxed mb-12">
              To democratize access to cryptocurrency trading by providing a secure, user-friendly platform that empowers both beginners and experienced traders to participate in the digital economy.
            </p>
            <p className="text-lg text-gray-900 leading-relaxed">
              We believe that everyone should have access to the transformative power of cryptocurrencies, regardless of their technical background or investment experience.
            </p>
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
