
import React from "react";
import ServiceCard from "./ServiceCard";

type Service = {
  icon: any;
  title: string;
  isActive?: boolean;
};

type ServicesSectionProps = {
  services: Service[];
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className="my-[100px]" >
      <h2 className="flex flex-col items-center text-4xl leading-tight text-white">
        My Service
        <div className="flex mt-4 w-20 bg-pink-500 rounded min-h-[3px]" />
      </h2>
      <div className="mt-12 w-full rounded-md max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          {services.map((service, index) => (
            <ServiceCard {...service} key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
