"use client";

import Link from 'next/link';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 flex items-center justify-between shadow-sm">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-tighter text-gray-900 group-hover:text-orange-500 transition-colors">AJAY<span className="text-orange-500">.</span></span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="#about" className="text-sm font-semibold text-gray-600 hover:text-orange-500 transition-colors">About</Link>
            <Link href="#projects" className="text-sm font-semibold text-gray-600 hover:text-orange-500 transition-colors">Case Studies</Link>
            <Link href="#contact" className="text-sm font-semibold text-gray-600 hover:text-orange-500 transition-colors">Contact</Link>
          </div>


          <div className="flex items-center gap-4">
            <Link href="#contact" className="bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all shadow-md">
              Hire Me
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
