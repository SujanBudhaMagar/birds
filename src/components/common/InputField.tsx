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
      <label className="text-primary text-xs font-semibold">{title}</label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        className="bg-gray-200 rounded-md py-2 px-3 text-sm shadow-sm"
      />
    </div>
  );
};

export default InputCard;
