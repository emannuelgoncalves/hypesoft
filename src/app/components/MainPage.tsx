import React from "react";
import Hero from "./Hero";
import SocialLinks from "./SocialLinks";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ProjectsSection from "./ProjectsSection";
import CompaniesSection from "./CompaniesSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import twitterIcon from "../../../public/images/twitter.svg";
import bolinhaIcon from "../../../public/images/bolinha.svg";
import instagramIcon from "../../../public/images/instagram.svg";
import elearningIcon from "../../../public/images/elearning.png";
import quadradoIcon from "../../../public/images/quadrado.svg";
import eduguardIcon from "../../../public/images/eduguard.png";
import humaIcon from "../../../public/images/huma.png";
import carrinhoIcon from "../../../public/images/carrinho.png";
import educareIcon from "../../../public/images/educare.png";
import roboIcon from "../../../public/images/robo.png";
import youtubelogoIcon from "../../../public/images/youtubelogo.svg";
import softwareenginnerIcon from "../../../public/images/softwareenginner.png";
import googlelogoIcon from "../../../public/images/googlelogo.svg";
import adobelogoIcon from "../../../public/images/adobelogo.svg";
import sketchlogoIcon from "../../../public/images/sketchlogo.svg";
import setaroxaIcon from "../../../public/images/setaroxa.svg";
import fotoIcon from "../../../public/images/foto.jpeg";
import quadradorosaIcon from "../../../public/images/quadradorosa.svg";
import quadradopretoIcon from "../../../public/images/quadradopreto.svg";
import setasIcon from "../../../public/images/setas.svg";
import Image from "next/image";

const MainPage: React.FC = () => {
  const heroData = {
    name: "John",
    role: "Software Engineer",
    description:
      "Product Designer, UI/UX Designer, and developer based in Brazil. Over the past 17 years, as an art director and designer, I've worked with big companies and up-and-coming startups.",
  };

  const socialLinks = [
    {
      icon: bolinhaIcon,
      url: "https://facebook.com",
    },
    {
      icon: twitterIcon,
      url: "https://twitter.com",
      isActive: true,
    },

    {
      icon: instagramIcon,
      url: "https://instagram.com",
    },
  ];

  const aboutData = {
    image: softwareenginnerIcon,
    title: "Software Engineer and Infrastructure specialist based in Brazil.",
    description:
      "Morbi quam velit, euismod in imperdiet vitae, elementum et elit. Nunc finibus, felis sit amet sollicitudin sollicitudin, nisi magna feugiat enim, in maximus urna enim ac tortor. Nunc in volutpat ipsum, molestie commodo odio. Quisque auctor nisi mi. Aenean venenatis sapien et interdum interdum.",
    experience: 17,
    projects: 325,
  };

  const services = [
    {
      icon: quadradoIcon,
      title: "UI/UX Design",
    },
    {
      icon: quadradorosaIcon,
      title: "Product Design",
      isActive: true,
    },
    {
      icon: quadradopretoIcon,
      title: "Branding Design",
    },
    {
      icon: setasIcon,
      title: "Front End Development",
    },
  ];

  const projects = [
    {
      image: elearningIcon,
      title: "Eduguard - E-learning Website",
    },
    {
      image: eduguardIcon,
      title: "Eduguard E-learning Website",
      isActive: true,
    },
    {
      image: humaIcon,
      title: "Huma Marketing Agency",
    },
    {
      image: carrinhoIcon,
      title: "Beeryblog Blog Website",
    },
    {
      image: educareIcon,
      title: "Educare Elearning website",
    },
    {
      image: roboIcon,
      title: "Blogy Blog Website",
    },
  ];

  const companiesData = {
    companiesWorked: 289,
    logos: [
      {
        src: youtubelogoIcon,
        alt: "Company 1",
      },
      {
        src: googlelogoIcon,
        alt: "Company 2",
      },
      {
        src: adobelogoIcon,
        alt: "Company 3",
      },
      {
        src: sketchlogoIcon,
        alt: "Company 4",
      },
      {
        src: setaroxaIcon,
        alt: "Company 5",
      },
    ],
  };

  const testimonials = [
    {
      name: "Sundar Pichai",
      role: "CEO & Founder of",
      company: "Google",
      avatar: "placeholder.jpg",
    },
    {
      name: "Shantanu Narayen",
      role: "CEO of",
      company: "Adobe",
      avatar: "placeholder.jpg",
    },
    {
      name: "Noah Levin",
      role: "Director of Design,",
      company: "Figma",
      avatar: "placeholder.jpg",
    },
    {
      name: "Stewart Butterfield",
      role: "CEO & Founder of",
      company: "Slack",
      avatar: "placeholder.jpg",
    },
  ];

  const contactData = {
    address: "House #5, Street Number #98, brasilia- 70000-000, Brazil.",
    emails: ["albert.design@gmail.com", "albert.flores@gmail.com"],
    phones: ["+55 955 258 2699", "+55 955 100 9449"],
    socialIcons: [
      {
        icon: bolinhaIcon,
        link: "https://facebook.com",
      },
      {
        icon: twitterIcon,
        link: "https://twitter.com",
        isActive: true,
      },

      {
        icon: instagramIcon,
        link: "https://instagram.com",
      },

      {
        icon: youtubelogoIcon,
        link: "https://youtube.com",
      },
    ],
  };

  return (
    <main className="-mt-24 w-full">
      <div className="flex relative h-screen">
        <div className="w-full flex flex-col justify-center  items-center container mx-auto px-[50px] z-20">
          <Hero {...heroData} />
          <SocialLinks links={socialLinks} />
        </div>
        <div className="absolute right-52 bottom-0 z-10">
          <Image
            src="/images/header-image.png"
            alt="my photo"
            layout="responsive"
            width={500}
            height={800}
            className="w-full max-w-[750px]  object-contain hidden lg:flex"
          />
        </div>
        <div className="flex flex-col ml-5 w-full">
          <div className="flex flex-col grow w-full bg-violet-700 "></div>
        </div>
      </div>
      <div className="container mx-auto px-5">
        <AboutSection {...aboutData} />
        <ServicesSection services={services} />
        <ProjectsSection projects={projects} />
        <CompaniesSection {...companiesData} />
        <TestimonialsSection testimonials={testimonials} />
        <ContactSection {...contactData} />
      </div>
    </main>
  );
};

export default MainPage;
