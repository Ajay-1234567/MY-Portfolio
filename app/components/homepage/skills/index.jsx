"use client";

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            My Skills & <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Tools</span>
          </h2>

          {/* Sliding Skills Marquee */}
          <div className="w-full">
            <Marquee
              gradient={false}
              speed={50}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
            >
              {skillsData.map((skill, id) => {
                const skillImage = skillsImage(skill);
                return (
                  <div key={id} className="flex items-center gap-6 px-16 transition-all duration-500 cursor-default">
                    {skillImage?.src && (
                      <div className="h-10 w-10 relative">
                        <Image
                          src={skillImage.src}
                          alt={skill}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <span className="text-2xl font-bold text-gray-900 tracking-tighter uppercase">{skill}</span>
                  </div>
                );
              })}
              {/* Subtle space after one full section of sliding tools */}
              <div className="w-24 md:w-48"></div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;