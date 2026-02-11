import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";
import Link from "next/link";

function Projects() {
  return (
    <div id="projects" className="py-20 lg:py-28 bg-[#fafafa]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - Simplified */}
          <div className="mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-none mb-6">
              Featured <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-2xl leading-relaxed">
              A curated selection of digital products and comprehensive UX case studies showcasing user-centered design solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projectsData.slice(0, 6).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Projects;