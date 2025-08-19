"use client";
import React, {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      <div className="bg-white shadow-lg rounded-lg w-full py-3.5 px-6 flex justify-between items-center font-semibold">
        <div className="hidden md:flex gap-7">
          <Link
            href="/"
            className={`relative hover:text-gray-600 transition-colors duration-200 ${
              pathname === "/" ? "text-gray-900" : ""
            }`}>
            Home
            {pathname === "/" && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gray-900 rounded-full transition-all duration-300"></div>
            )}
          </Link>
          <Link
            href="/services"
            className={`relative hover:text-gray-600 transition-colors duration-200 ${
              pathname === "/services" ? "text-gray-900" : ""
            }`}>
            Services
            {pathname === "/services" && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gray-900 rounded-full transition-all duration-300"></div>
            )}
          </Link>
          <Link
            href="/pricing"
            className={`relative hover:text-gray-600 transition-colors duration-200 ${
              pathname === "/pricing" ? "text-gray-900" : ""
            }`}>
            Pricing
            {pathname === "/pricing" && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gray-900 rounded-full transition-all duration-300"></div>
            )}
          </Link>
          <Link
            href="/about"
            className={`relative hover:text-gray-600 transition-colors duration-200 ${
              pathname === "/about" ? "text-gray-900" : ""
            }`}>
            About
            {pathname === "/about" && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gray-900 rounded-full transition-all duration-300"></div>
            )}
          </Link>
        </div>
        <Link
          href="/contact"
          className="hidden md:block bg-gray-950 text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors duration-200">
          Contact
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu">
          <div
            className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}></div>
          <div
            className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}></div>
          <div
            className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}></div>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                pathname === "/" ? "bg-gray-100 text-gray-900 font-semibold" : ""
              }`}>
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                pathname === "/services" ? "bg-gray-100 text-gray-900 font-semibold" : ""
              }`}>
              Services
            </Link>
            <Link
              href="/pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                pathname === "/pricing" ? "bg-gray-100 text-gray-900 font-semibold" : ""
              }`}>
              Pricing
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                pathname === "/about" ? "bg-gray-100 text-gray-900 font-semibold" : ""
              }`}>
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mx-6 my-3 bg-gray-950 text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors duration-200 text-center">
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
