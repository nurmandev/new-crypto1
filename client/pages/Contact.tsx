import { Button } from "@/components/ui/button";
import { 
  Users,
  Mail as MailIcon,
  Phone as PhoneIcon,
  Clock,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Twitter,
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
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
              <Link to="/services" className="text-gray-900 hover:text-[#3CC27B]">Services</Link>
              <a href="#" className="text-[#3CC27B] font-medium hover:text-[#3CC27B]/80">Contact</a>
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
              Contact Us
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
              Have questions about crypto trading? Need help with your account? Our expert support team is here to help you 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Feel Free To Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-['Russo_One'] text-[#161616] text-center mb-6">
              Feel Free To Contact US & Reach Us
            </h2>
            <p className="text-xl text-gray-900 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Choose the contact method that works best for you. Our team is ready to assist with any questions or concerns.
            </p>

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

      {/* Contact Form and Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white border border-[#C0C0C0] rounded-lg p-8 lg:p-12">
                <h2 className="text-4xl md:text-5xl font-['Russo_One'] text-[#161616] text-center mb-8">
                  Send Us A Message
                </h2>

                <form className="space-y-6">
                  <div>
                    <label className="block text-[15px] text-gray-900 font-medium mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full px-8 py-4 bg-[#F0F0F0] rounded-md text-[13px] text-gray-900 placeholder:text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-[#3CC27B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[15px] text-gray-900 font-medium mb-3">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Brief Description of Your Inquiry"
                      className="w-full px-8 py-4 bg-[#F0F0F0] rounded-md text-[13px] text-gray-900 placeholder:text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-[#3CC27B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[15px] text-gray-900 font-medium mb-3">
                      Email ID
                    </label>
                    <input
                      type="email"
                      placeholder="usdtmpay@gmail.com"
                      className="w-full px-8 py-4 bg-[#F0F0F0] rounded-md text-[13px] text-gray-900 placeholder:text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-[#3CC27B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[15px] text-gray-900 font-medium mb-3">
                      Category
                    </label>
                    <div className="relative">
                      <select className="w-full px-8 py-4 bg-[#F0F0F0] rounded-md text-[13px] text-[#8E8E8E] appearance-none focus:outline-none focus:ring-2 focus:ring-[#3CC27B]">
                        <option>Select Category</option>
                        <option>Technical Support</option>
                        <option>Account Issues</option>
                        <option>Trading Questions</option>
                        <option>General Inquiry</option>
                      </select>
                      <ChevronDown className="absolute right-8 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-900 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[15px] text-gray-900 font-medium mb-3">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Please provide as much detail as possible about your inquiry"
                      className="w-full px-8 py-4 bg-[#F0F0F0] rounded-md text-[13px] text-gray-900 placeholder:text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-[#3CC27B] resize-none"
                    />
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">Email</h3>
                    <p className="text-gray-900 leading-relaxed">
                      support@cryptotrade.com<br />
                      business@cryptotrade.com
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">Phone</h3>
                    <p className="text-gray-900 leading-relaxed">
                      +91 1800-123-4567<br />
                      Mon-Fri, 9AM-6PM IST
                    </p>
                  </div>
                </div>

                {/* Live Chat (duplicate) */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">Live Chat</h3>
                    <p className="text-gray-900 leading-relaxed">
                      support@cryptotrade.com<br />
                      business@cryptotrade.com
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">Live Chat</h3>
                    <p className="text-gray-900 leading-relaxed">
                      support@cryptotrade.com<br />
                      business@cryptotrade.com
                    </p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { text: "24x7 Live chat" },
                      { text: "Raise Ticket" },
                      { text: "instant solution" },
                      { text: "Social media" },
                      { text: "personal manager" },
                      { text: "Dedicated agent" }
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#3CC27B] flex-shrink-0" />
                        <span className="text-[17px] text-gray-900">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Contact Details */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#3CC27B] flex-shrink-0 mt-1" />
                    <span className="text-gray-900">123 Market Street, Suite 500, San Francisco, CA 94103</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#3CC27B] flex-shrink-0 mt-1" />
                    <span className="text-gray-900">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#3CC27B] flex-shrink-0 mt-1" />
                    <span className="text-gray-900">us@cryptotrade.com</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#3CC27B] flex-shrink-0 mt-1" />
                    <span className="text-gray-900">Mon-Fri: 9:00 AM - 6:00 PM IST</span>
                  </div>
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
