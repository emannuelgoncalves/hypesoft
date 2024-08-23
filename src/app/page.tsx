import React from "react";
import Header from "./components/Header";
import Image from "next/image";
import MainPage from "./components/MainPage";

export default function Home() {
  const menuItems = ["About", "Services", "Works", "Contact"];

  return (
    <div className="flex overflow-hidden flex-col ">
      <Header menuItems={menuItems} />
      <MainPage />
      <footer className="flex flex-col justify-center items-center w-full py-5">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={250}
          height={250}
          className="mb-5"
        />
        <p className="text-[#a5a5a5] ">
          {" "}
          Made with <span className="text-pink-500">♥</span> by John and{" "}
          <span className="font-semibold text-violet-700">Hypesoft</span>
        </p>
      </footer>
    </div>
  );
}
