import { OptionProps } from "@/types";
import { FaChevronDown } from "react-icons/fa";

const SelectCard = ({ title, options, onChange, name, value }: OptionProps) => {
  return (
    <div className="flex flex-col w-full space-y-1">
      <label className="text-base font-semibold text-primary">{title}</label>
      <div className="relative w-full">
        <select
          name={name}
          value={value}
          className="text-primary appearance-none w-full bg-gray-200 rounded-md py-2 px-3 text-base shadow-sm select border border-border"
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
