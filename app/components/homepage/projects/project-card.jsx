// @flow strict

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

function ProjectCard({ project }) {
  return (
    <div className="group bg-white rounded-3xl p-5 border border-gray-100 hover:border-orange-300 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 overflow-hidden hover:-translate-y-2">
      {/* Project Image Container with Gradient Border Effect */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500 to-pink-500 p-0.5 mb-7">
        <div className="w-full h-full bg-gray-50 rounded-2xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Hover Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      </div>

      <div className="px-3 pb-3">
        {/* Category/Role with Enhanced Styling */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500"></span>
          <span className="text-[11px] font-black uppercase tracking-[0.15em] text-gray-400">
            {project.role}
          </span>
        </div>

        {/* Title & Description with Better Hierarchy */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 tracking-tight leading-snug">
          {project.name}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed mb-7 line-clamp-2 font-medium">
          {project.description}
        </p>

        {/* Footer: Tools & Link - Simplified without numbers */}
        <div className="flex items-center justify-between pt-5 border-t border-gray-100">
          <div className="flex gap-2 flex-wrap">
            {project.tools.slice(0, 3).map((tool, index) => (
              <span key={index} className="text-[10px] font-bold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                {tool}
              </span>
            ))}
          </div>

          <Link
            href={project.demo || '#'}
            target="_blank"
            className="w-11 h-11 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 text-white flex items-center justify-center group-hover:from-orange-500 group-hover:to-pink-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/30 transition-all duration-300"
          >
            <FiArrowRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
