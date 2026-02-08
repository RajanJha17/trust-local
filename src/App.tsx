import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Browse from "./pages/Browse";
import ListingDetail from "./pages/ListingDetail";
import PostListing from "./pages/PostListing";
import SearchPage from "./pages/SearchPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SafetyGuidelines from "./pages/SafetyGuidelines";
import Notifications from "./pages/Notifications";
import NotFound from "./pages/NotFound";

// Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Verify from "./pages/auth/Verify";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

// Profile
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";
import PublicProfile from "./pages/profile/PublicProfile";
import TrustScore from "./pages/profile/TrustScore";
import Reviews from "./pages/profile/Reviews";
import BlockedUsers from "./pages/profile/BlockedUsers";

// Listings
import CreateListing from "./pages/listings/CreateListing";
import MyListings from "./pages/listings/MyListings";
import EditListing from "./pages/listings/EditListing";
import Favorites from "./pages/listings/Favorites";
import RecentlyViewed from "./pages/listings/RecentlyViewed";

// Chat
import ChatInbox from "./pages/chat/ChatInbox";
import ChatConversation from "./pages/chat/ChatConversation";

// Transactions
import Checkout from "./pages/transactions/Checkout";
import Transactions from "./pages/transactions/Transactions";
import TransactionDetail from "./pages/transactions/TransactionDetail";
import Disputes from "./pages/transactions/Disputes";
import Refunds from "./pages/transactions/Refunds";
import LeaveReview from "./pages/transactions/LeaveReview";

// Seller
import SellerDashboard from "./pages/seller/SellerDashboard";
import BoostListing from "./pages/seller/BoostListing";
import Subscriptions from "./pages/seller/Subscriptions";
import BusinessProfile from "./pages/seller/BusinessProfile";

// Admin
import AdminDashboard from "./pages/admin/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Index />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/listing/:id" element={<ListingDetail />} />
          <Route path="/category/:slug" element={<Browse />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/safety-guidelines" element={<SafetyGuidelines />} />
          
          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          
          {/* Profile */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/profile/:userId" element={<PublicProfile />} />
          <Route path="/trust-score" element={<TrustScore />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blocked-users" element={<BlockedUsers />} />
          
          {/* Listings */}
          <Route path="/post" element={<PostListing />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/my-listings" element={<MyListings />} />
          <Route path="/edit-listing/:id" element={<EditListing />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recently-viewed" element={<RecentlyViewed />} />
          
          {/* Chat */}
          <Route path="/chat" element={<ChatInbox />} />
          <Route path="/chat/:chatId" element={<ChatConversation />} />
          <Route path="/notifications" element={<Notifications />} />
          
          {/* Transactions */}
          <Route path="/checkout/:listingId" element={<Checkout />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transaction/:id" element={<TransactionDetail />} />
          <Route path="/disputes" element={<Disputes />} />
          <Route path="/refunds" element={<Refunds />} />
          <Route path="/leave-review/:transactionId" element={<LeaveReview />} />
          
          {/* Seller */}
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
          <Route path="/boost-listing/:id" element={<BoostListing />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/business-profile" element={<BusinessProfile />} />
          
          {/* Admin */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
