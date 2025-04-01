import React, { useState } from "react";
import Logo from "../assets/nodemon.svg?react";
import Github from "../assets/github.svg?react";
import Discord from "../assets/discord.svg?react";
import X from "../assets/x.svg?react";
import { Menu, X as CloseIcon } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-16 flex items-center justify-between px-6 md:px-20 border-b-[1px] border-zinc-800 fixed top-0 left-0 backdrop-blur-md bg-black/30 z-20">
      {/* Left Side (Logo & Name) */}
      <div className="flex items-center gap-2">
        <Logo width={25} height={25} className="invert" />
        <h1 className="font-[Inter] text-white font-medium">Nodemon</h1>
      </div>

      {/* Center Section with Links and Divider (Hidden on Small Screens) */}
      <div className="hidden md:flex items-center gap-12">
        <div className="flex items-center gap-12 font-[Inter] text-sm text-zinc-200 font-medium">
          <a href="" className="hover:text-[#4F46E5] transition duration-300">
            About
          </a>
          <a href="" className="hover:text-[#4F46E5] transition duration-300">
            Docs
          </a>
          <a href="" className="hover:text-[#4F46E5] transition duration-300">
            Contact
          </a>
        </div>

        {/* Divider Line */}
        <div className="h-6 w-[1px] bg-zinc-300"></div>

        {/* Right Side (Social Icons) */}
        <div className="flex items-center gap-8">
          <Github width={22} height={22} className="invert cursor-pointer" />
          <X width={22} height={22} className="cursor-pointer" />
          <Discord width={22} height={22} className="invert cursor-pointer" />
        </div>
      </div>

      {/* Hamburger Menu (Visible on Small Screens) */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? <CloseIcon size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/90 flex flex-col items-center gap-6 py-6 md:hidden">
          <a href="" className="text-white text-lg hover:text-[#4F46E5]">
            About
          </a>
          <a href="" className="text-white text-lg hover:text-[#4F46E5]">
            Docs
          </a>
          <a href="" className="text-white text-lg hover:text-[#4F46E5]">
            Contact
          </a>

          <div className="flex gap-6 mt-4">
            <Github width={22} height={22} className="invert cursor-pointer" />
            <X width={22} height={22} className="cursor-pointer" />
            <Discord width={22} height={22} className="invert cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
