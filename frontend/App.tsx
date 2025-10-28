import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import BuyCrypto from "./pages/dashboard/BuyCrypto";
import SellCrypto from "./pages/dashboard/SellCrypto";
import SellSuccess from "./pages/dashboard/SellSuccess";
import PaymentMethod from "./pages/dashboard/PaymentMethod";
import UPIPayment from "./pages/dashboard/UPIPayment";
import WalletPayment from "./pages/dashboard/WalletPayment";
import DepositWithdraw from "./pages/dashboard/DepositWithdraw";
import DepositFund from "./pages/dashboard/DepositFund";
import PurchaseSuccess from "./pages/dashboard/PurchaseSuccess";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/buy-crypto" element={<BuyCrypto />} />
          <Route path="/sell-crypto" element={<SellCrypto />} />
          <Route path="/sell-success" element={<SellSuccess />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
          <Route path="/upi-payment" element={<UPIPayment />} />
          <Route path="/wallet-payment" element={<WalletPayment />} />
          <Route path="/deposit-withdraw" element={<DepositWithdraw />} />
          <Route path="/deposit-fund" element={<DepositFund />} />
          <Route path="/purchase-success" element={<PurchaseSuccess />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

declare global {
  interface Window {
    __REACT_ROOT__?: any;
  }
}

const rootElement = document.getElementById("root");

if (rootElement) {
  // Create root only once and reuse across HMR updates
  if (!window.__REACT_ROOT__) {
    window.__REACT_ROOT__ = createRoot(rootElement);
  }

  window.__REACT_ROOT__.render(<App />);
}

if (import.meta.hot) {
  import.meta.hot.accept();
}
