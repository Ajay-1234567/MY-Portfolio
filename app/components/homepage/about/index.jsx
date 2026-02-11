// @flow strict

import { personalData } from "@/utils/data/personal-data";

function AboutSection() {
  return (
    <div id="about" className="py-20 lg:py-28 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-200/20 to-orange-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header with Subtitle */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              About <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Passionate about creating meaningful digital experiences
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-10 md:p-12 border border-gray-100 hover:shadow-3xl transition-shadow duration-500">
            {/* Description with Better Typography */}
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              {personalData.description}
            </p>

            {/* Professional Highlights - UX Focused */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 pt-10 border-t border-gray-100">
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-3">3+</div>
                <div className="text-sm font-bold text-gray-800 mb-1">Case Studies</div>
                <div className="text-xs text-gray-500">End-to-end UX solutions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-3">UX</div>
                <div className="text-sm font-bold text-gray-800 mb-1">Research First</div>
                <div className="text-xs text-gray-500">User-centered design</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-3">Mobile</div>
                <div className="text-sm font-bold text-gray-800 mb-1">App Design</div>
                <div className="text-xs text-gray-500">iOS & Android platforms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;