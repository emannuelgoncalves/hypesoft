
import React from "react";
import Image from 'next/image';
import arrowIcon from "../../../public/images/lazy.svg";
import softwareEnginnerImage from "../../../public/images/softwareenginner.png";

type AboutSectionProps = {
  image: any;
  title: string;
  description: string;
  experience: number;
  projects: number;
};

const AboutSection: React.FC<AboutSectionProps> = ({
  image,
  title,
  description,
  experience,
  projects,
}) => {
  return (
    <section className="my-[100px]" >
      <div className="-mb-6 w-full  max-md:mb-2.5 l">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <Image
              loading="lazy"
              src={softwareEnginnerImage}
              className="object-contain grow w-full aspect-[1.03] max-md:mt-10 l"
              alt="About me"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto w-full max-md:mt-10 l">
              <div className="flex flex-col self-stretch w-full">
                <h2 className="text-5xl font-medium text-white leading-[56px] l max-md:text-4xl max-md:leading-[52px]">
                  {title}
                </h2>
                <p className="mt-5 text-lg leading-7 text-neutral-400 l">
                  {description}
                </p>
              </div>
              <div className="flex flex-wrap gap-10 items-start mt-8 l">
                <div className="flex gap-4 items-center">
                  <div className="self-stretch my-auto text-6xl leading-none text-pink-500 max-md:text-4xl">
                    {experience}+
                  </div>
                  <div className="self-stretch my-auto text-lg leading-7 text-white">
                    Years of <br /> Experience
                  </div>
                </div>
                <div className="flex gap-4 items-center  min-w-[240px]">
                  <div className="self-stretch my-auto text-6xl leading-none text-pink-500 max-md:text-4xl">
                    {projects}+
                  </div>
                  <div className="self-stretch my-auto text-lg leading-7 text-white">
                    Completed <br /> Projects
                  </div>
                </div>
              </div>
              <button className="flex gap-2 items-center px-8 mt-8 text-base font-semibold tracking-wide text-white uppercase bg-violet-700 rounded leading-[56px] max-md:px-5">
                <span className="self-stretch my-auto">Say HI</span>
                <Image
                  loading="lazy"
                  src={arrowIcon}
                  className="object-contain shrink-0 self-stretch my-auto w-9 aspect-[1.8]"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
