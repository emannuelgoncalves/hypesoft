import React from "react";
import localizacaoIcon from "../../../public/images/localizacao.svg" 
import Image from "next/image";
import correioIcon from "../../../public/images/correio.svg"
import telefoneIcon from "../../../public/images/telefone.svg"

type ContactInfoProps = {
  address: string;
  emails: string[];
  phones: string[];
};

const ContactInfo: React.FC<ContactInfoProps> = ({
  address,
  emails,
  phones,
}) => {
  return (
    <div className="flex flex-col justify-between mt-6 l">
      <div className="flex gap-5 items-center l">
        <div className="flex flex-col justify-center items-center self-stretch px-6 my-auto w-20 h-20 bg-indigo-500 bg-opacity-10 rounded-[1000px] max-md:px-5">
          <Image
            loading="lazy"
            src= {localizacaoIcon}
            className="object-contain w-8 aspect-square"
            alt=""
          />
        </div>
        <address className="self-stretch my-auto text-lg leading-7 text-neutral-800 w-[340px] not-italic">
          {address}
        </address>
      </div>
      <div className="flex gap-5 items-center mt-6 l">
        <div className="flex flex-col justify-center items-center self-stretch px-6 my-auto w-20 h-20 bg-indigo-500 bg-opacity-10 rounded-[1000px] max-md:px-5">
          <Image
            loading="lazy"
            src={correioIcon}
            className="object-contain w-8 aspect-square"
            alt=""
          />
        </div>
        <div className="self-stretch my-auto text-lg leading-7 text-neutral-800 w-[340px]">
          {emails.map((email, index) => (
            <a key={index} href={`mailto:${email}`} className="block">
              {email}
            </a>
          ))}
        </div>
      </div>
      <div className="flex gap-5 items-center mt-6 l">
        <div className="flex flex-col justify-center items-center self-stretch px-6 my-auto w-20 h-20 bg-indigo-500 bg-opacity-10 rounded-[1000px] max-md:px-5">
          <Image
            loading="lazy"
            src= {telefoneIcon}
            className="object-contain w-8 aspect-square"
            alt=""
          />
        </div>
        <div className="self-stretch my-auto text-lg leading-7 text-neutral-800 w-[340px]">
          {phones.map((phone, index) => (
            <a key={index} href={`tel:${phone}`} className="block">
              {phone}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
