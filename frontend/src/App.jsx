import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About_Us from "./pages/About_Us";
import Resources from "./pages/Resources";
import Services from "./pages/Services";
import My_Appointments from "./pages/My_Appointments";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import { SignedIn } from "@clerk/clerk-react";

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");

  // ✅ Ref to access ChatBot methods
  const chatBotRef = useRef();

  const handleOpenChat = () => {
    if (chatBotRef.current) {
      chatBotRef.current.openChat(); // call method inside ChatBot
    }
  };

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home onOpenChat={handleOpenChat} />} />
        <Route path="/about_us" element={<About_Us />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/services" element={<Services />} />
        <Route path="/my_appointments" element={<My_Appointments />} />
      </Routes>

      {!isAdminRoute && (
        <SignedIn>
          <ChatBot ref={chatBotRef} /> {/* ✅ Always mounted */}
        </SignedIn>
      )}

      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
