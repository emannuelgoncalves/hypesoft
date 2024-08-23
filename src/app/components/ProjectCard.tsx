import React from "react";
import direitaIcon from "../../../public/images/direita.svg"
import Image from "next/image";

type ProjectCardProps = {
  image: string;
  title: string;
  isActive?: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  isActive = false,
}) => {
  return (
    <div
      className={`flex flex-col  ${
        isActive ? "shadow-2xl" : ""
      }`}
    >
      <Image
        loading="lazy"
        src={image}
        className="object-contain"
        alt={title}
      />
      <div className="flex flex-col p-6 w-full bg-white rounded-b-md max-md:px-5 l">
        <h3 className="text-2xl text-neutral-800">{title}</h3>
        {isActive ? (
          <button className="flex gap-2 items-center self-start mt-4 text-sm font-semibold tracking-wide leading-none text-pink-500 uppercase">
            <span className="self-stretch my-auto">View Project</span>
            <Image
              loading="lazy"
              src={direitaIcon}
              className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.6]"
              alt=""
            />
          </button>
        ) : (
          <div className="flex gap-2 items-center mt-4 w-8">
            <Image
              loading="lazy"
              src={direitaIcon}
              className="object-contain self-stretch my-auto w-8 aspect-[1.6]"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
