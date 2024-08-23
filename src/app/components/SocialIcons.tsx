
import Image from 'next/image';
import React from 'react';

type SocialIconProps = {
  icon: string;
  link: string;
  isActive?: boolean;
};


const SocialIcons: React.FC<{ icons: SocialIconProps[] }> = ({ icons }) => {
  return (
    <div className="flex gap-3 items-start self-start mt-6">
      {icons.map((icon, index) => (
        <a
          key={index}
          href={icon.link}
          className={`flex gap-2 justify-center items-center px-5 ${
            icon.isActive ? 'bg-violet-700' : 'bg-white border border-solid border-zinc-200'
          } h-[60px] rounded-[33px] w-[60px]`}
          aria-label={`Visit our ${icon.link.split('.')[1]} page`}
        >
          <Image loading="lazy" src={icon.icon} className="object-contain self-stretch my-auto w-5 aspect-square" alt="" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;