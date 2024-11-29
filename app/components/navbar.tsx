"use client"

import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#074643] fixed top-0 w-[100%] z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        
        <div className="text-[24px] text-[#FFD700]">
          卂ⓛᵐαŞ 𝕜𝔸ℕＷ𝓐Ł
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className="text-[#ffffff] hover:text-[#FFD700]">
            Home
          </Link>
          <Link href="#" className="text-[#ffffff] hover:text-[#FFD700]">
            About
          </Link>
          <Link href="#" className="text-[#ffffff] hover:text-[#FFD700]">
            Services
          </Link>
          <Link href="#" className="text-[#ffffff] hover:text-[#FFD700]">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-[24px] text-[#ffffff] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HiBars3 />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#074643] text-center py-4 space-y-4 border-t border-[#FFD700]">
          <div className="text-[#ffffff]">Home</div>
          <div className="text-[#ffffff]">About</div>
          <div className="text-[#ffffff]">Services</div>
          <div className="text-[#ffffff]">Contact</div>
        </div>
      )}
    </div>
  );
}
