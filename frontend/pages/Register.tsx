import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Register() {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <div className="h-screen w-full bg-white flex flex-col lg:flex-row overflow-hidden">
      {/* Left Side - Image Section */}
      <div className="hidden lg:flex lg:w-[58%] bg-[#F6F6F6] relative">
        <img
          src="./register-image.png"
          alt="Bitcoin and money"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-10 left-10">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-6 lg:py-0">
        <div className="w-full max-w-sm lg:max-w-xs">
          <div className="bg-white border border-[#D3D3D3] rounded-lg p-5 sm:p-6 shadow-sm">
            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-2xl sm:text-3xl font-['Russo_One'] mb-2 bg-gradient-to-r from-[#000] to-[#3CC27B] bg-clip-text text-transparent">
                Welcome
              </h1>
              <p className="text-[#838383] text-sm">
                Sign in / Register to continue
              </p>
            </div>

            {/* Toggle */}
            <div className="relative mb-5">
              <div className="w-full h-12 bg-[#F0F0F0] rounded-md"></div>
              <div
                className={`absolute top-1 ${
                  isSignIn ? "left-1" : "left-[calc(50%+2px)]"
                } w-[calc(50%-4px)] h-10 bg-white rounded transition-all duration-300`}
              ></div>
              <div className="absolute inset-0 flex">
                <Link
                  to="/login"
                  className={`flex-1 flex items-center justify-center text-sm font-medium ${
                    isSignIn ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  Sign In
                </Link>
                <button
                  className={`flex-1 text-sm font-medium ${
                    !isSignIn ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  Sign Up
                </button>
              </div>
            </div>

            {/* Input Fields */}
            {[
              { label: "Full Name", type: "text", placeholder: "Enter Full Name" },
              { label: "Username", type: "text", placeholder: "Enter Username" },
              { label: "Email Address", type: "email", placeholder: "Enter Your Mail ID" },
              { label: "Password", type: "password", placeholder: "Enter Your Password" },
            ].map((field, i) => (
              <div key={i} className="mb-4">
                <label className="block text-sm text-gray-900 font-medium mb-1.5">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2.5 bg-[#F0F0F0] rounded-md text-sm text-gray-900 placeholder:text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-[#3CC27B]"
                />
              </div>
            ))}

            {/* Register Button */}
            <button className="w-full flex items-center justify-center gap-2 bg-black hover:bg-black/90 text-white py-2.5 rounded-md transition-colors mb-4">
              <span className="text-sm font-medium">Register</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Divider */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#DFDFDF]"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-3 text-xs text-[#868686]">
                  or continue with
                </span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-col gap-2">
              <button className="w-full flex items-center justify-center gap-3 bg-[#F8F8F8] hover:bg-gray-100 py-2.5 rounded-md transition-colors">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path
                    d="M0.814286 4.1325C1.45131 2.89015 2.42818 1.84579 3.63582 1.11605C4.84345 0.386304 6.23431 -9.48652e-05 7.65306 1.74701e-08C9.71556 1.74701e-08 11.4482 0.74325 12.773 1.95375L10.5788 4.10475C9.7852 3.3615 8.77653 2.98275 7.65306 2.98275C5.65944 2.98275 3.97194 4.30275 3.37117 6.075C3.21811 6.525 3.13087 7.005 3.13087 7.5C3.13087 7.995 3.21811 8.475 3.37117 8.925C3.9727 10.698 5.65944 12.0172 7.65306 12.0172C8.6824 12.0172 9.55867 11.751 10.2444 11.301C10.6419 11.0445 10.9822 10.7117 11.2448 10.3226C11.5074 9.93357 11.6867 9.49639 11.7719 9.0375H7.65306V6.1365H14.8607C14.951 6.627 15 7.1385 15 7.67025C15 9.95475 14.1658 11.8777 12.7179 13.1827C11.452 14.3287 9.71939 15 7.65306 15C6.64793 15.0004 5.65258 14.8067 4.72389 14.4299C3.79519 14.0531 2.95137 13.5007 2.24063 12.8042C1.5299 12.1077 0.966196 11.2807 0.581736 10.3706C0.197276 9.46047 -0.00040168 8.48502 6.12792e-07 7.5C6.12792e-07 6.2895 0.295409 5.145 0.814286 4.1325Z"
                    fill="black"
                  />
                </svg>
                <span className="text-xs sm:text-sm text-gray-900">
                  Continue with Google
                </span>
              </button>

              <button className="w-full flex items-center justify-center gap-3 bg-[#F8F8F8] hover:bg-gray-100 py-2.5 rounded-md transition-colors">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path
                    d="M11.812 0.702881H13.613L8.588 6.46067L14.5 14.2972H9.871L6.244 9.54541L2.097 14.2972H0.295L5.669 8.13653L0 0.704001H4.746L7.521 5.04653L11.312 0.702881H11.812ZM10.504 12.9172H11.779L3.55 2.01113H2.183L10.504 12.9172Z"
                    fill="black"
                  />
                </svg>
                <span className="text-xs sm:text-sm text-gray-900">
                  Continue with Twitter
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Logo */}
          <div className="lg:hidden mt-6 flex justify-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
