import Image from "next/image";
import React from "react";

type TestimonialCardProps = {
  name: string;
  role: string;
  company: string;
  avatar: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  avatar,
}) => {
  return (
    <div className="flex gap-4 items-center p-6 bg-white rounded max-md:px-5">
      <div className="flex bg-[#A5A5A5] shrink-0 self-stretch my-auto rounded-full bg-neutral-400 fill-neutral-400 h-[52px] w-[52px]" />
      <div className="flex flex-col self-stretch my-auto w-[196px]">
        <div className="text-lg leading-loose text-neutral-800">{name}</div>
        <div className="mt-1 text-sm leading-none text-pink-500">
          <span className="text-slate-500">{role} </span>
          <span className="text-pink-500">{company}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
