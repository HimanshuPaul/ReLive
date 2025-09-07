import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About_Us from "./pages/About_Us";
import Resources from "./pages/Resources";
import Services from "./pages/Services";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About_Us />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      {!isAdminRoute && <ChatBot />}
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
