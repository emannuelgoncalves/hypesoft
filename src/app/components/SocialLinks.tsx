
import Image from "next/image";
import React from "react";

type SocialLink = {
  icon: string;
  url: string;
  isActive?: boolean;
};

type SocialLinksProps = {
  links: SocialLink[];
};

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex flex-col self-start mt-52 max-md:mt-10">
      <h2 className="text-base text-white">Follow me on</h2>
      <div className="flex gap-3 items-start mt-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className={`flex gap-2 justify-center items-center px-3.5 w-12 h-12 rounded ${
              link.isActive
                ? "bg-violet-700"
                : "bg-white border border-solid border-zinc-200"
            }`}
            aria-label={`Follow on ${link.url.split(".")[1]}`}
          >
            <Image
              loading="lazy"
              src={link.icon}
              className="object-contain self-stretch my-auto w-5 aspect-square"
              alt=""
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
