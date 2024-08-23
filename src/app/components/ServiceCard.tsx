import React from "react";
import direitaIcon from "../../../public/images/direita.svg"
import pretaIcon from "../../../public/images/direitapreta.svg"
import Image from "next/image";

type ServiceCardProps = {
  icon: any;
  title: string;
  isActive?: boolean;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  isActive = false,
}) => {
  return (
    <div
      className={`flex flex-col grow p-8 w-full ${
        isActive ? "bg-white rounded-md shadow-2xl" : "bg-white rounded-md"
      } `}
    >
      <Image
        loading="lazy"
        src={icon}
        className="object-contain w-10 aspect-square"
        alt=""
      />
      <div className="flex flex-col mt-24 w-full max-w-[248px] max-md:mt-10">
        <div className="flex flex-col w-full text-3xl leading-10  text-neutral-800">
          <h3>{title}</h3>
          <div className="flex mt-4 w-16 bg-pink-500 bg-opacity-30 min-h-[3px] rounded-[50px]" />
        </div>
        {isActive ? (
          <button className="flex gap-2 items-center self-start mt-6 text-sm font-semibold tracking-wide text-pink-500 uppercase">
            <span className="self-stretch my-auto">Discuss now</span>
            <Image
              loading="lazy"
              src= {direitaIcon}
              className="object-contain shrink-0 self-stretch my-auto w-9 aspect-[1.5]"
              alt=""
            />
          </button>
        ) : (
          <div className="flex gap-2 items-center mt-6 w-9">
            <Image
              loading="lazy"
              src= {pretaIcon}
              className="object-contain self-stretch my-auto w-9 aspect-[1.5]"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
