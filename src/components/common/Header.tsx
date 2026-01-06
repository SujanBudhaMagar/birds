import { HeaderProps } from "@/types";
import { FaPlus } from "react-icons/fa";

const Header: React.FC<HeaderProps> = ({ title, des, button, onClick }) => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg text-primary font-bold">{title}</h1>
        <span className="text-base text-secondary">{des}</span>
      </div>
      <div
        className="bg-primary rounded-lg text-sm flex gap-1 items-center text-white px-4 py-3"
        onClick={onClick}
      >
        <FaPlus />
        <button>{button}</button>
      </div>
    </header>
  );
};

export default Header;
