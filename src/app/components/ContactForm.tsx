import React from "react";
import setinhaIcon from "../../../public/images/setinha.svg"
import Image from "next/image";

const ContactForm: React.FC = () => {
  return (
    <form className="flex flex-col p-12 w-full text-base bg-white rounded-lg shadow-lg col-span-2">
      <h2 className="text-3xl font-medium leading-none text-neutral-800">
        Let me know here.
      </h2>
      <div className="flex flex-col mt-6 w-full max-w-[664px] text-neutral-400 l">
        <div className="flex flex-wrap gap-4 items-start l">
          <input
            type="text"
            placeholder="Full name"
            aria-label="Full name"
            className="px-5 py-3.5 bg-white rounded border border-solid border-zinc-200 min-w-[240px] w-[324px]"
          />
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            className="px-5 py-3.5 bg-white rounded border border-solid border-zinc-200 min-w-[240px] w-[324px]"
          />
        </div>
        <input
          type="text"
          placeholder="Subjects"
          aria-label="Subjects"
          className="px-5 py-3.5 mt-4 w-full  bg-white rounded border border-solid border-zinc-200"
        />
        <textarea
          placeholder="Message"
          aria-label="Message"
          className="px-5 pt-3.5 pb-24 mt-4 w-full  bg-white rounded border border-solid border-zinc-200 max-md:pb-28"
        ></textarea>
      </div>
      <button className="flex gap-3 justify-center items-center self-start px-8 mt-6 font-semibold tracking-wide text-white uppercase bg-violet-700 rounded-md leading-[56px] max-md:px-5">
        <span className="self-stretch my-auto">Send message</span>
        <Image
          loading="lazy"
          src={setinhaIcon}
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          alt=""
        />
      </button>
    </form>
  );
};

export default ContactForm;
