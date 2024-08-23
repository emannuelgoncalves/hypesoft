import Image from "next/image";
import React from "react";

type CompanyLogo = {
  src: string;
  alt: string;
};

type CompaniesSectionProps = {
  companiesWorked: number;
  logos: CompanyLogo[];
};

const CompaniesSection: React.FC<CompaniesSectionProps> = ({
  companiesWorked,
  logos,
}) => {
  return (
    <section className="my-[100px] grid grid-cols-2  pt-5 my-auto text-3xl ">
      <div>
        <p className="text-white">
          I worked with{" "}
          <span className="text-pink-500">{companiesWorked}+</span> Companies
          all over the World.
        </p>
      </div>
      <div className="flex flex-row gap-5">
        {logos.map((logo, index) => (
          <div key={index} className="flex gap-2.5  p-5 bg-white rounded-lg">
            <Image
              loading="lazy"
              src={logo.src}
              className="object-contain"
              alt={logo.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompaniesSection;
