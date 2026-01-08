import { InputField } from "@/types";

const InputCard = ({
  name,
  title,
  onChange,
  type,
  placeholder,
  value,
}: InputField) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-primary text-base  tracking-wide">{title}</label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        className="bg-white text-primary rounded-md py-2 px-3 text-sm shadow-xs border border-border outline-none"
      />
    </div>
  );
};

export default InputCard;
