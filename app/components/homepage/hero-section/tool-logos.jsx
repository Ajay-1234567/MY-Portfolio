"use client";

import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function ToolLogos() {
    // Select a few key tools to display as a sliding marquee in the hero
    const featuredTools = ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Sketch", "After Effects", "Framer", "Miro"];

    return (
        <div className="py-12 border-t border-gray-100 mt-12">
            <Marquee
                gradient={false}
                speed={40}
                pauseOnHover={true}
                play={true}
                direction="left"
            >
                {featuredTools.map((tool, index) => {
                    const img = skillsImage(tool);
                    return (
                        <div key={index} className="flex items-center gap-3 px-8 transition-all duration-500 cursor-default">
                            {img?.src && (
                                <div className="h-8 w-8 relative">
                                    <Image
                                        src={img.src}
                                        alt={tool}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            )}
                            <span className="text-xl font-bold text-gray-900 tracking-tighter uppercase">{tool}</span>
                        </div>
                    );
                })}
                {/* Subtle space after one full section of sliding tools */}
                <div className="w-24 md:w-48"></div>
            </Marquee>
        </div>
    );
}

export default ToolLogos;
