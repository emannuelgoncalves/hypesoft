import React from "react";
import TestimonialCard from "./TestimonialCard";
import balaoIcon from "../../../public/images/balao.svg";
import Image from "next/image";
import estrelinhaIcon from "../../../public/images/estrelinha.svg";
import virgulaIcon from "../../../public/images/virgula.svg";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  avatar: string;
};

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
}) => {
  return (
    <section className="my-[100px]">
      <h2 className="flex flex-col justify-center items-center text-4xl leading-tight text-white ">
        Testimonial
        <div className="flex mt-4 w-20 bg-pink-500 rounded min-h-[3px]" />
      </h2>
      <div className="mt-12 w-full rounded-none max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col gap-2">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div className="flex flex-col ">
            <div className="flex relative flex-col pt-6 pr-6 pb-12 pl-16 w-full text-neutral-800 max-md:px-5 max-md:mt-7 h-full">
              <Image
                loading="lazy"
                src={balaoIcon}
                className="object-cover absolute inset-0 size-full"
                alt=""
              />
              <div className="flex relative flex-wrap gap-5 justify-between w-full text-lg leading-loose l">
                <div className="flex gap-2 items-center my-auto">
                  <Image
                    loading="lazy"
                    src={estrelinhaIcon}
                    className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
                    alt=""
                  />
                  <div className="self-stretch my-auto">5.0 Star Rating</div>
                </div>
                <Image
                  loading="lazy"
                  src={virgulaIcon}
                  className="object-contain shrink-0 w-24 aspect-[1.28]"
                  alt=""
                />
              </div>
              <blockquote className="relative mt-2 mr-7 text-3xl leading-[51px] max-md:mr-2.5 l">
                "If you're looking for someone who will challenge your UX/UI
                thinking and really cut to the core of what's important for
                users, then Jesse is your man. On top of that, he brings a level
                of enthusiasm to the craft that's energizing for everyone who
                works with him."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
