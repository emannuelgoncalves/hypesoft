import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SocialIcons from "./SocialIcons";

type ContactSectionProps = {
  address: string;
  emails: string[];
  phones: string[];
  socialIcons: {
    icon: string;
    link: string;
    isActive?: boolean;
  }[];
};

const ContactSection: React.FC<ContactSectionProps> = ({
  address,
  emails,
  phones,
  socialIcons,
}) => {
  return (
    <section className="my-[100px] flex gap-5 flex-col md:flex-row">
      <ContactForm />
      <div className="relative">
        <div className="absolute -right-[40px] -top-[18px] ">
          <div className="flex gap-4 items-start">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 gap-2.5 bg-pink-500 rounded-3xl h-[5px] w-[5px]"
              />
            ))}
          </div>
          {[...Array(3)].map((_, rowIndex) => (
            <div key={rowIndex} className="flex gap-4 items-start mt-4">
              {[...Array(8)].map((_, colIndex) => (
                <div
                  key={colIndex}
                  className="flex shrink-0 gap-2.5 bg-pink-500 rounded-3xl h-[5px] w-[5px]"
                />
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col p-12 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-medium leading-none text-neutral-800">
            Get In Touch
          </h2>
          <ContactInfo address={address} emails={emails} phones={phones} />
          <SocialIcons icons={socialIcons} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
