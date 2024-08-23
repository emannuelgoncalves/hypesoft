
import React from "react";

type HeaderProps = {
  menuItems: string[];
};

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  return (
    <header className="flex z-10 flex-wrap gap-10 justify-between items-center px-72 py-6 w-full text-sm font-bold tracking-wide leading-10 text-white uppercase  max-md:px-5 l">
      <div className="flex gap-2.5 self-stretch py-3 my-auto min-h-[48px] rounded-[80px]" />
      <nav>
        <ul className="flex gap-10 items-start self-stretch my-auto min-w-[240px]">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
