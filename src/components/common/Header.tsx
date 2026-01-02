import { HeaderProps } from "@/types";
import { FaPlus } from "react-icons/fa";

const Header: React.FC<HeaderProps> = ({ title, des, button, onClick }) => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <h1 className="text-sm text-primary font-bold">{title}</h1>
        <span className="text-xs text-secondary">{des}</span>
      </div>
      <div
        className="bg-primary rounded-lg text-[10px] flex gap-1 items-center text-white p-2"
        onClick={onClick}
      >
        <FaPlus />
        <button>{button}</button>
      </div>
    </header>
  );
};

export default Header;
