"use client";
import { HeaderProps } from "@/types";
import { usePathname } from "next/navigation";
import { FaPlus } from "react-icons/fa";

const Header: React.FC<HeaderProps> = ({
  title,
  des,
  button,
  button2,
  onClick,
  onClick1,
}) => {
  const pathName = usePathname();
  return (
    <header className="flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg text-primary font-bold">{title}</h1>
        <span className="text-base text-[#0000004D]">{des}</span>
      </div>
      <div className="flex gap-5">
        <button
          className="bg-primary rounded-lg text-sm flex gap-1 items-center text-white px-4 py-3"
          onClick={onClick}
        >
          <FaPlus />
          <span>{button}</span>
        </button>
        {pathName === "/dashboard/all-hatcheries" && (
          <button
            className="bg-primary rounded-lg text-sm flex gap-1 items-center text-white px-4 py-3"
            onClick={onClick1}
          >
            <FaPlus />
            <span>{button2}</span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
