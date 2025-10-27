import { Button } from "@/components/ui/button";
import { 
  MessageCircle,
  Mail as MailIcon,
  Phone as PhoneIcon,
  Clock,
  Users,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  ArrowRight,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
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
              <Link to="/about" className="text-gray-900 hover:text-[#3CC27B]">About</Link>
              <Link to="/services" className="text-[#3CC27B] font-medium hover:text-[#3CC27B]/80">Services</Link>
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
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-[15px] text-gray-900 mb-4">
              <span>Home / </span>
              <span className="text-[#3CC27B]">help & support</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-['Russo_One'] text-[#161616] mb-6">
              Help & Support
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed mb-8">
              We're here to help you succeed in your crypto journey. Find answers to your questions or contact our expert support team.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Search for help articles, faq etc..."
                  className="w-full px-7 py-3 bg-[#F0F0F0] rounded-md text-[11px] text-gray-900 placeholder:text-[#898989] focus:outline-none focus:ring-2 focus:ring-[#3CC27B]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-['Russo_One'] text-[#161616] text-center mb-12">
              Get In Touch
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Live Chat Card */}
              <div className="bg-gradient-to-br from-[#3CC27B] to-[#1C5C3A] rounded-[13px] p-9 flex flex-col items-center text-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3CC27B] flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Live Chat</h3>
                <p className="text-white leading-relaxed">
                  Get instant help from our support team
                </p>
                <p className="text-sm text-white">24/7 Available</p>
                <Button className="bg-white hover:bg-gray-50 text-[#161616] px-6 h-9 text-[13px] font-medium rounded-md border border-gray-200 mt-auto">
                  Start Chat
                </Button>
              </div>

              {/* Email Support Card */}
              <div className="bg-gradient-to-br from-[#3CC27B] to-[#1C5C3A] rounded-[13px] p-9 flex flex-col items-center text-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3CC27B] flex items-center justify-center">
                  <MailIcon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Email Support</h3>
                <p className="text-white leading-relaxed">
                  Send us a detailed message
                </p>
                <p className="text-sm text-white">Response within 2-4 hours</p>
                <Button className="bg-white hover:bg-gray-50 text-[#161616] px-6 h-9 text-[13px] font-medium rounded-md border border-gray-200 mt-auto">
                  Send Email
                </Button>
              </div>

              {/* Phone Support Card */}
              <div className="bg-gradient-to-br from-[#3CC27B] to-[#1C5C3A] rounded-[13px] p-9 flex flex-col items-center text-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3CC27B] flex items-center justify-center">
                  <PhoneIcon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Phone Support</h3>
                <p className="text-white leading-relaxed">
                  Speak directly with our experts
                </p>
                <p className="text-sm text-white">Mon-Fri, 9AM-6PM IST</p>
                <Button className="bg-white hover:bg-gray-50 text-[#161616] px-6 h-9 text-[13px] font-medium rounded-md border border-gray-200 mt-auto">
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Guides Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-['Russo_One'] text-[#161616] text-center mb-12">
              Help Guides
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Guide 1 */}
              <div className="bg-white border border-[#D8D8D8] rounded-lg p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-[#3CC27B]" />
                  <span className="text-[13px] text-gray-900">10 min read</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Complete Beginner's Guide to Crypto Trading
                </h3>
                <p className="text-gray-900 leading-relaxed mb-4">
                  Learn the basics of cryptocurrency trading from scratch
                </p>
                <button className="flex items-center gap-2 text-[#3CC27B] text-[13px] font-medium hover:gap-3 transition-all">
                  Read Guide
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Guide 2 */}
              <div className="bg-white border border-[#D8D8D8] rounded-lg p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-[#3CC27B]" />
                  <span className="text-[13px] text-gray-900">10 min read</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  How to Secure Your Crypto Wallet
                </h3>
                <p className="text-gray-900 leading-relaxed mb-4">
                  Best practices for keeping your cryptocurrency safe
                </p>
                <button className="flex items-center gap-2 text-[#3CC27B] text-[13px] font-medium hover:gap-3 transition-all">
                  Read Guide
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Guide 3 */}
              <div className="bg-white border border-[#D8D8D8] rounded-lg p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-[#3CC27B]" />
                  <span className="text-[13px] text-gray-900">10 min read</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Understanding Crypto Market Analysis
                </h3>
                <p className="text-gray-900 leading-relaxed mb-4">
                  Technical and fundamental analysis for crypto trading
                </p>
                <button className="flex items-center gap-2 text-[#3CC27B] text-[13px] font-medium hover:gap-3 transition-all">
                  Read Guide
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Guide 4 */}
              <div className="bg-white border border-[#D8D8D8] rounded-lg p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-[#3CC27B]" />
                  <span className="text-[13px] text-gray-900">10 min read</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Tax Implications of Crypto Trading in India
                </h3>
                <p className="text-gray-900 leading-relaxed mb-4">
                  Everything you need to know about crypto taxation
                </p>
                <button className="flex items-center gap-2 text-[#3CC27B] text-[13px] font-medium hover:gap-3 transition-all">
                  Read Guide
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-['Russo_One'] text-[#161616] text-center mb-12">
              Contact Information
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#3CC27B] flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-900 leading-relaxed">
                    support@cryptotrade.com<br />
                    business@cryptotrade.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#3CC27B] flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-900 leading-relaxed">
                    +91 1800-123-4567<br />
                    Mon-Fri, 9AM-6PM IST
                  </p>
                </div>
              </div>

              {/* Live Chat */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#3CC27B] flex items-center justify-center flex-shrink-0 mt-1">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Live Chat</h3>
                  <p className="text-gray-900 leading-relaxed">
                    support@cryptotrade.com<br />
                    business@cryptotrade.com
                  </p>
                </div>
              </div>
            </div>
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
