import React from "react";

type HeroProps = {
  name: string;
  role: string;
  description: string;
};

const Hero: React.FC<HeroProps> = ({ name, role, description }) => {
  return (
    <section className="flex flex-col w-full l justify-end	">
      <h1 className="flex overflow-hidden flex-col pr-1.5 pb-2 max-w-full text-7xl leading-[98px] w-[758px] max-md:text-4xl max-md:leading-[54px]">
        <span className="text-white">
          Hello I'm John a<span className="text-violet-700"> {role}.</span>
        </span>
        <div className="flex shrink-0 -mt-11 max-w-full h-9 bg-violet-700 bg-opacity-10 w-[594px]" />
      </h1>
      <p className="mt-8 text-xl leading-8 text-neutral-400 l">{description}</p>
      <div className="flex gap-4 items-start self-start mt-8 text-base font-semibold tracking-wide leading-[56px]">
        <button className="gap-3 self-stretch px-8 text-white bg-violet-700 rounded-md max-md:px-5 uppercase">
          Hire Me
        </button>
        <button className="gap-3 self-stretch px-8 bg-white rounded-md border border-solid border-zinc-200 text-neutral-800 max-md:px-5 uppercase">
          View work
        </button>
      </div>
    </section>
  );
};

export default Hero;
