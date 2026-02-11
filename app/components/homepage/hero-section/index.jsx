"use client";

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#f3f4f6]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-orange-900">Available for New Opportunities</span>
            </div>

            {/* Title with Enhanced Typography */}
            <div>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-gray-900 leading-[0.85] mb-3 uppercase">
                {personalData.name}<span className="text-orange-500">.</span>
              </h1>
              <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                {personalData.designation}
              </p>
            </div>

            {/* Professional Tagline */}
            <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
              {personalData.description}
            </p>

            {/* CTAs with Enhanced Styling */}
            <div className="flex flex-wrap items-center gap-5 pt-4">
              <Link
                href="#contact"
                className="group bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-base hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="flex items-center gap-2">
                  Let's Work Together
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              <Link
                href="#projects"
                className="text-gray-900 font-bold text-base flex items-center gap-2 group px-6 py-4 border-2 border-gray-200 rounded-full hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
              >
                View Projects
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </Link>
              <Link
                href={personalData.resume}
                target='_blank'
                className="text-gray-900 font-bold text-base flex items-center gap-2 group px-6 py-4 border-2 border-gray-200 rounded-full hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
              >
                Download CV
                <span className="group-hover:translate-y-1 transition-transform"><FaDownload /></span>
              </Link>
            </div>
          </div>

          {/* Right Column - Profile Photo */}
          <div className="relative">
            {/* Professional Profile Display */}
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-br from-orange-500 to-pink-500 p-1">
              <div className="w-full h-full bg-white rounded-[2.3rem] overflow-hidden">
                <Image
                  src={personalData.profile || '/profile.png'}
                  alt={`${personalData.name} - ${personalData.designation}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-xl border border-gray-100">
              <p className="text-sm font-bold text-gray-900">{personalData.designation}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
