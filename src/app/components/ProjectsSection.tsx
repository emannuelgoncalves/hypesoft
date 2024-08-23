
import React from "react";
import ProjectCard from "./ProjectCard";

type Project = {
  image: any;
  title: string;
  isActive?: boolean;
};

type ProjectsSectionProps = {
  projects: Project[];
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section className="my-[100px]" >
      <h2 className="flex flex-col items-center text-4xl leading-tight text-white">
        My Selected Work
        <div className="flex mt-4 w-20 bg-pink-500 rounded min-h-[3px]" />
      </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-14 gap-x-5 gap-y-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
    </section>
  );
};

export default ProjectsSection;
