




"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Heart,
  ScanLine,
  Menu,
  X,
  User,
  LogOut,
} from "lucide-react";

export default function NavbarAfterAuth() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  const handleLogout = () => {
    console.log("🔴 Logout button clicked!");

    localStorage.removeItem("accessToken"); 
    localStorage.removeItem("userToken");  
    localStorage.removeItem("userData");  

    setIsDropdownOpen(false); 

    window.dispatchEvent(new Event("authChange")); 

    console.log("✅ Redirecting to Login Page...");

    setTimeout(() => {
      window.location.replace("/login"); 
    }, 100);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4 transition-all duration-300">
        
       
        <div className="hidden md:flex items-center gap-4">
          {[
            { icon: <ShoppingCart size={20} />, text: "Cart", action: () => navigate("/cart") },
            { icon: <Heart size={20} />, text: "Wishlist", action: () => navigate("/wishlist") },
            { icon: <ScanLine size={20} />, text: "Scanner", action: () => navigate("/ai_help") }
          ].map((item, index) => (
            <div
              key={index}
              onClick={item.action}
              className="flex items-center gap-2 cursor-pointer transform transition-transform hover:scale-105"
            >
              <div className="p-2 bg-[#2E5B41] text-white rounded-full">
                {item.icon}
              </div>
              <span className="text-gray-700 font-medium">{item.text}</span>
            </div>
          ))}
        </div>

      
        <div className="flex items-center transition-transform duration-300 hover:scale-110">
          <img
            src="lovable-uploads/logo.png"
            alt="Grovana Logo"
            className="h-12 md:h-16 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-semibold">
          {[
            { name: "Home", action: () => navigate("/") },
            { name: "Shop", action: () => navigate("/Products") },
            { name: "About Us", action: () => navigate("/", { state: { scrollTo: "about_us" } }) },
            { name: "Community", action: () => navigate("/community") },
            { name: "Review", action: () => navigate("/", { state: { scrollTo: "review" } }) },
          ].map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="block py-2 text-lg transform transition-transform hover:scale-105 cursor-pointer hover:text-green-700"
            >
              {item.name}
            </button>
          ))}

         
          <div className="relative">
            <img
              src="lovable-uploads/AiScaner.jpg"
              alt="User"
              className="w-10 h-10 rounded-full object-cover cursor-pointer transition-transform hover:scale-110"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                <button
                  onClick={() => navigate("/profile")}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 transition w-full text-left"
                >
                  <User size={18} /> Profile
                </button>
                <button
                  onClick={handleLogout} 
                  className="flex w-full items-center gap-3 px-4 py-3 text-red-600 hover:bg-gray-100 transition"
                >
                  <LogOut size={18} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}








































