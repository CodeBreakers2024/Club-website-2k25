"use client"

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GlassSurface from "@/components/GlassSurface";
import Button from "@/components/Button";

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return(
    <header className="fixed top-0 w-full z-50 flex justify-center items-center font-['Montserrat'] font-medium px-4 sm:px-6 md:px-4 pt-5 sm:pt-6 md:pt-7">
      <GlassSurface 
        width={null} 
        height={null} 
        borderRadius={40} 
        borderWidth={null} 
        opacity={0.8} 
        blur={40} 
        displace={3} 
        distortionScale={30} 
        backgroundOpacity={0.7}
        additionalClasses="flex-col lg:flex-row"
        className="w-full sm:w-[92vw] md:w-[85vw] lg:w-[60vw] h-auto min-h-[36px] lg:min-h-[48px] relative flex flex-col lg:flex-row justify-center items-center py-0 lg:py-0"
      >
        <div className="w-full flex flex-row justify-between items-center lg:px-6 max-lg:px-3">
          <Link href="/">
            <img src="./tcb.webp" alt="TCB Logo" className="lg:w-10 lg:h-10 max-lg:w-7 max-lg:h-7 aspect-square" />
          </Link>
          
          <nav className="hidden lg:block">
            <ul className="flex flex-row justify-between items-center gap-x-6 xl:gap-x-8 text-white font-medium text-sm xl:text-base">
              <li>
                <Link 
                  href={"/"} 
                  className={`relative pb-1 transition-all ${pathname === "/" ? "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[60%] after:h-[1px] after:bg-white" : "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-[60%] after:h-[1px] after:bg-white/50 after:transition-all after:duration-300"}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href={"/team"} 
                  className={`relative pb-1 transition-all ${pathname === "/team" ? "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[60%] after:h-[1px] after:bg-white" : "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-[60%] after:h-[1px] after:bg-white/50 after:transition-all after:duration-300"}`}
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link 
                  href={"/achievements"} 
                  className={`relative pb-1 transition-all ${pathname === "/achievements" ? "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[60%] after:h-[1px] after:bg-white" : "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-[60%] after:h-[1px] after:bg-white/50 after:transition-all after:duration-300"}`}
                >
                  Achievements
                </Link>
              </li>
              <li>
                <Link 
                  href={"/events"} 
                  className={`relative pb-1 transition-all ${pathname === "/events" ? "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[60%] after:h-[1px] after:bg-white" : "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-[60%] after:h-[1px] after:bg-white/50 after:transition-all after:duration-300"}`}
                >
                  Events
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Button name="Follow Us"/>
          </div>

          <button 
            className="lg:hidden text-white focus:outline-none z-50 transition-transform duration-300 p-1 touch-manipulation min-h-[40px] min-w-[40px] flex items-center justify-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg 
              className="w-6 h-6 transition-transform duration-300" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div 
          className={`lg:hidden w-full px-4 overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100 pb-6 pt-6' 
              : 'max-h-0 opacity-0 pb-0 pt-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 justify-center items-center">
            <Link 
              href={"/"} 
              className={`text-white py-3 px-6 transition-all duration-200 relative touch-manipulation min-h-[48px] flex items-center ${pathname === "/" ? "after:content-[''] after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-[40%] after:h-[1px] after:bg-white" : "after:content-[''] after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-[40%] after:h-[1px] after:bg-white/50 after:transition-all after:duration-300"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href={"/team"} 
              className={`text-white py-3 px-6 transition-all duration-200 relative touch-manipulation min-h-[48px] flex items-center ${pathname === "/team" ? "after:content-[''] after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-[40%] after:h-[1px] after:bg-white" : "after:content-[''] after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-[40%] after:h-[1px] after:bg-white/50 after:transition-all after:duration-300"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link 
              href={"/achievements"} 
              className={`text-white py-3 px-6 transition-all duration-200 relative touch-manipulation min-h-[48px] flex items-center ${pathname === "/achievements" ? "after:content-[''] after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-[40%] after:h-[1px] after:bg-white" : "after:content-[''] after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-[40%] after:h-[1px] after:bg-white/50 after:transition-all after:duration-300"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Achievements
            </Link>
            <Link 
              href={"/events"} 
              className={`text-white py-3 px-6 transition-all duration-200 relative touch-manipulation min-h-[48px] flex items-center ${pathname === "/events" ? "after:content-[''] after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-[40%] after:h-[1px] after:bg-white" : "after:content-[''] after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-[40%] after:h-[1px] after:bg-white/50 after:transition-all after:duration-300"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </Link>
            <div className="pt-2">
              <Button name="Follow Us"/>
            </div>
          </nav>
        </div>
      </GlassSurface>
    </header>
  );
};

export default Header