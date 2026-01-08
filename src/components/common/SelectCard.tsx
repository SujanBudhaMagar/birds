import { OptionProps } from "@/types";
import { FaChevronDown } from "react-icons/fa";

const SelectCard = ({ title, options, onChange, name, value }: OptionProps) => {
  return (
    <div className="flex flex-col w-full space-y-1.5">
      <label className="text-base  text-primary tracking-wide">{title}</label>
      <div className="relative w-full">
        <select
          name={name}
          value={value}
          className="text-primary appearance-none w-full  rounded-md py-2 px-4 text-[14px] shadow-xs select border border-border outline-none"
          onChange={onChange}
        >
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value} disabled={opt.disable}>
              {opt.option}
            </option>
          ))}
        </select>
        <FaChevronDown className="text-base absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  );
};

export default SelectCard;
