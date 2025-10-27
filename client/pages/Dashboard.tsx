import { Link } from "react-router-dom";
import { Bell, Plus, TrendingUp, TrendingDown } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Top Navigation Bar */}
      <div className="bg-white rounded-[10px] mx-4 lg:mx-12 mt-6 px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg"></div>
          <span className="text-2xl font-bold text-gray-900">USDTMPAY</span>
        </Link>
        
        <h1 className="text-3xl font-['Russo_One'] text-black hidden lg:block">Dashboard</h1>
        
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="px-9 py-2 bg-[#161616] text-white text-[15px] font-medium rounded-md hover:bg-black/80 transition-colors"
          >
            Go to Home
          </Link>
          <div className="w-10 h-10 rounded-full bg-[#D9D9D9] cursor-pointer"></div>
          <div className="relative">
            <Bell className="w-5 h-5 text-[#C7C7C7]" />
            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#3CC27B] rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-12 mt-6 flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-64 bg-white rounded-lg overflow-hidden">
          <div className="bg-[#3CC27B] px-6 py-4 flex items-center gap-3 text-white">
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 13.2857V5.57143C0 5.3 0.0621248 5.04286 0.186375 4.8C0.310625 4.55714 0.481833 4.35714 0.7 4.2L5.95 0.342857C6.25625 0.114286 6.60625 0 7 0C7.39375 0 7.74375 0.114286 8.05 0.342857L13.3 4.2C13.5187 4.35714 13.6902 4.55714 13.8145 4.8C13.9387 5.04286 14.0006 5.3 14 5.57143V13.2857C14 13.7571 13.8285 14.1609 13.4855 14.4969C13.1425 14.8329 12.7307 15.0006 12.25 15H9.625C9.37708 15 9.16941 14.9177 9.002 14.7531C8.83458 14.5886 8.75058 14.3851 8.75 14.1429V9.85714C8.75 9.61428 8.666 9.41086 8.498 9.24686C8.33 9.08286 8.12233 9.00057 7.875 9H6.125C5.87708 9 5.66942 9.08228 5.502 9.24686C5.33458 9.41143 5.25058 9.61486 5.25 9.85714V14.1429C5.25 14.3857 5.166 14.5894 4.998 14.754C4.83 14.9186 4.62233 15.0006 4.375 15H1.75C1.26875 15 0.856916 14.8323 0.5145 14.4969C0.172083 14.1614 0.000583333 13.7577 0 13.2857Z" fill="white"/>
            </svg>
            <span className="text-lg font-semibold">Dashboard</span>
          </div>
          
          <nav className="p-6 space-y-7">
            <div className="flex items-center gap-3 text-black cursor-pointer hover:text-[#3CC27B] transition-colors">
              <TrendingUp className="w-[18px] h-[18px]" />
              <span className="text-lg">Buy / Sell  Crypto</span>
            </div>
            
            <div className="flex items-center gap-3 text-black cursor-pointer hover:text-[#3CC27B] transition-colors">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.25 0C1.65326 0 1.08097 0.237053 0.65901 0.65901C0.237053 1.08097 0 1.65326 0 2.25V15H12.75C13.3467 15 13.919 14.7629 14.341 14.341C14.7629 13.919 15 13.3467 15 12.75V5.25C15 4.65326 14.7629 4.08097 14.341 3.65901C13.919 3.23705 13.3467 3 12.75 3H2.25C2.05109 3 1.86032 2.92098 1.71967 2.78033C1.57902 2.63968 1.5 2.44891 1.5 2.25C1.5 2.05109 1.57902 1.86032 1.71967 1.71967C1.86032 1.57902 2.05109 1.5 2.25 1.5H13.5V0H2.25ZM12 9.75H9.75V8.25H12V9.75Z" fill="currentColor"/>
              </svg>
              <span className="text-lg">Deposit/Withdraw</span>
            </div>
            
            <div className="flex items-center gap-3 text-black cursor-pointer hover:text-[#3CC27B] transition-colors">
              <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.0087 4.58691H1.77391C1.30344 4.58691 0.85224 4.77381 0.519567 5.10648C0.186894 5.43915 0 5.89036 0 6.36083V14.6391C0 15.1096 0.186894 15.5608 0.519567 15.8934C0.85224 16.2261 1.30344 16.413 1.77391 16.413H13.0087C13.4792 16.413 13.9304 16.2261 14.263 15.8934C14.5957 15.5608 14.7826 15.1096 14.7826 14.6391V13.4565H15.0783C15.5879 13.4565 16.0767 13.254 16.4371 12.8936C16.7975 12.5332 17 12.0444 17 11.5347V9.46518C17 9.21281 16.9503 8.96291 16.8537 8.72976C16.7571 8.4966 16.6156 8.28475 16.4371 8.1063C16.2587 7.92785 16.0468 7.7863 15.8137 7.68972C15.5805 7.59314 15.3306 7.54344 15.0783 7.54344H14.7826V6.36083C14.7826 5.89036 14.5957 5.43915 14.263 5.10648C13.9304 4.77381 13.4792 4.58691 13.0087 4.58691ZM11.5304 9.0217C11.4128 9.0217 11.3 9.06842 11.2168 9.15159C11.1337 9.23476 11.087 9.34756 11.087 9.46518V11.5347C11.087 11.6524 11.1337 11.7652 11.2168 11.8483C11.3 11.9315 11.4128 11.9782 11.5304 11.9782H15.0783C15.1959 11.9782 15.3087 11.9315 15.3918 11.8483C15.475 11.7652 15.5217 11.6524 15.5217 11.5347V9.46518C15.5217 9.34756 15.475 9.23476 15.3918 9.15159C15.3087 9.06842 15.1959 9.0217 15.0783 9.0217H11.5304Z" fill="currentColor"/>
              </svg>
              <span className="text-lg">My Wallet</span>
            </div>
            
            <div className="flex items-center gap-3 text-black cursor-pointer hover:text-[#3CC27B] transition-colors">
              <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2.65909C0 1.95386 0.28785 1.27751 0.800226 0.77883C1.3126 0.280153 2.00753 0 2.73214 0H14.2679C14.9925 0 15.6874 0.280153 16.1998 0.77883C16.7122 1.27751 17 1.95386 17 2.65909V10.3409C17 11.0461 16.7122 11.7225 16.1998 12.2212C15.6874 12.7198 14.9925 13 14.2679 13H2.73214C2.00753 13 1.3126 12.7198 0.800226 12.2212C0.28785 11.7225 0 11.0461 0 10.3409V2.65909ZM2.73214 1.18182C2.32958 1.18182 1.94351 1.33746 1.65886 1.6145C1.3742 1.89154 1.21429 2.26729 1.21429 2.65909V3.54545H15.7857V2.65909C15.7857 2.26729 15.6258 1.89154 15.3411 1.6145C15.0565 1.33746 14.6704 1.18182 14.2679 1.18182H2.73214ZM1.21429 10.3409C1.21429 10.7327 1.3742 11.1085 1.65886 11.3855C1.94351 11.6625 2.32958 11.8182 2.73214 11.8182H14.2679C14.6704 11.8182 15.0565 11.6625 15.3411 11.3855C15.6258 11.1085 15.7857 10.7327 15.7857 10.3409V4.72727H1.21429V10.3409ZM11.5357 8.27273H13.3571C13.5182 8.27273 13.6726 8.33498 13.7865 8.4458C13.9003 8.55662 13.9643 8.70692 13.9643 8.86364C13.9643 9.02035 13.9003 9.17066 13.7865 9.28147C13.6726 9.39229 13.5182 9.45455 13.3571 9.45455H11.5357C11.3747 9.45455 11.2203 9.39229 11.1064 9.28147C10.9925 9.17066 10.9286 9.02035 10.9286 8.86364C10.9286 8.70692 10.9925 8.55662 11.1064 8.4458C11.2203 8.33498 11.3747 8.27273 11.5357 8.27273Z" fill="currentColor"/>
              </svg>
              <span className="text-lg">Payment Methods</span>
            </div>
            
            <div className="flex items-center gap-3 text-black cursor-pointer hover:text-[#3CC27B] transition-colors">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15C5.58333 15 3.91333 14.3647 2.49 13.0942C1.06667 11.8236 0.250556 10.2367 0.0416666 8.33333H1.75C1.94444 9.77777 2.58694 10.9722 3.6775 11.9167C4.76806 12.8611 6.04222 13.3333 7.5 13.3333C9.125 13.3333 10.5036 12.7675 11.6358 11.6358C12.7681 10.5042 13.3339 9.12555 13.3333 7.5C13.3328 5.87444 12.7669 4.49611 11.6358 3.365C10.5047 2.23389 9.12611 1.66778 7.5 1.66667C6.54167 1.66667 5.64583 1.88889 4.8125 2.33333C3.97917 2.77778 3.27778 3.38889 2.70833 4.16667H5V5.83333H0V0.833333H1.66667V2.79167C2.375 1.90278 3.23972 1.21528 4.26083 0.729166C5.28194 0.243055 6.36167 0 7.5 0C8.54167 0 9.5175 0.198056 10.4275 0.594167C11.3375 0.990278 12.1292 1.52472 12.8025 2.1975C13.4758 2.87028 14.0106 3.66194 14.4067 4.5725C14.8028 5.48305 15.0006 6.45889 15 7.5C14.9994 8.54111 14.8017 9.51694 14.4067 10.4275C14.0117 11.3381 13.4769 12.1297 12.8025 12.8025C12.1281 13.4753 11.3364 14.01 10.4275 14.4067C9.51861 14.8033 8.54278 15.0011 7.5 15ZM9.83333 11L6.66667 7.83333V3.33333H8.33333V7.16666L11 9.83333L9.83333 11Z" fill="currentColor"/>
              </svg>
              <span className="text-lg">History</span>
            </div>
            
            <div className="flex items-center gap-3 text-black cursor-pointer hover:text-[#3CC27B] transition-colors">
              <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.84375 0.121197L1.21875 2.28069C0.4875 2.56863 0 3.27886 0 4.08507V8.59602C0 13.2317 2.93438 17.5891 6.96563 18.9136C7.3125 19.0288 7.6875 19.0288 8.03437 18.9136C12.0656 17.5891 15 13.2413 15 8.59602V4.08507C14.9993 3.6945 14.8823 3.31343 14.6645 2.99274C14.4468 2.67205 14.1386 2.42699 13.7813 2.29029L8.15625 0.130795C7.73437 -0.0419645 7.26563 -0.0419645 6.84375 0.121197Z" fill="currentColor"/>
              </svg>
              <span className="text-lg">Wallet Security</span>
            </div>
            
            <div className="flex items-center gap-3 text-black cursor-pointer hover:text-[#3CC27B] transition-colors">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.49998 0C9.61622 -5.23227e-06 10.7215 0.219849 11.7528 0.647011C12.7841 1.07417 13.7211 1.70028 14.5104 2.48957C15.2997 3.27887 15.9258 4.2159 16.353 5.24717C16.7801 6.27844 17 7.38374 17 8.49998C17 13.1944 13.1944 17 8.49998 17C3.80559 17 0 13.1944 0 8.49998C0 3.80559 3.80559 0 8.49998 0ZM9.35001 9.35001H7.64999C5.54565 9.35001 3.73901 10.6245 2.95979 12.4438C4.19271 14.1726 6.2147 15.3 8.49998 15.3C10.7853 15.3 12.8072 14.1726 14.0402 12.4437C13.261 10.6245 11.4544 9.35001 9.35001 9.35001ZM8.49998 2.55C7.09166 2.55 5.94998 3.69168 5.94998 5.1C5.94998 6.50831 7.09166 7.64999 8.49998 7.64999C9.9083 7.64999 11.05 6.50831 11.05 5.1C11.05 3.69168 9.90834 2.55 8.49998 2.55Z" fill="currentColor"/>
              </svg>
              <span className="text-lg">My Profile</span>
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-[#EBEBEB] rounded text-black text-[15px]">
              <span>Logout</span>
              <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 7L8.82481 11.3577L7.82654 10.3158L10.2975 7.73684H3.52992V6.26316H10.2975L7.82654 3.68421L8.82481 2.64232L13 7ZM4.94189 1.47368H1.41197V12.5263H4.94189V14H0V0H4.94189V1.47368Z" fill="black"/>
              </svg>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Balance Card */}
          <div className="bg-gradient-to-r from-[#3CC27B] to-[#00602D] rounded-[10px] p-8">
            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="text-white text-xl mb-2">Your Balance</p>
                <h2 className="text-white text-5xl font-bold">₹5,656.6</h2>
              </div>
              <button className="text-white/80 hover:text-white">
                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 8.50012C10.2044 8.50012 9.44129 8.81619 8.87868 9.3788C8.31607 9.94141 8 10.7045 8 11.5001C8 12.2958 8.31607 13.0588 8.87868 13.6214C9.44129 14.1841 10.2044 14.5001 11 14.5001C11.7956 14.5001 12.5587 14.1841 13.1213 13.6214C13.6839 13.0588 14 12.2958 14 11.5001C14 10.7045 13.6839 9.94141 13.1213 9.3788C12.5587 8.81619 11.7956 8.50012 11 8.50012ZM11 16.5001C9.67392 16.5001 8.40215 15.9733 7.46447 15.0357C6.52678 14.098 6 12.8262 6 11.5001C6 10.174 6.52678 8.90227 7.46447 7.96459C8.40215 7.02691 9.67392 6.50012 11 6.50012C12.3261 6.50012 13.5979 7.02691 14.5355 7.96459C15.4732 8.90227 16 10.174 16 11.5001C16 12.8262 15.4732 14.098 14.5355 15.0357C13.5979 15.9733 12.3261 16.5001 11 16.5001ZM11 4.00012C6 4.00012 1.73 7.11012 0 11.5001C1.73 15.8901 6 19.0001 11 19.0001C16 19.0001 20.27 15.8901 22 11.5001C20.27 7.11012 16 4.00012 11 4.00012Z" fill="#E5E5E5"/>
                  <path d="M5 1.00012L16.8359 21.5001" stroke="#EDEDED" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-6">
              <ActionButton icon={<PlusIcon />} label="Add Balance" />
              <ActionButton icon={<CashoutIcon />} label="Cashout" />
              <ActionButton icon={<TrendingUp className="w-8 h-8" />} label="Buy" />
              <ActionButton icon={<TrendingDown className="w-8 h-8" />} label="Sell" />
              <ActionButton icon={<WalletIcon />} label="Wallet" />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard
              title="Available to Trade"
              value="₹25,430.00"
              icon={<RupeeIcon />}
              iconBg="bg-gray-100"
            />
            <StatsCard
              title="Today's P&L"
              value="+₹2,340"
              valueColor="text-[#3CC27B]"
              icon={<TrendingUp className="w-6 h-6 text-[#3CC27B]" />}
              iconBg="bg-[#3CC27B]/20"
            />
            <StatsCard
              title="Crypto Holdings"
              value="20 Coins"
              icon={<BitcoinIcon />}
              iconBg="bg-gray-100"
            />
          </div>

          {/* More Coming Soon */}
          <div className="bg-white rounded-[10px] p-8">
            <h3 className="text-xl font-medium mb-6">More Coming Soon</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <ComingSoonItem label="Recharge" sublabel="Mobile & DTH" />
              <ComingSoonItem label="Bill Pay" sublabel="Utility Bills" />
              <ComingSoonItem label="Brank Transfer" sublabel="Direct Transfer" />
              <ComingSoonItem label="Savings" sublabel="Investment Plans" />
              <ComingSoonItem label="Online Transfer" sublabel="P2P Payments" />
            </div>
          </div>

          {/* Crypto Holdings */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-medium">Your Crypto Holdings</h3>
              <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded text-xs">
                <Plus className="w-3 h-3" />
                Add Crypto
              </button>
            </div>
            
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <CryptoHoldingItem key={item} />
              ))}
            </div>
          </div>

          {/* Live Price Markets */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-medium">Live Price Markets</h3>
              <button className="px-4 py-2 bg-black text-white rounded text-xs">
                See All Charts
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PriceChart crypto="ETH" name="Ethereum" price="₹234,567" change="-3.14%" isDown />
              <PriceChart crypto="Sol" name="Solana" price="₹4,123,456" change="+3.14%" />
            </div>
          </div>
        </div>

        {/* Right Sidebar - Referral Panel */}
        <div className="w-full lg:w-[360px] space-y-6">
          {/* Referral Status */}
          <div className="bg-white rounded-[13px] p-6">
            <h3 className="text-xl font-medium mb-6">Referral Status</h3>
            <div className="flex justify-center mb-6">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-green-200 to-orange-200 flex items-center justify-center relative">
                <div className="absolute inset-4 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#10B981]"></div>
                  <span className="text-sm">Successful</span>
                </div>
                <span className="text-xs bg-[#F6F6F6] px-2 py-1 rounded-full">8</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#F59E0B]"></div>
                  <span className="text-sm">Pending</span>
                </div>
                <span className="text-xs bg-[#F6F6F6] px-2 py-1 rounded-full">4</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#EF4444]"></div>
                  <span className="text-sm">Failed</span>
                </div>
                <span className="text-xs bg-[#F6F6F6] px-2 py-1 rounded-full">2</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-[#3CC27B] rounded-full flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 10C13.1717 10 12.8466 10.0628 12.5433 10.1847C12.24 10.3066 11.9644 10.4854 11.7322 10.7107C11.5001 10.936 11.3159 11.2035 11.1903 11.4979C11.0647 11.7923 11 12.1078 11 12.4265C11 12.7451 11.0647 13.0606 11.1903 13.355C11.3159 13.6494 11.5001 13.9169 11.7322 14.1422C11.9644 14.3676 12.24 14.5463 12.5433 14.6682C12.8466 14.7902 13.1717 14.8529 13.5 14.8529C14.163 14.8529 14.7989 14.5973 15.2678 14.1422C15.7366 13.6872 16 13.07 16 12.4265C16 11.7829 15.7366 11.1657 15.2678 10.7107C14.7989 10.2556 14.163 10 13.5 10Z" fill="white"/>
                </svg>
              </div>
              <h4 className="text-xl font-medium">Invite Friends and Earn</h4>
            </div>

            <div className="bg-[#FAFAFA] rounded-lg border border-[#DBDBDB] p-5 mb-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium mb-1">Your Earnings</p>
                  <p className="text-[#3CC27B] text-base font-black">₹12,450</p>
                </div>
                <button className="px-4 py-1.5 bg-black text-white rounded text-xs">
                  Refer Now
                </button>
              </div>
            </div>

            <p className="text-[10px] text-gray-600">Earn ₹500 Fix Bonus on Each referal</p>
          </div>

          {/* Recent Referrals */}
          <div className="bg-white rounded-[13px] p-6">
            <h3 className="text-xl font-medium mb-4">Recent Referrals</h3>
            <div className="space-y-2">
              <ReferralItem status="Completed" />
              <ReferralItem status="Pending" />
              <ReferralItem status="Completed" />
              <ReferralItem status="Completed" />
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-[#3CC27B]/10 rounded-[13px] p-6">
            <h3 className="text-xl font-medium mb-4">How It Works:</h3>
            <ul className="text-xs space-y-3 text-gray-800 leading-6">
              <li>Your friend signs up using your link</li>
              <li>They get ₹150 signup bonus</li>
              <li>You earn ₹500 when they verify their account</li>
              <li>Bonuses are credited within 24 hours</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-28 h-28 rounded-full border-[7px] border-[#3CC27B] bg-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
        {icon}
      </div>
      <span className="text-white text-lg font-medium">{label}</span>
    </div>
  );
}

function StatsCard({ title, value, valueColor = "text-black", icon, iconBg }: any) {
  return (
    <div className="bg-white rounded-lg border border-[#D4D4D4] p-5 flex items-center justify-between gap-8">
      <div>
        <p className="text-sm text-black mb-2 font-normal">{title}</p>
        <p className={`text-lg font-medium ${valueColor}`}>{value}</p>
      </div>
      <div className={`w-8 h-8 ${iconBg} rounded-full flex items-center justify-center`}>
        {icon}
      </div>
    </div>
  );
}

function ComingSoonItem({ label, sublabel }: { label: string; sublabel: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-28 h-28 rounded-full border-[7px] border-[#3CC27B] bg-white shadow-lg flex items-center justify-center opacity-40">
        <div className="w-12 h-12 bg-gray-200 rounded"></div>
      </div>
      <div className="text-center">
        <p className="text-[#A7A7A7] text-lg font-medium">{label}</p>
        <p className="text-[#A7A7A7] text-sm">{sublabel}</p>
        <span className="inline-block mt-2 px-3 py-1 bg-[#FFE9CF] text-[#A7A7A7] text-xs rounded-full">
          coming soon
        </span>
      </div>
    </div>
  );
}

function CryptoHoldingItem() {
  return (
    <div className="bg-white rounded-lg border border-[#D4D4D4] p-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-yellow-600"></div>
        <div>
          <p className="text-lg font-bold">Doge</p>
          <p className="text-sm text-gray-600">Doge</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-medium">₹4,123,456</p>
        <span className="inline-block mt-1 px-3 py-1 bg-[#BDFDDB] text-black text-xs rounded">
          +3.14%
        </span>
      </div>
    </div>
  );
}

function PriceChart({ crypto, name, price, change, isDown }: any) {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-600"></div>
          <div>
            <p className="text-lg font-bold">{crypto}</p>
            <p className="text-sm text-gray-600">{name}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-medium">{price}</p>
          <span className={`inline-block mt-1 px-3 py-1 text-black text-xs rounded ${isDown ? 'bg-[#FDBDBD]' : 'bg-[#BDFDDB]'}`}>
            {change}
          </span>
        </div>
      </div>
      <div className="h-32 border-t border-dashed border-gray-300 relative">
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 272 62" fill="none">
          <path
            d={isDown ? "M271.45 0.114015C266.845 19.7615 253.702 59.4561 237.974 61.0545C218.313 63.0526 201.309 14.1004 174.209 7.1072C147.109 0.114026 127.448 30.0847 114.164 30.0847C100.88 30.0847 65.2776 4.60962 50.3992 9.10523C35.5208 13.6008 5.76392 31.5833 0.450195 42.5726" : "M0.486328 61.5C5.09156 41.8525 18.2342 2.15793 33.9628 0.559486C53.6236 -1.43856 70.6275 47.5137 97.7275 54.5068C124.828 61.5 144.488 31.5293 157.773 31.5293C171.057 31.5293 206.659 57.0044 221.537 52.5088C236.416 48.0132 266.173 30.0307 271.486 19.0415"}
            stroke={isDown ? "#FA1818" : "#3CC27B"}
            strokeWidth="1"
          />
        </svg>
      </div>
      <div className="flex justify-between mt-4 text-xs text-gray-500">
        <span>9:00</span>
        <span>10:00</span>
        <span>11:00</span>
        <span>12:00</span>
        <span>1:00</span>
        <span>2:00</span>
        <span>3:00</span>
      </div>
    </div>
  );
}

function ReferralItem({ status }: { status: string }) {
  return (
    <div className="bg-[#F6F6F6] rounded-lg p-4 flex items-center justify-between gap-12">
      <div>
        <p className="text-sm font-bold">Sarah Smith</p>
        <p className="text-xs text-gray-600">s***@email.com</p>
      </div>
      <span className={`px-3 py-1 rounded text-[8px] ${
        status === 'Completed' 
          ? 'bg-[#BDFDDB] text-[#1C5C3A]' 
          : 'bg-[#FBD25F]/65 text-black'
      }`}>
        {status}
      </span>
      <div className="text-right">
        <p className="text-lg font-medium">₹500</p>
        <p className="text-xs text-gray-600">2024-01-18</p>
      </div>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.3833 0.376106C19.3833 -1.97353 17.424 -4 15.0071 -4C12.5903 -4 10.6167 -1.97353 10.631 0.376106V11.631H-0.623903C-3.02647 11.631 -5 13.5903 -5 16.0071C-5 18.4097 -3.02647 20.3833 -0.623903 20.3833H10.631V31.6239C10.631 34.0265 12.5903 36 15.0071 36C17.4097 36 19.3833 34.0408 19.3833 31.6239V20.3833H30.6239C33.0265 20.3833 35 18.424 35 16.0071C35 13.6046 33.0408 11.631 30.6239 11.631H19.3833V0.376106Z" fill="#3CC27B"/>
    </svg>
  );
}

function CashoutIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 0C11.0444 0 7.17761 1.173 3.88861 3.37061C0.599607 5.56821 -1.96377 8.69181 -3.47764 12.3463C-4.99151 16.0008 -5.38736 20.0222 -4.6157 23.9018C-3.84403 27.7814 -1.9392 31.3451 0.857864 34.1421C3.65493 36.9392 7.21864 38.844 11.0982 39.6157C14.9778 40.3874 18.9991 39.9913 22.6537 38.4776C26.3082 36.9638 29.4318 34.4004 31.6294 31.1114C33.827 27.8224 35 23.9556 35 20C34.9944 14.6974 32.8855 9.6136 29.136 5.86396C25.3864 2.11451 20.3026 0.00560224 15 0ZM22.3692 9.84615H24.2308C24.6388 9.84615 25.0301 10.0082 25.3186 10.2968C25.6071 10.5853 25.7692 10.9766 25.7692 11.3846C25.7692 11.7926 25.6071 12.184 25.3186 12.4725C25.0301 12.761 24.6388 12.9231 24.2308 12.9231H22.6558C22.4613 15.0241 21.49 16.9769 19.9318 18.3996C18.3737 19.8223 16.3407 20.6124 14.2308 20.6154H11.7923L22.0981 28.6327C22.2653 28.7538 22.4065 28.9074 22.5131 29.0842C22.6197 29.261 22.6897 29.4575 22.7188 29.6619C22.7478 29.8664 22.7355 30.0746 22.6824 30.2741C22.6293 30.4737 22.5366 30.6605 22.4098 30.8235C22.283 30.9864 22.1247 31.1222 21.9443 31.2227C21.7639 31.3232 21.5651 31.3863 21.3598 31.4083C21.1545 31.4304 20.9469 31.4109 20.7493 31.3509C20.5516 31.291 20.3681 31.1919 20.2096 31.0596L6.36346 20.2904C6.11082 20.0935 5.92594 19.8226 5.83461 19.5155C5.74328 19.2085 5.75 18.8806 5.854 18.5776C5.958 18.2746 6.15391 18.0116 6.4145 17.8253C6.67509 17.6391 6.98736 17.5388 7.30769 17.5385H14.2308C15.5255 17.5383 16.7768 17.0717 17.7555 16.2241C18.7342 15.3764 19.3747 14.2045 19.5596 12.9231H7.30769C6.89974 12.9231 6.5084 12.761 6.21984 12.4725C5.93128 12.184 5.76923 11.7926 5.76923 11.3846C5.76923 10.9766 5.93128 10.5853 6.21984 10.2968C6.5084 10.0082 6.89974 9.84615 7.30769 9.84615H19.0942C18.6576 8.92581 17.9689 8.1481 17.1081 7.60339C16.2472 7.05868 15.2495 6.76952 14.2308 6.76923H7.30769C6.89974 6.76923 6.5084 6.60717 6.21984 6.31861C5.93128 6.03005 5.76923 5.63872 5.76923 5.23077C5.76923 4.82282 5.93128 4.43148 6.21984 4.14292C6.5084 3.85436 6.89974 3.69231 7.30769 3.69231H24.2308C24.6388 3.69231 25.0301 3.85436 25.3186 4.14292C25.6071 4.43148 25.7692 4.82282 25.7692 5.23077C25.7692 5.63872 25.6071 6.03005 25.3186 6.31861C25.0301 6.60717 24.6388 6.76923 24.2308 6.76923H20.7538C21.4999 7.67173 22.05 8.71963 22.3692 9.84615Z" fill="#3CC27B"/>
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.9099 0.673279C20.229 0.101553 22.7389 0.950315 24.0163 3.13424C24.3442 3.69528 24.7037 4.34974 25.0844 5.10259C22.4136 4.92584 18.4514 4.75869 13.022 4.75869C9.95907 4.75869 7.36401 4.81139 5.20312 4.89062C9.2664 3.19314 13.6875 1.71291 17.9099 0.673279ZM0.764397 39.1385C3.38147 39.3197 7.4 39.5 13.022 39.5C18.644 39.5 22.6624 39.3197 25.2796 39.1385C28.1613 38.9389 30.4347 36.7488 30.6712 33.842C30.7169 33.2867 30.7609 32.6678 30.8031 31.9853C29.9864 32.0091 29.044 32.024 27.967 32.024C26.4954 32.024 25.2734 31.9959 24.2835 31.9563C21.0844 31.8279 18.5015 29.3766 18.3556 26.0925C18.3204 25.2895 18.2967 24.3387 18.2967 23.2287C18.2967 22.1188 18.3204 21.168 18.3556 20.365C18.5015 17.0808 21.0844 14.6305 24.2835 14.5012C25.5108 14.4541 26.7389 14.4315 27.967 14.4335C29.044 14.4335 29.9864 14.4484 30.8031 14.4722C30.7609 13.7891 30.7169 13.1705 30.6712 12.6164C30.4347 9.70866 28.1613 7.51858 25.2796 7.31897C22.6624 7.13776 18.644 6.95747 13.022 6.95747C7.4 6.95747 3.38153 7.13776 0.764397 7.31897C-2.11736 7.51858 -4.39076 9.70866 -4.62727 12.6155C-4.81886 14.9709 -5 18.4573 -5 23.2287C-5 28.0002 -4.81886 31.4875 -4.62727 33.842C-4.39076 36.7488 -2.11736 38.9389 0.764397 39.1385ZM20.9903 25.9755C21.0738 27.8489 22.5174 29.2447 24.389 29.3195C25.3429 29.3582 26.5288 29.3854 27.967 29.3854C29.4053 29.3854 30.5912 29.3582 31.5451 29.3195C33.4176 29.2447 34.8602 27.8489 34.9437 25.9755C34.9771 25.213 35 24.3009 35 23.2287C35 22.1566 34.9771 21.2445 34.9437 20.482C34.8602 18.6086 33.4167 17.2128 31.5451 17.138C30.3529 17.0922 29.16 17.0702 27.967 17.0721C26.5288 17.0721 25.3429 17.0993 24.389 17.138C22.5165 17.2128 21.0738 18.6086 20.9903 20.482C20.9569 21.2445 20.9341 22.1557 20.9341 23.2287C20.9341 24.3018 20.9569 25.213 20.9903 25.9755ZM27.0879 21.0299C27.4376 21.0299 27.7731 21.1689 28.0204 21.4163C28.2677 21.6638 28.4066 21.9993 28.4066 22.3492V24.1083C28.4066 24.4582 28.2677 24.7937 28.0204 25.0412C27.7731 25.2886 27.4376 25.4276 27.0879 25.4276C26.7382 25.4276 26.4028 25.2886 26.1555 25.0412C25.9082 24.7937 25.7692 24.4582 25.7692 24.1083V22.3492C25.7692 21.9993 25.9082 21.6638 26.1555 21.4163C26.4028 21.1689 26.7382 21.0299 27.0879 21.0299Z" fill="#3CC27B"/>
    </svg>
  );
}

function RupeeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 1H15L14 3H10.74C11.22 3.58 11.58 4.26 11.79 5H15L14 7H12C11.8757 8.24665 11.3341 9.41468 10.4628 10.315C9.59159 11.2153 8.44191 11.7949 7.2 11.96V12H6.5L12.5 19H10L4 12V10H6.5C8.26 10 9.72 8.7 9.96 7H4L5 5H9.66C9.1 3.82 7.9 3 6.5 3H4L5 1Z" fill="black"/>
    </svg>
  );
}

function BitcoinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.211 6.0483L12.661 4.24831L11.561 3.99831L11.121 5.72831C10.831 5.65831 10.541 5.58831 10.241 5.52831L10.681 3.75831L9.59098 3.49831L9.14098 5.28831C8.90098 5.22831 8.66098 5.17831 8.44098 5.11831L6.93098 4.73831L6.63098 5.90831C6.63098 5.90831 7.45098 6.09831 7.43098 6.10831C7.88098 6.21831 7.96098 6.49831 7.94098 6.74831L6.71098 11.6783C6.66098 11.8183 6.50098 11.9983 6.21098 11.9483C6.22098 11.9583 5.41098 11.7483 5.41098 11.7483L4.87098 12.9983L6.29098 13.3583C6.56098 13.4283 6.82098 13.4983 7.08098 13.5583L6.62098 15.3783L7.72098 15.6583L8.17098 13.8483C8.47098 13.9283 8.76098 13.9983 9.04098 14.0783L8.59098 15.8683L9.69098 16.1483L10.151 14.3283C12.001 14.6783 13.421 14.5383 14.001 12.8483C14.501 11.4983 14.001 10.6983 13.001 10.1883C13.721 9.99831 14.261 9.54831 14.411 8.56831C14.611 7.23831 13.591 6.52831 12.211 6.04831Z" fill="black"/>
    </svg>
  );
}
